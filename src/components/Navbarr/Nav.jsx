import React, { useState } from "react";
import {
  Search,
  ShoppingBag,
  UserRound,
  Menu,
  X,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "../../assets/logo.jpeg";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="navbar-inner">

          {/* MOBILE MENU BUTTON */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>

          {/* LOGO */}
          <Link to="/" className="navbar-logo">
            <img
              src={logo}
              alt="The Bear House"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="desktop-nav">
                        <Link to="/">Home</Link>

            <Link to="/shirts">SHIRTS</Link>
            <Link to="/popover-shirts">POPOVER SHIRTS</Link>
            <Link to="/joggers">JOGGERS</Link>
          </nav>

          {/* RIGHT ICONS */}
          <div className="navbar-actions">

            <button className="nav-icon" aria-label="Search">
              <Search size={21} strokeWidth={1.7} />
            </button>

            <button
              className="nav-icon cart-icon"
              aria-label="Cart"
            >
              <ShoppingBag size={21} strokeWidth={1.7} />
              <span className="cart-count">0</span>
            </button>

<button
              className="nav-icon cart-icon"
              aria-label="Cart"
            >
              <Heart size={21} strokeWidth={1.7} />
              <span className="cart-count">0</span>
            </button>
            <button className="nav-icon" aria-label="Account">
              <UserRound size={21} strokeWidth={1.7} />
            </button>

          </div>
        </div>

        {/* MOBILE MENU */}
        <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
          <nav>

            <Link
              to="/shirts"
              onClick={() => setMenuOpen(false)}
            >
              SHIRTS
            </Link>

            <Link
              to="/popover-shirts"
              onClick={() => setMenuOpen(false)}
            >
              POPOVER SHIRTS
            </Link>

            <Link
              to="/joggers"
              onClick={() => setMenuOpen(false)}
            >
              JOGGERS
            </Link>

          </nav>
        </div>
      </header>
    </>
  );
};

export default Nav;