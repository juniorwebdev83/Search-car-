import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">SearchCarHub</div>
      <ul className="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#profile">My Profile</a></li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
