import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import CustomLink from "../CustomLink/CustomLink";
import auth from "../Firebase/Firebase.init";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div>
      <nav style={{ sticky: "top", height: "80px" }} className="container-fluid d-flex  justify-content-between mt-2 bg-dark">
        
        <div className="d-flex">
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/additem">AddItem</CustomLink>
          <CustomLink to="/manage">ManageInventory</CustomLink>
          <CustomLink to="/register">Register</CustomLink>
          <CustomLink to="/myitems">MyItems</CustomLink>
          <CustomLink to="/blogs">Blogs</CustomLink>
        </div>

        <div  className='d-flex'>
        { user?
        <button className='btn btn-link text-decoration-none text-white' onClick={()=>signOut(auth)}> <span className='btn btn-warning'>SignOut</span> <p>{user.displayName}</p></button> 
        :
        <CustomLink to="/login">Login</CustomLink>}
        </div>
      </nav>

    </div>
  );
};

export default Navbar;
