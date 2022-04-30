import React from 'react';
import useProducts from '../../hooks/useProducts';
import "./ManageInventories.css"

const ManageInventories = () => {
    const[products,setProducts]=useProducts();

    const handleDelete=(id)=>{
    //Delete a Data from Server

    fetch(`http://localhost:5000/product/${id}`,{
        method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })
    };

    return (
       <div>
        <h2>Manage Your Inventories</h2>
        <div className='inventories w-50 mx-auto'>
        <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
        </tr>
        {products.map((product) => {
          return (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <button onClick={()=>handleDelete(product._id)}>Delete</button>
            </tr>
          )
        })}
      </table>
         
        </div>
        <button className='mt-3'>Add New Item</button>
       </div>
    );
};




export default ManageInventories;
