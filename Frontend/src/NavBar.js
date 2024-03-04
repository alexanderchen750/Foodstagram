// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component for navigation
import './index.css';
const Navbar = () => {
  return (
/*below is the header  for the navbar and links*/
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">     
  <nav className="navbar">
          <Link to="/" className="navbar-brand">Foodagram</Link>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/signin">Sign In</Link>
          <Link to="/search">Search</Link> 
    </nav>
    </div>
    </nav>
  );
}

export default Navbar;
