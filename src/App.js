import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Branding/Products/Products";
import Inventory from "./Components/Protected/Inventory/Inventory";
import Register from "./Components/Authentication/Register/Register";
import Login from "./Components/Authentication/Login/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Components/NotFound/NotFound";
import ManageInventories from "./Components/Protected/ManageInventories/ManageInventories";
import AddItem from "./Components/Protected/AddItem/AddItem";
import MyItems from "./Components/Protected/MyItems/MyItems";
import Blogs from "./Components/Blogs/Blogs";
import RequireAuth from "./Components/Protected/RequireAuth/RequireAuth";
import ReactTable from "./Components/Protected/ManageInventories/ReactTable";
import RestockItem from "./Components/Protected/RestockItem/RestockItem"
import NewsLetter from "./Components/NewsLetter/NewsLetter";
import Verification from "./Components/Authentication/Verification/Verification";
import Header from "./Components/Header/Header";



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/singleinventory/:id" element={<Inventory></Inventory>}></Route>
        <Route path="/table" element={<ReactTable></ReactTable>}></Route>
        <Route path="/verify" element={<Verification></Verification>}></Route>
        <Route path="/update/:id" element={<RestockItem></RestockItem>}></Route>
        <Route path="/newsletter" element={<NewsLetter></NewsLetter>}></Route>
        <Route
          path="/manage"
          element={<RequireAuth>
          <ManageInventories></ManageInventories>
          </RequireAuth>}>
          </Route>
        <Route path="/additem" element={
        <RequireAuth>
          <AddItem></AddItem>
        </RequireAuth>}>
        </Route>
        <Route path="/myitems" element={<RequireAuth>
          <MyItems></MyItems>
        </RequireAuth>}>
        </Route>
       
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
