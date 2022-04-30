import React from 'react';
import CustomLink from '../CustomLink/CustomLink';


const Navbar = () => {
    return (
        <div>
        <nav style={{sticky:"top",height:"80px"}} className='container-fluid  justify-content-between mt-2 bg-dark'>
        <div className="d-flex">
        
        <CustomLink to="/">Home</CustomLink> 
        <CustomLink to="/additem">AddItem</CustomLink>
        <CustomLink to="/manage">ManageInventory</CustomLink>
        <CustomLink to="/register">Register</CustomLink>
        </div> 
      

    </nav>
        </div>
    );
};

export default Navbar;