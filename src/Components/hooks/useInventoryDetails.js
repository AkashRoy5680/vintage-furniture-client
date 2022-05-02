import React, { useEffect, useState } from 'react';

const useInventoryDetails = (idx) => {
    const [products, setProducts] = useState({});
    useEffect(() => {
      fetch(`http://localhost:5000/inventory/${idx}`)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, [idx]);
    return [products, setProducts];
};

export default useInventoryDetails;