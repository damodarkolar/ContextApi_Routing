import React from "react";
import { CartContext } from "../context/CartContext";

const ProductItem = (props) => {
const product=props.ele;
const {cartData,handleIncrement,handleDecrement,handleRemove,handleAdd}= React.useContext(CartContext)
const {id, name, description}=product;
const productDetails=[...cartData].filter(ele=>ele.id==id);


  return (
    <>
    <div>
      <h2>{id}</h2>
      <h3>{name}</h3>
      <h5>{description}</h5>
      <div>{productDetails[0]?.count}</div>
      {productDetails.length==0?  <button  onClick={()=>handleAdd(id)}>Add to cart</button>:"Item already in cart" }
  
      <br />
     
      <span><button disabled={!productDetails.length} onClick={()=>handleIncrement(id,productDetails[0].count)}>Increment </button><button disabled={!productDetails.length} onClick={()=>handleDecrement(id,productDetails[0].count)}>Decrement</button><button disabled={!productDetails.length} onClick={()=>handleRemove(id)}>Remove </button></span>
    </div>
    </>
  )
};

export default ProductItem;
