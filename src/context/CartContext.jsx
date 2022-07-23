import React, { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
const [cartData, setCartData]=React.useState([]);





const fetchData= ()=> {
  fetch(` http://localhost:8080/cartItems`)
  .then(res=> res.json())
  .then(data=>setCartData(data))
  .catch(err=>console.log(err))
  
}


React.useEffect(() => {
  fetchData()
}, [])



  const handleIncrement =(idNumber,countNumber) =>{

    fetch(` http://localhost:8080/cartItems/${idNumber}`,{
      method:"PATCH",
      body: JSON.stringify({
        count: countNumber+1
      }),
      headers:{
        "Content-Type": "application/json"
      }
    })
    .then(res=> res.json())
    .then(data=>
      console.log(data))
    .catch(err=>console.log(err))
    fetchData()



  }

  const handleDecrement = (idNumber,countNumber) =>{
    if(countNumber==0){
      handleRemove(idNumber)
    }else{
      fetch(` http://localhost:8080/cartItems/${idNumber}`,{
      method:"PATCH",
      body: JSON.stringify({
        count: countNumber-1
      }),
      headers:{
        "Content-Type": "application/json"
      }
    })
    .then(res=> res.json())
    .then(data=>
      console.log(data))
    .catch(err=>console.log(err))
    fetchData()
    }
    console.log(cartData)
  }

  const handleRemove = (idNumber) => {
    fetch(`http://localhost:8080/cartItems/${idNumber}`,{
      method: "DELETE"
    })
    .then(res=> res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
    fetchData();
  }

  const handleAdd = (idNumber) => {
    const newItem= {
      id: idNumber,
      name: `Product ${idNumber}`,
      description: `Product ${idNumber} Description`,
      count:1
    }
    fetch(`http://localhost:8080/cartItems`,{
      method: "POST",
      body:JSON.stringify(newItem),
      headers: {
        "Content-Type" : "application/json"
      }
    })
    .then(res=> res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
    fetchData();
  }






  return <CartContext.Provider value={{cartData,handleIncrement,handleDecrement,handleRemove,handleAdd}}>{children}</CartContext.Provider>;
};
