import React from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import ProductItem from "./ProductItem";
const Products = () => {
  const {token} =useContext(AuthContext);

  const [products, setProduct]=React.useState([]);
  const {cartData}=useContext(CartContext);


  const cartCount=()=>{
    const cartItems =cartData.reduce((prev, cur)=> prev+cur.count,0)
    console.log(cartCount);

  }


  const fetchData= ()=> {
    fetch(` http://localhost:8080/products`)
    .then(res=> res.json())
    .then(data=>setProduct(data))
    .catch(err=>console.log(err))
  }
  
  React.useEffect(()=>{
    fetchData()
  },[])
  React.useEffect(()=>{
    fetchData()
  },[cartData])
  
  


  return (
    <>
    <h2>{cartData.reduce((prev, cur) => prev+cur.count,0)}</h2>
    <div>
      {
        products.map(ele=> <ProductItem key={ele.id} ele={ele}/>)
      }
    </div>
    </>
  )
};

export default Products;
