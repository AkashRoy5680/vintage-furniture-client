import React from 'react';
import Banner from '../Banner/Banner';
import Product from '../Branding/Product/Product';
import useInventory from '../hooks/useInventory';


const Home = () => {
    const [products, setProducts] = useInventory([]);
    const newInventories=products.slice(0,6);

    return (
        <div>
            <Banner></Banner>
            <h1 className='text-3xl text-center m-4 text-dark'>Our Services</h1>
            <div className=' container products-container '>
            {
                 newInventories.map(product=><Product 
                    key={product._id} 
                    product={product}>
                 </Product>)
            }
            </div>
           
        </div>
    );
};

export default Home;