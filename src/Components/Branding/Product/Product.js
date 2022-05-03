import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
  const { _id, name, img } = product;
  const navigate = useNavigate();

  const redirectInventory = (id) => {
    navigate(`/singleinventory/${id}`);
  };
  return (
    <div style={{border:"2px solid orange"}} className="product shadow-lg ">
      <img className="w-100 mb-2" src={img} alt="" />
      <h3>{name}</h3>
      <button
        className="btn btn-success"
        onClick={() => redirectInventory(_id)}>
        Stock Update
      </button>
    </div>
  );
};

export default Product;
