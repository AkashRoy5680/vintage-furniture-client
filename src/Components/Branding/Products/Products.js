import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../../Authentication/Loading/Loading";
import auth from "../../Firebase/Firebase.init";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    fetch("http://localhost:5000/inventory")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="container">
      <div className="row">
        <h2 className="text-primary text-center mt-5">
          All Events : {products.length}
        </h2>
        <div className="products-container">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
