import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Products from "../components/Products";

const Home = () => {
const {token}=useContext(AuthContext);


  return !!token? (
  <div><Products/></div>
  ):(
    <div>Please Login First</div>
  )
};


export default Home;
