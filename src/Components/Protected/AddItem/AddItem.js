import React from 'react';
import { useForm } from "react-hook-form";

    const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
    console.log(data);

    //send data to server
    const url=`http://localhost:5000/product`
    fetch(url,{
        method:"POST",
        headers:{
            "content-Type":"application/json",
        },
        body:JSON.stringify(data),
    })
    .then(res=>res.json())
    .then(result=>{
        console.log("Data is",result);
    })
    };

   
    return (
      <div className='w-50 mx-auto'>
      <h2 className='mt-3 text-success'>Add New Item ...</h2>
      <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
      <input className='mb-2' placeholder='Product Name' {...register("name")} />
      <textarea className='mb-2' placeholder='Description' {...register("description")} />
      <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
      <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
      <input className='mb-2' placeholder='Sold Item' type="number" {...register("soldItem")} />
      <input className='mb-2' placeholder='Supplier Name' {...register("supplierName")} />
      <input className='mb-2' placeholder='upload image' type="text"  {...register("img")} />
      <input type="submit" value="Add Item" />
    </form>
        </div>
    );
};

export default AddItem;