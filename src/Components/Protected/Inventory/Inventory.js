import React from 'react';
import { useParams } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

const Inventory = () => {
   
    const{id}=useParams();
    const[products,setProducts]=useProducts();
    return (
        <div>
            <h2>Inventory:{id}</h2>
            <p> product name:{products.name}</p>
            {
                products.map(product=><div key={product._id} name={product.name} ></div>)
            }
        </div>
    );
};

export default Inventory;