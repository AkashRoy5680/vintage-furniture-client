import React from "react";
import { useParams } from "react-router-dom";
import useInventoryDetails from "../../hooks/useInventoryDetails";

  const Inventory = () => {
  const {id}=useParams();
  const [products, setProducts] = useInventoryDetails();

  return (
    <div>
      <h3>Service id:{id}</h3>
      <h4>{products.name}</h4>
      
        
      <div className="text-center"></div>
    </div>
  );
};

export default Inventory;
