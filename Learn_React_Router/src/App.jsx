import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/product";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";  
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}
export default App;