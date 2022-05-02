import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';
import "./table.css"

const ManageInventories = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useInventory();

  const handleDelete = (id) => {
    //Delete a Data from Server

    fetch(`http://localhost:5000/inventory/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    const remainingProducts = products.filter((product) => product._id !== id);
    setProducts(remainingProducts);
  };
  return (
    <div>
      <h2>Manage Your Inventories</h2>
      <div className="inventories w-100 mx-auto">
        <table className="">
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>SoldItem</th>
            <th>SupplierName</th>
            
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
                  Delete
                </button>
              </tr>
            );
          })}
        </table>
      </div>
      <button onClick={() => navigate("/additem")} className="m-3 p-3">
        Add New Item
      </button>
    </div>
  );
};

export default ManageInventories;