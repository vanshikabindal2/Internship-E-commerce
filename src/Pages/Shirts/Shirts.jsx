import React from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import "./Shirts.css";

import Banner2 from "../../assets/Banner2.png";
import { products } from "../../assets/assets";

const Shirts = () => {
  const navigate = useNavigate();

  return (
    <div className="shirts-page">

      {/* ================= BANNER ================= */}
      {/* <section className="shirt-banner">
        <img src={Banner2} alt="Shirts Collection" />
      </section> */}

      {/* ================= PRODUCTS ================= */}
      <section className="shirts-products">

        <div className="shirts-heading">
          <h1>SHIRTS</h1>
          <p>Explore our premium collection of shirts</p>
        </div>

        <div className="products-grid">

          {products.map((shirt) => (

            <div
              className="product-card"
              key={shirt._id}
              onClick={() => navigate(`/product/${shirt._id}`)}
            >

              {/* IMAGE */}
              <div className="product-image">

                <img
                  src={shirt.image[0]}
                  alt={shirt.name}
                />

               

                <button
                  className="quick-cart"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <ShoppingBag size={19} strokeWidth={1.6} />
                </button>

              </div>

              {/* ONLY NAME + PRICE */}
              <div className="product-info">

                <h3>{shirt.name}</h3>

                <div className="price-row">
                  <span className="product-price">
                    ₹{shirt.price}
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
};

export default Shirts;