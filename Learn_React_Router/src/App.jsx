import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/product";
import { Routes, Route } from "react-router-dom";  

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  )
}
export default App;