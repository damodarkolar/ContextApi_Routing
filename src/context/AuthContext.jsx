import React, { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
const [loginDetails, setLoginDetails]=React.useState({});
const [token, setToken]=React.useState("");



const handleLogin=(details) => {
  console.log(details)
  fetch("https://reqres.in/api/login",{
    method :"POST",
    body : JSON.stringify(details),
    headers :{"Content-Type" : "application/json"}
    }
  )
  .then(res=>res.json())
  .then(data=>setToken(data))
  .catch(err=>console.log(err));
}

const handleLogOut = () => {
  setLoginDetails({});
  setToken("");
}


  return <AuthContext.Provider value={{handleLogin, token, setLoginDetails,handleLogOut}}>{children}</AuthContext.Provider>;
};
