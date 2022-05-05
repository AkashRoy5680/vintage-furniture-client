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
        
        <div className="d-flex mt-2">
          <CustomLink to="/">Home</CustomLink> 
          <CustomLink to="/blogs">Blogs</CustomLink>
          <CustomLink to="/table">Table</CustomLink>
          <CustomLink to="/newsletter">NewsLetter</CustomLink>
        </div>

        <div  className='d-flex mt-2'>
        {
           user && <>
           <CustomLink to="/manage">ManageInventory</CustomLink>
           <CustomLink to="/myitems">MyItems</CustomLink>
           <CustomLink to="/additem">AddItem</CustomLink>
           </>
        }

        { user?
        <button className='btn btn-link text-decoration-none text-white' onClick={()=>signOut(auth)}> <span className='btn btn-success'>SignOut</span> <p className="text-warning">{user.displayName}</p></button> 
        :
        <CustomLink to="/login">Login</CustomLink>}
        </div>
      </nav>

    </div>
  );
};

export default Navbar;
