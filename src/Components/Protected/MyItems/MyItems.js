import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase/Firebase.init';

const MyItems = () => {
    const [items,setItems]=useState([]);
    const[user]=useAuthState(auth);
    const navigate=useNavigate();
    useEffect( ()=>{
        const getitems=async()=>{
            const email=user?.email;
            const url =`http://localhost:5000/items?email=${email}`;
            try{
                const{data}=await axios.get(url,{
                    headers:{
                        authorization:`Bearer ${localStorage.getItem("accessToken")}`
                    }
                });
                setItems(data);
            }
            catch(error){
                
                if(error.response.status===401||error.response.status===403){
                    signOut(auth);
                    navigate("/login");
                    alert(error.message);
                }
            }
    }
    getitems();
    },[user])

    return (
        <div>
            <h2 className='text-primary m-3'>Your Items: </h2>
            <div className="inventories w-100 mx-auto mb-5">
        <table className="">
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>SupplierName</th>
            
          </tr>
          {items.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.supplierName}</td>
              </tr>
            );
          })}
        </table>
      </div>
        </div>
    );
};

export default MyItems;