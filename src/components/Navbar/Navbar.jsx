
import React, { useState } from "react";
import {
  FiMenu,
  FiSearch,
  FiUser,
  FiShoppingBag,
  FiX,
} from "react-icons/fi";

import logo from "../../assets/logo.jpeg";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="announcement">
        Welcome to our store
      </div>

      {/* Main Navbar */}
      <header className="navbar">

        {/* Left */}
        <div className="nav-left">
          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Desktop Links */}
          <nav className="nav-links left-links">
            <a href="#">New Arrivals</a>
            <a href="#">Women</a>
            <a href="#">Men</a>
          </nav>
        </div>

        {/* Center Logo */}
        <div className="nav-logo">
          <img src={logo} alt="The Epopee India" />
        </div>

        {/* Right */}
        <div className="nav-right">

          <nav className="nav-links right-links">
            <a href="#">Collections</a>
            <a href="#">Accessories</a>
            <a href="#">About Us</a>
          </nav>

       

          <button className="icon-btn">
            <FiSearch />
          </button>

          <button className="icon-btn">
            <FiUser />
          </button>

          <button className="icon-btn">
            <FiShoppingBag />
          </button>

        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <a href="#">New Arrivals</a>
        <a href="#">Women</a>
        <a href="#">Men</a>
        <a href="#">Collections</a>
        <a href="#">Accessories</a>
        <a href="#">About Us</a>
      </div>
    </>
  );
};

export default Navbar;
