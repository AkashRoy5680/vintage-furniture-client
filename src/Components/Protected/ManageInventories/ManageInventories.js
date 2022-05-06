import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';

const ManageInventories = () => {
  const [products, setProducts] = useInventory();
  const [quantity,setQuantity]=useState(0);
  const navigate=useNavigate();

 // console.log((quantity));

  const handleDelete = (id) => {
    //Delete a Data from Server

    const proceed = window.confirm("Are you sure want to delete?");
    if (proceed) {
    fetch(`http://localhost:5000/inventory/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    const remainingProducts = products.filter((product) => product._id !== id);
    setProducts(remainingProducts);
    }
  };

  //Delived button update method

  const deliveredQuantity=(x)=>{
    setQuantity(x);

    console.log(x)
    const updatedQuantity=quantity;
    const url=`http://localhost:5000/deliver`;
        fetch(url,{
            method:"PUT",
            headers:{
                "content-type":"application/json",
            },
            body:JSON.stringify(updatedQuantity),
        })
        .then(res=>res.json())
        .then(data=>{
        console.log(data)
        alert("Delivered");
    
        })
    
  }



  return (
    <div>
       <h2 className='m-3'>Manage Your Inventory</h2>
       <div className="inventories w-100 mx-auto">
        <table className="">
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>SoldItem</th>
            <th>SupplierName</th>
            <th className='bg-info'>D/D/R</th>
            
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
                <FontAwesomeIcon className='delete-icon m-2' icon={faTrashAlt}></FontAwesomeIcon>
                </button>
                <button onClick={()=>deliveredQuantity(parseInt(product.quantity)-1)} className='m-2'>Delivered</button>
              
                <Link to={`/update/${product._id}`}><button className='m-1'>Restock</button></Link>
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