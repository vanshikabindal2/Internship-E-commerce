import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Heart,
  ShoppingBag,
  Star,
  ChevronDown,
  ArrowLeft,
  Plus,
  Minus,
} from "lucide-react";

import { products } from "../../assets/assets";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // =========================
  // FIND PRODUCT
  // =========================
  const product = products.find(
    (item) => item._id === id
  );

  // =========================
  // QUANTITY
  // =========================
  const [quantity, setQuantity] = useState(1);

  // =========================
  // SELECTED SIZE
  // =========================
  const [selectedSize, setSelectedSize] = useState(
    product?.sizes?.[0] || ""
  );

  // =========================
  // SELECTED IMAGE
  // =========================
  const [selectedImage, setSelectedImage] = useState(0);

  // =========================
  // PRODUCT DETAILS
  // =========================
  const [openDetails, setOpenDetails] = useState(true);

  // =========================
  // WISHLIST
  // =========================
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist =
      localStorage.getItem("wishlist");

    return savedWishlist
      ? JSON.parse(savedWishlist)
      : [];
  });

  // =========================
  // PRODUCT NOT FOUND
  // =========================
  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product Not Found</h2>

        <button
          onClick={() => navigate("/shirts")}
        >
          Back to Products
        </button>
      </div>
    );
  }

  // =========================
  // WISHLIST HANDLER
  // =========================
  const handleWishlist = () => {
    let updatedWishlist;

    // Already in wishlist
    if (wishlist.includes(product._id)) {
      updatedWishlist = wishlist.filter(
        (item) => item !== product._id
      );
    }

    // Add to wishlist
    else {
      updatedWishlist = [
        ...wishlist,
        product._id,
      ];
    }

    // Update React state
    setWishlist(updatedWishlist);

    // Save in browser
    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );

    // Tell Wishlist page/navbar
    window.dispatchEvent(
      new Event("wishlistUpdated")
    );

    // Debug
    console.log(
      "Wishlist:",
      updatedWishlist
    );
  };

  // =========================
  // ADD TO CART
  // =========================
const handleAddToCart = async () => {
  // Size check
  if (!selectedSize) {
    alert("Please select a size");
    return;
  }

  try {
    const response = await fetch(
      "http://localhost:5000/api/cart/add",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cartId: "guest-cart",
          productId: product._id,
          quantity: quantity,
          size: selectedSize,
          color: product.color,
        }),
      }
    );

    const data = await response.json();

    console.log("Backend response:", data);

    if (data.success) {
      alert(`${product.name} added to cart`);

      // Navbar/cart count ke liye
      window.dispatchEvent(
        new Event("cartUpdated")
      );

      // Quantity reset
      setQuantity(1);
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error("Add to cart error:", error);

    alert("Unable to add product to cart");
  }
};
   
  return (
    <div className="product-details-page">

      {/* =========================================
          LEFT SIDE - PRODUCT IMAGES
      ========================================= */}

      <div className="details-gallery">

        {/* BACK BUTTON */}
        <button
          className="back-btn"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={18} />
          Back
        </button>

        {/* THUMBNAILS */}
        {Array.isArray(product.image) &&
          product.image.length > 1 && (
            <div className="thumbnail-list">

              {product.image.map(
                (img, index) => (
                  <button
                    key={index}
                    className={`thumbnail ${
                      selectedImage === index
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      setSelectedImage(
                        index
                      )
                    }
                  >
                    <img
                      src={img}
                      alt={`${product.name} ${
                        index + 1
                      }`}
                    />
                  </button>
                )
              )}

            </div>
          )}

        {/* MAIN IMAGE */}
        <div className="main-product-image">

          <img
            src={
              Array.isArray(
                product.image
              )
                ? product.image[
                    selectedImage
                  ]
                : product.image
            }
            alt={product.name}
          />

          {/* =====================================
              WISHLIST BUTTON
          ===================================== */}

          <button
            type="button"
            className={`wishlist-btn ${
              wishlist.includes(
                product._id
              )
                ? "liked"
                : ""
            }`}
            onClick={handleWishlist}
            aria-label="Add to wishlist"
          >
            <Heart
              size={25}
              strokeWidth={1.5}
              fill={
                wishlist.includes(
                  product._id
                )
                  ? "currentColor"
                  : "none"
              }
            />
          </button>

        </div>
      </div>

      {/* =========================================
          RIGHT SIDE - PRODUCT INFORMATION
      ========================================= */}

      <div className="details-content">

        {/* =====================================
            PRODUCT NAME & PRICE
        ===================================== */}

        <div className="details-top">

          <h1>
            {product.name}
          </h1>

          <h2>
            ₹{product.price}
          </h2>

          <p className="gst">
            *Inclusive of GST
          </p>

        </div>

        {/* =====================================
            RATING
        ===================================== */}

        <div className="rating-box">

          <span className="rating-number">
            4.4
          </span>

          <Star
            size={13}
            fill="currentColor"
          />

          <span>
            147 Ratings and 10 Reviews
          </span>

        </div>

        {/* =====================================
            OFFERS
        ===================================== */}

        <div className="offers">

          <div className="offer-card">

            <span>
              TRY5
            </span>

            <p>
              Enjoy 5% off on your first
              web order.
            </p>

          </div>

          <div className="offer-card">

            <span>
              NEW10
            </span>

            <p>
              Enjoy 10% off on your first
              order above ₹2499.
            </p>

          </div>

        </div>

        {/* =====================================
            COLOR
        ===================================== */}

        <div className="color-section">

          <span>
            Selected Color
          </span>

          <strong>
            {product.color}
          </strong>

        </div>

        {/* =====================================
            FABRIC + FIT
        ===================================== */}

        <div className="product-properties">

          <div className="property">

            <span>
              Fabric
            </span>

            <strong>
              {product.fabric}
            </strong>

          </div>

          <div className="property">

            <span>
              Fit
            </span>

            <strong>
              {product.fit}
            </strong>

          </div>

        </div>

        {/* =====================================
            SIZE
        ===================================== */}

        <div className="size-section">

          <div className="size-heading">

            <span>
              Select Size
            </span>

            <button type="button">
              SIZE GUIDE
            </button>

          </div>

          <div className="sizes">

            {product.sizes?.map(
              (size) => (
                <button
                  type="button"
                  key={size}
                  className={
                    selectedSize === size
                      ? "selected"
                      : ""
                  }
                  onClick={() =>
                    setSelectedSize(
                      size
                    )
                  }
                >
                  {size}
                </button>
              )
            )}

          </div>

        </div>

        {/* =====================================
            DELIVERY
        ===================================== */}

        <div className="delivery-box">
          FREE 1-2 day delivery on 5k+
          pincodes
        </div>

        {/* =====================================
            QUANTITY
        ===================================== */}

        <div className="quantity-section">

          <span>
            Quantity
          </span>

          <div className="quantity-box">

            {/* MINUS */}

            <button
              type="button"
              onClick={() =>
                setQuantity(
                  (prev) =>
                    Math.max(
                      1,
                      prev - 1
                    )
                )
              }
              disabled={
                quantity === 1
              }
            >
              <Minus size={16} />
            </button>

            {/* NUMBER */}

            <span>
              {quantity}
            </span>

            {/* PLUS */}

            <button
              type="button"
              onClick={() =>
                setQuantity(
                  (prev) =>
                    prev + 1
                )
              }
            >
              <Plus size={16} />
            </button>

          </div>

        </div>

        {/* =====================================
            ADD TO CART
        ===================================== */}

        <button
          type="button"
          className="add-product-btn"
          onClick={handleAddToCart}
        >
          <span>
            ADD TO CART
          </span>

          <ShoppingBag
            size={19}
            strokeWidth={1.5}
          />
        </button>

        {/* =====================================
            PRODUCT DETAILS
        ===================================== */}

        <div className="description-section">

          <button
            type="button"
            className="description-heading"
            onClick={() =>
              setOpenDetails(
                (prev) => !prev
              )
            }
          >
            <span>
              PRODUCT DETAILS
            </span>

            <ChevronDown
              size={19}
              className={
                openDetails
                  ? "rotate-icon"
                  : ""
              }
            />
          </button>

          {openDetails && (
            <div className="description-content">

              <p>
                {product.description}
              </p>

              <div className="detail-row">

                <span>
                  Category
                </span>

                <strong>
                  {product.subCategory}
                </strong>

              </div>

              <div className="detail-row">

                <span>
                  Color
                </span>

                <strong>
                  {product.color}
                </strong>

              </div>

              <div className="detail-row">

                <span>
                  Fabric
                </span>

                <strong>
                  {product.fabric}
                </strong>

              </div>

              <div className="detail-row">

                <span>
                  Fit
                </span>

                <strong>
                  {product.fit}
                </strong>

              </div>

            </div>
          )}

        </div>

        {/* =====================================
            STOCK
        ===================================== */}

        <div className="stock-info">

          {product.stock > 0
            ? `${product.stock} items available`
            : "Out of stock"}

        </div>

      </div>
    </div>
  );
};

export default ProductDetail;