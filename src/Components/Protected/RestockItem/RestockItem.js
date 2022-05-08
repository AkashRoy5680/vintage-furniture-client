import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

        const RestockItem = () => {
        const{id}=useParams();
        //console.log(id);
        const [quantity,setQuantity]=useState({});
        let stock=parseInt(quantity?.quantity);
        console.log(stock);
        useEffect( ()=>{
        const url=`https://pacific-beach-83563.herokuapp.com/inventory/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setQuantity(data))
        },[]);

    
        const handleUpdateQuantity=(event)=>{
        event.preventDefault();
        const quantity=parseInt(event.target.quantity.value);
        const newQuantity=(stock+quantity);
        const updatedQuantity={newQuantity};

        //send data to server

        const url=`https://pacific-beach-83563.herokuapp.com/restock/${id}`;
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
        alert("Quantity added");
        event.target.reset();
        })
    }
    return (
        <div>
            <h2>Restock Your Item</h2>
            <form onSubmit={handleUpdateQuantity}>
                <input className='mb-2' type="number" name="quantity" id="" placeholder='Restock Item' />
                <br/>
                <input className='bg-info' type="submit" value="Update Quantity" />
            </form>
        </div>
    );
};

export default RestockItem;