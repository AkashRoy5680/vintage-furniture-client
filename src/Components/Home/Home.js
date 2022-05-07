import React from 'react';
import Banner from '../Banner/Banner';
import Product from '../Branding/Product/Product';
import useInventory from '../hooks/useInventory';
import NewsLetter from '../NewsLetter/NewsLetter';
import Recharts from '../Recharts/Recharts';


const Home = () => {
    const [products, setProducts] = useInventory([]);
    const newInventories=products.slice(0,6);

    return (
        <div>
            <Banner></Banner>
            <h1 className='text-3xl text-center m-4 text-dark'>Quick View</h1>
            <div className=' container products-container '>
            {
                 newInventories.map(product=><Product 
                    key={product._id} 
                    product={product}>
                 </Product>)
            }
            </div>
            <Recharts></Recharts>
            <NewsLetter></NewsLetter>
           
        </div>
    );
};

export default Home;