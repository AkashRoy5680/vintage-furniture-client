import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useInventoryDetails from "../../hooks/useInventoryDetails";

const Inventory = () => {
  const { id } = useParams();
  const [products, setProducts] = useState({});
  useEffect(() => {
    const url = `https://pacific-beach-83563.herokuapp.com/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div
      style={{
        border: "2px solid orange",
        background: "lightblue",
        borderRadius: "15px",
      }}
      className="w-50 p-3 mx-auto m-3"
    >
      <div className="d-flex  ">
        <div className="w-75">
          <img src={products.img} class="card-img-top" alt="..." />
        </div>
        <div style={{ marginLeft: "15px" }} className="w-50 px-3">
          <h5 class="card-title">
            <b>{products.name}</b>
          </h5>
          <p class="card-text">
            <b>Description:</b> {products.description}
          </p>
          <p class="card-text">
            <b>Price:</b> {products.price}
          </p>
          <p class="card-text">
            <b>Quantity:</b> {products.quantity}
          </p>
          <p class="card-text">
            <b>SoldItem:</b> {products.soldItem}
          </p>
          <p class="card-text">
            <b>SupplierName:</b> {products.supplierName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
