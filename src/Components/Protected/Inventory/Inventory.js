import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useInventoryDetails from "../../hooks/useInventoryDetails";

  const Inventory = () => {
  const {id}=useParams();
  const [products, setProducts] = useState({});
  useEffect( ()=>{
    const url=`http://localhost:5000/inventory/${id}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>setProducts(data))
  },[])

  return (
    <div>
      <h3>Service id:{id}</h3>
      <h4>{products.length}</h4>
      
        
      <div className="text-center"></div>
    </div>
  );
};

export default Inventory;
