import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../Firebase/Firebase.init";
import useInventory from "../../hooks/useInventory";
import PageTitle from "../../PageTitle/PageTitle";

const MyItems = () => {
  const [items, setItems] = useState([]);
  const [products, setProducts] = useInventory();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    const getitems = async () => {
      const email = user?.email;
      const url = `https://pacific-beach-83563.herokuapp.com/items?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setItems(data);
      } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
          alert(error.message);
        }
      }
    };
    getitems();
  }, [user]);

  const handleDelete = (id) => {
    //Delete user added Data from Server

    const proceed = window.confirm("Are you sure want to delete?");
    if (proceed) {
      fetch(`https://pacific-beach-83563.herokuapp.com/myitems/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
      const remainingItems = items.filter((item) => item._id !== id);
      setItems(remainingItems);
    }
  };

  return (
    <div>
      <PageTitle title="MyItems"></PageTitle>
      <h2 className="text-dark m-3">Your Items: </h2>
      <div
        style={{ overflow: "scroll" }}
        className="inventories w-100 mx-auto mb-5"
      >
        <table className="">
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>SupplierName</th>
            <th className="bg-danger">Delete</th>
          </tr>
          {items.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.supplierName}</td>
                <button className="m-3" onClick={() => handleDelete(item._id)}>
                  <FontAwesomeIcon
                    className="delete-icon"
                    icon={faTrashAlt}
                  ></FontAwesomeIcon>
                </button>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default MyItems;
