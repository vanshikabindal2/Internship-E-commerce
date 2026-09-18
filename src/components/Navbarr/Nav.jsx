import React, { useEffect, useState } from "react";
import {
  Search,
  ShoppingBag,
  UserRound,
  Menu,
  X,
  Heart,
  Clock3,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "../../assets/logo.png";
import { products } from "../../assets/assets";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  // =========================
  // CART COUNT
  // =========================
  const [cartCount, setCartCount] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

    return savedCart.reduce(
      (total, item) => total + (item.quantity || 0),
      0
    );
  });

  // =========================
  // UPDATE CART COUNT
  // =========================
  useEffect(() => {
    const updateCartCount = () => {
      const savedCart =
        JSON.parse(localStorage.getItem("cart")) || [];

      const totalQuantity = savedCart.reduce(
        (total, item) => total + (item.quantity || 0),
        0
      );

      setCartCount(totalQuantity);
    };

    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener(
        "cartUpdated",
        updateCartCount
      );
    };
  }, []);

  // =========================
  // TRENDING SEARCHES
  // =========================
  const trendingSearches = [
    "Shirts",
    "Joggers",
    "Popover Shirts",
    "Casual Shirts",
    "Denim Shirts",
    "Formal Shirts",
  ];

  // =========================
  // TRENDING PRODUCTS
  // =========================
  const trendingProducts = products.slice(0, 3);

  // =========================
  // SEARCH FILTER
  // =========================
  const filteredProducts = searchText.trim()
    ? products.filter((product) =>
        product.name
          ?.toLowerCase()
          .includes(searchText.toLowerCase())
      )
    : trendingProducts;

  // =========================
  // SEARCH OPEN
  // =========================
  const handleSearchClick = () => {
    setSearchOpen(true);
  };

  // =========================
  // SEARCH CLOSE
  // =========================
  const handleCloseSearch = () => {
    setSearchOpen(false);
    setSearchText("");
  };

  // =========================
  // TRENDING SEARCH CLICK
  // =========================
  const handleTrendingSearch = (item) => {
    setSearchText(item);
  };

  return (
    <>
      {/* =========================================
          NAVBAR
      ========================================= */}
      <header className="navbar">
        <div className="navbar-inner">

          {/* MOBILE MENU BUTTON */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X size={23} />
            ) : (
              <Menu size={23} />
            )}
          </button>

          {/* LOGO */}
          <Link to="/" className="navbar-logo">
            <img
              src={logo}
              alt="The Bear House"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="desktop-nav">
              <Link to="/">
HOME            </Link>
            <Link to="/shirts">
              SHIRTS
            </Link>

            <Link to="/popover-shirts">
              POPOVER SHIRTS
            </Link>

            <Link to="/joggers">
              JOGGERS
            </Link>
            <Link to="/pant">
              Pants
            </Link>
          </nav>

          {/* NAV ACTIONS */}
          <div className="navbar-actions">

            {/* SEARCH */}
            <button
              className="nav-search"
              onClick={handleSearchClick}
              aria-label="Open search"
            >
              <Search
                size={20}
                strokeWidth={1.7}
              />

              <span>
                Search products...
              </span>
            </button>

            {/* CART */}
            <Link
              to="/cart"
              className="nav-icon cart-icon"
              aria-label="Cart"
            >
              <ShoppingBag
                size={21}
                strokeWidth={1.7}
              />

              {/* CART COUNT */}
              {cartCount > 0 && (
                <span className="cart-count">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* WISHLIST */}
            <Link
              to="/wishlist"
              className="nav-icon cart-icon"
              aria-label="Wishlist"
            >
              <Heart
                size={21}
                strokeWidth={1.7}
              />

              {/* TEMP WISHLIST COUNT */}
              <span className="cart-count">
                0
              </span>
            </Link>

            {/* ACCOUNT */}
            <Link
              to="/account"
              className="nav-icon"
              aria-label="Account"
            >
              <UserRound
                size={21}
                strokeWidth={1.7}
              />
            </Link>

          </div>
        </div>

        {/* =========================================
            MOBILE MENU
        ========================================= */}
        <div
          className={`mobile-menu ${
            menuOpen ? "active" : ""
          }`}
        >
          <nav>
<Link
              to="/"
              onClick={() =>
                setMenuOpen(false)
              }
            >
              Home
            </Link>
            <Link
              to="/shirts"
              onClick={() =>
                setMenuOpen(false)
              }
            >
              SHIRTS
            </Link>

            <Link
              to="/popover-shirts"
              onClick={() =>
                setMenuOpen(false)
              }
            >
              POPOVER SHIRTS
            </Link>

            <Link
              to="/joggers"
              onClick={() =>
                setMenuOpen(false)
              }
            >
              JOGGERS
            </Link>
 <Link
              to="/Pants"
              onClick={() =>
                setMenuOpen(false)
              }
            >
              Pants
            </Link>
          </nav>
        </div>
      </header>

      {/* =========================================
          SEARCH BACKDROP
      ========================================= */}
      {searchOpen && (
        <div
          className="search-backdrop"
          onClick={handleCloseSearch}
        />
      )}

      {/* =========================================
          SEARCH DROPDOWN
      ========================================= */}
      {searchOpen && (
        <div className="search-dropdown">

          {/* SEARCH TOP */}
          <div className="search-dropdown-top">

            <div className="search-main-input">

              <Search
                size={21}
                strokeWidth={1.7}
              />

              <input
                type="text"
                value={searchText}
                placeholder="Search products..."
                autoFocus
                onChange={(e) =>
                  setSearchText(
                    e.target.value
                  )
                }
              />

              {/* CLEAR SEARCH */}
              {searchText && (
                <button
                  className="search-input-clear"
                  onClick={() =>
                    setSearchText("")
                  }
                >
                  <X size={19} />
                </button>
              )}

            </div>

            {/* CLOSE SEARCH */}
            <button
              className="search-close-btn"
              onClick={handleCloseSearch}
              aria-label="Close search"
            >
              <X size={23} />
            </button>

          </div>

          {/* =========================================
              SEARCH CONTENT
          ========================================= */}
          <div className="search-content">

            {/* LEFT SIDE */}
            <div className="search-left">

              {/* RECENT SEARCH */}
              <div className="search-section">

                <h3>
                  Recent Search
                </h3>

                <button
                  className="recent-search"
                  onClick={() =>
                    setSearchText("Shirts")
                  }
                >
                  <Clock3 size={17} />

                  <span>
                    Shirts
                  </span>
                </button>

              </div>

              {/* TRENDING SEARCHES */}
              <div className="search-section trending-section">

                <h3>
                  Trending Searches
                </h3>

                <div className="trending-searches">

                  {trendingSearches.map(
                    (item) => (
                      <button
                        key={item}
                        onClick={() =>
                          handleTrendingSearch(
                            item
                          )
                        }
                      >
                        <span>
                          {item}
                        </span>

                        <ArrowRight
                          size={15}
                        />
                      </button>
                    )
                  )}

                </div>
              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="search-right">

              <div className="search-right-heading">

                <h3>
                  {searchText
                    ? "Search Results"
                    : "Trending Products"}
                </h3>

                {!searchText && (
                  <span>
                    MEN'S WEAR
                  </span>
                )}

              </div>

              {/* PRODUCTS */}
              <div className="search-products">

                {filteredProducts
                  .slice(0, 3)
                  .map((product) => (

                    <Link
                      key={product._id}
                      to={`/product/${product._id}`}
                      className="search-product"
                      onClick={() =>
                        setSearchOpen(false)
                      }
                    >

                      {/* PRODUCT IMAGE */}
                      <div className="search-product-image">

                        <img
                          src={
                            Array.isArray(
                              product.image
                            )
                              ? product.image[0]
                              : product.image
                          }
                          alt={product.name}
                        />

                      </div>

                      {/* PRODUCT INFO */}
                      <div className="search-product-info">

                        <p className="search-product-name">
                          {product.name}
                        </p>

                        <div className="search-product-bottom">

                          <p className="search-product-price">
                            ₹{product.price}
                          </p>

                          <span className="product-arrow">
                            <ArrowRight
                              size={16}
                            />
                          </span>

                        </div>

                      </div>

                    </Link>

                  ))}

                {/* NO RESULT */}
                {filteredProducts.length === 0 && (
                  <div className="no-search-result">
                    No products found
                  </div>
                )}

              </div>

            </div>

          </div>

        </div>
      )}
    </>
  );
};

export default Nav;