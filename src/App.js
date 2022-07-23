import "./App.css";
import Navbar from "./components/Navbar"
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>} />
    </Routes>
  </div>
}

export default App;
