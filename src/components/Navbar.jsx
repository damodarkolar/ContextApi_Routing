import React from "react";
import Login from "../pages/Login";
import Home from "../pages/Home";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
const navigate =useNavigate();
  const {token, handleLogOut }=useContext(AuthContext);
const logOutFunction =()=>{
  handleLogOut();
  navigate("/login")
}
  return !!token.token? (
    <>
    <Link to={"/"}>Home</Link>
    <button onClick={logOutFunction}>Log Out</button>
    
    </>
  ):(
    <div>
      <Link to={"/login"}>Login</Link>
    </div>
  )
};

export default Navbar;
