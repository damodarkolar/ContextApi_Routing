import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Navigate } from "react-router-dom";


const userDetails ={
    email:"",
    password:""
  }
const Login = () => {

  const navigate=useNavigate()
  const [inputValue, setInputValue]=useState(userDetails);
  const {handleLogin, token, setLoginDetails,handleLogOut}=useContext(AuthContext);

  const {userName, password}=inputValue;

console.log(token.token)
if(!!token.token){
  navigate("/");
}


const handleChange =(e)=>{
  const {name, value}=e.target;
setInputValue(prev=>({...inputValue,[name]: value}));

}

const handleSubmit = ( e) => {
e.preventDefault()
handleLogin(inputValue);

}
  return token.token? (<div>{token.token}</div>):(
    <>
      <form action="" onSubmit={e=>handleSubmit(e)}>
        <input placeholder="UserName" type="text" name="email" value={userName} onChange={e=>handleChange(e)}/>
        <input placeholder="Password" type="text" name="password" value={password} onChange={e=>handleChange(e)}/>
        <input type="submit" />
      </form>
    </>
  ) 
};

export default Login;
