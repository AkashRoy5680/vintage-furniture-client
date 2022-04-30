import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Branding/Products/Products';
import Inventory from './Components/Protected/Inventory/Inventory';
import Register from './Components/Authentication/Register/Register';
import Login from './Components/Authentication/Login/Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import ManageInventories from './Components/Protected/ManageInventories/ManageInventories';
import AddItem from './Components/Protected/AddItem/AddItem';


function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Routes>
    <Route path="/" element={<Products></Products>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/inventory/:id" element={<Inventory></Inventory>}></Route>
      <Route path="/manage" element={<ManageInventories></ManageInventories>}></Route>
      <Route path="/additem" element={<AddItem></AddItem>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
    <Footer></Footer>
    <ToastContainer />
    </div>
  );
}

export default App;
