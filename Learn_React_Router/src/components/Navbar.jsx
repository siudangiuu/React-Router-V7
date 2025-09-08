import React from "react";
import logo from "../assets/logo.png"
const Navbar = () => {
  return (
    <div>
        <img src={logo} alt="Logo" />
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
        <button>Get Started</button>
    </div>
  );
};

export default Navbar;
