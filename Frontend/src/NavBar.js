
// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component for navigation
import './index.css';
const Navbar = () => {
  return (
    <nav className="navbar"> 
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/signin">Sign In</Link>
          <Link to="/search">Search</Link> 

    </nav>
  );
};

export default Navbar;
