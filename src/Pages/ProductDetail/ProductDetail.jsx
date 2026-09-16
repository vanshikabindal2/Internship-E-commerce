import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Heart,
  ShoppingBag,
  Star,
  ChevronDown,
  ArrowLeft,
} from "lucide-react";

import { products } from "../../assets/assets";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((item) => item._id === id);

  const [selectedSize, setSelectedSize] = useState(
    product?.sizes?.[0] || ""
  );

  const [selectedImage, setSelectedImage] = useState(0);

  const [openDetails, setOpenDetails] = useState(true);

  // Wishlist - Backend baad mein connect karenge
  const [wishlist, setWishlist] = useState([]);

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product Not Found</h2>

        <button onClick={() => navigate("/shirts")}>
          Back to Products
        </button>
      </div>
    );
  }

  // Wishlist toggle
  const handleWishlist = () => {
    if (wishlist.includes(product._id)) {
      setWishlist(
        wishlist.filter((item) => item !== product._id)
      );
    } else {
      setWishlist([...wishlist, product._id]);
    }
  };

  return (
    <div className="product-details-page">

      {/* =========================================
          LEFT SIDE - PRODUCT IMAGES
      ========================================= */}

      <div className="details-gallery">

        {/* Back Button */}
        <button
          className="back-btn"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={18} />
          Back
        </button>


        {/* Thumbnails */}
        {product.image && product.image.length > 1 && (
          <div className="thumbnail-list">

            {product.image.map((img, index) => (
              <button
                key={index}
                className={`thumbnail ${
                  selectedImage === index ? "active" : ""
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={img}
                  alt={`${product.name} ${index + 1}`}
                />
              </button>
            ))}

          </div>
        )}


        {/* Main Image */}
        <div className="main-product-image">

          <img
            src={product.image[selectedImage]}
            alt={product.name}
          />


          {/* Wishlist */}
          <button
            className={`wishlist-btn ${
              wishlist.includes(product._id)
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
                wishlist.includes(product._id)
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


        {/* Product Name */}
        <div className="details-top">

          <h1>{product.name}</h1>

          <h2>
            ₹{product.price}
          </h2>

          <p className="gst">
            *Inclusive of GST
          </p>

        </div>


        {/* =========================================
            RATING
        ========================================= */}

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


        {/* =========================================
            OFFERS
        ========================================= */}

        <div className="offers">

          <div className="offer-card">

            <span>TRY5</span>

            <p>
              Enjoy 5% off on your first web order.
            </p>

          </div>


          <div className="offer-card">

            <span>NEW10</span>

            <p>
              Enjoy 10% off on your first order above ₹2499.
            </p>

          </div>

        </div>


        {/* =========================================
            COLOR
        ========================================= */}

        <div className="color-section">

          <span>
            Selected Color
          </span>

          <strong>
            {product.color}
          </strong>

        </div>


        {/* =========================================
            FABRIC + FIT
        ========================================= */}

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


        {/* =========================================
            SIZE
        ========================================= */}

        <div className="size-section">

          <div className="size-heading">

            <span>
              Select Size
            </span>

            <button>
              SIZE GUIDE
            </button>

          </div>


          <div className="sizes">

            {product.sizes?.map((size) => (

              <button
                key={size}
                className={
                  selectedSize === size
                    ? "selected"
                    : ""
                }
                onClick={() =>
                  setSelectedSize(size)
                }
              >
                {size}
              </button>

            ))}

          </div>

        </div>


        {/* =========================================
            DELIVERY
        ========================================= */}

        <div className="delivery-box">
          FREE 1-2 day delivery on 5k+ pincodes
        </div>


        {/* =========================================
            ADD TO CART
        ========================================= */}

        <button
          className="add-product-btn"
          onClick={() => {

            if (!selectedSize) {
              alert("Please select a size");
              return;
            }

            alert(
              `${product.name} - Size ${selectedSize} added to cart`
            );

          }}
        >

          <span>
            ADD
          </span>

          <ShoppingBag
            size={19}
            strokeWidth={1.5}
          />

        </button>


        {/* =========================================
            PRODUCT DETAILS
        ========================================= */}

        <div className="description-section">

          <button
            className="description-heading"
            onClick={() =>
              setOpenDetails(!openDetails)
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


        {/* =========================================
            STOCK
        ========================================= */}

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