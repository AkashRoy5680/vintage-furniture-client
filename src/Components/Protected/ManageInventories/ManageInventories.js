import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useInventory from "../../hooks/useInventory";
import PageTitle from "../../PageTitle/PageTitle";
import "./ManageInventories.css";

const ManageInventories = () => {
  //const [products, setProducts] = useInventory();

  const navigate = useNavigate();
  const [deliver, setDeliver] = useState({});
  //console.log(deliver);
  let newDeliver = parseInt(deliver?.quantity);
  //console.log(newDeliver)
  const [pageCount, setpageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);
  const [products, setProducts] = useState([]);

  //for pagination
  useEffect(() => {
    fetch(
      `https://pacific-beach-83563.herokuapp.com/inventory?page=${page}&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [page, size]);

  useEffect(() => {
    fetch(`https://pacific-beach-83563.herokuapp.com/productCount`)
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pages = Math.ceil(count / 5);
        setpageCount(pages);
      });
  }, []);

  //for delivered button

  useEffect(() => {
    const url = `https://pacific-beach-83563.herokuapp.com/inventory`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDeliver(data));
  }, []);

  // console.log((quantity));

  const handleDelete = (id) => {
    //Delete a Data from Server

    const proceed = window.confirm("Are you sure want to delete?");
    if (proceed) {
      fetch(`https://pacific-beach-83563.herokuapp.com/inventory/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
      const remainingProducts = products.filter(
        (product) => product._id !== id
      );
      setProducts(remainingProducts);
    }
  };

  //Delived button update method

  const deliveredQuantity = (id,quantity) => {
    let stock=parseInt(quantity-1);
    console.log(stock)
    const updatedQuantity = { stock };
    const url = `https://pacific-beach-83563.herokuapp.com/deliver/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Delivered");
      });
  };

  return (
    <div>
      <PageTitle title="Manage Inventories"></PageTitle>
      <h2 className="m-3">Manage Your Inventory</h2>
      <div style={{ overflow: "scroll" }} className="inventories w-100 mx-auto">
        <table className="">
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>SoldItem</th>
            <th>SupplierName</th>
            <th className="bg-info">D/D/R</th>
          </tr>
          {products.map((product) => {
            return (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.soldItem}</td>
                <td>{product.supplierName}</td>
                <button onClick={() => handleDelete(product._id)}>
                  <FontAwesomeIcon
                    className="delete-icon m-2"
                    icon={faTrashAlt}
                  ></FontAwesomeIcon>
                </button>
                <button
                  onClick={() => deliveredQuantity(product._id,product.quantity)}
                  className="m-2"
                >
                  Delivered
                </button>

                <Link to={`/update/${product._id}`}>
                  <button className="m-1">Restock</button>
                </Link>
              </tr>
            );
          })}
        </table>
        <div className=" w-25 mx-auto m-3 pagination">
          {[...Array(pageCount).keys()].map((number) => (
            <button
              className={page === number ? "selected" : ""}
              onClick={() => setPage(number)}
              style={{ marginRight: "10px", border: "2px solid orange" }}
            >
              {number + 1}
            </button>
          ))}
          <select onChange={(e) => setSize(e.target.value)}>
            <option value="5" selected>
              5
            </option>
            <option value="10">10</option>
          </select>
        </div>
      </div>
      <button onClick={() => navigate("/additem")} className="m-3 p-3">
        Add New Item
      </button>
    </div>
  );
};

export default ManageInventories;
