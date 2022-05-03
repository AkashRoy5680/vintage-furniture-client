import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import useInventory from '../../hooks/useInventory';
import "./table.css";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const ManageInventories = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useInventory();
  const [quantity,setQuantity]=useInventory();

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

  //update Quantity
/*
  const handleUpdate=(id)=>{
    const newQuantity=quantity-1;
    const updateQuantity={newQuantity}
    const url=`http://localhost:5000/inventory/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(updateQuantity),
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      alert("Quantity Updated");
    })
} */
/*
//Restock Product

const handleRestock=(event)=>{
  event.preventDefault();
  const product=event.target.product.value;
  const updatedProduct={product};

  //send data to server

  const url=`http://localhost:5000/inventory/${id}`;
  fetch(url,{
      method:"PUT",
      headers:{
          "content-type":"application/json",
      },
      body:JSON.stringify(updatedProduct),
  })
  .then(res=>res.json())
  .then(data=>{
  console.log(data)
  alert("product added successfully");
  event.target.reset();
  })
}*/
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
                  <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
                </button>
                <button className='m-2'>Delivered</button>
              </tr>
            );
          })}
        </table>
      </div>
      <button onClick={() => navigate("/additem")} className="m-3 p-3">
        Add New Item
      </button>

      <div className='m-3'>
        <h3 className='text-success'>Restock the Items</h3>
        <form >
          <input className='m-2' type="text" name="product" placeholder='Import product' required /><br/>
          <input type="submit" value="ItemRestock" />
        </form>
      </div>  
     
    </div>
  );
};

export default ManageInventories;