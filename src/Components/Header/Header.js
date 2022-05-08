import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';


import auth from '../Firebase/Firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);
    return (
        <>
        <Navbar style={{ sticky: "top", height: "100px"}}  collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark" >
       
        <Container>
        <Navbar.Brand as={Link} to="/">
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          {/*<Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/blogs">Blogs</Nav.Link>*/}
            <CustomLink to="/">Home</CustomLink> 
            <CustomLink to="/blogs">Blogs</CustomLink>  
          </Nav>
         
          <Nav  className='mt-5'>
           
            {
              user && <>
            <CustomLink to="/manage">ManageInventory</CustomLink>  
            <CustomLink to="/myitems">MyItems</CustomLink>  
            <CustomLink to="/additem">AddItem</CustomLink>
           {/* <Nav.Link href="/manage">ManageInventory</Nav.Link>
            <Nav.Link href="/myitems">MyItems</Nav.Link>
            <Nav.Link href="/additem">AddItem</Nav.Link>*/}  
              </>
            }
           { user?
              <button className='btn btn-link text-decoration-none text-white' onClick={()=>signOut(auth)}> <span className='btn btn-success'>SignOut</span> <p className="text-warning">{user.displayName}</p></button> 
           :
           
           <CustomLink to="/login">Login</CustomLink>
       
            }
          </Nav>
          
   

        </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
    );
};

export default Header;