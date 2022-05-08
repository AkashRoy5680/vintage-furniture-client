import React, { useEffect, useState } from "react";

const useInventoryDetails = (idx) => {
  const [products, setProducts] = useState({});
  useEffect(() => {
    fetch(`https://pacific-beach-83563.herokuapp.com/inventory/${idx}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [idx]);
  return [products, setProducts];
};

export default useInventoryDetails;
