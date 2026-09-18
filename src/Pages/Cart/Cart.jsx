import React, { useEffect, useState } from "react";
import { Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const navigate = useNavigate();

  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Increase quantity
  const increaseQuantity = (index) => {
    setCart((prevCart) =>
      prevCart.map((item, i) =>
        i === index
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (index) => {
    setCart((prevCart) =>
      prevCart
        .map((item, i) =>
          i === index
            ? {
                ...item,
                quantity: Math.max(1, item.quantity - 1),
              }
            : item
        )
    );
  };

  // Remove product
  const removeItem = (index) => {
    setCart((prevCart) =>
      prevCart.filter((_, i) => i !== index)
    );
  };

  // Total
  const subtotal = cart.reduce(
    (total, item) =>
      total + Number(item.price) * item.quantity,
    0
  );

  return (
    <div className="cart-page">

      <div className="cart-container">

        <div className="cart-heading">
          <h1>YOUR CART</h1>
          <span>{cart.length} ITEMS</span>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>

            <p>
              Looks like you haven't added anything yet.
            </p>

            <button
              onClick={() => navigate("/shirts")}
            >
              CONTINUE SHOPPING
              <ArrowRight size={18} />
            </button>
          </div>
        ) : (
          <div className="cart-layout">

            {/* LEFT - PRODUCTS */}
            <div className="cart-items">

              {cart.map((item, index) => (

                <div className="cart-item" key={`${item.productId}-${item.size}-${index}`}>

                  <div className="cart-item-image">
                    <img
                      src={item.image}
                      alt={item.name}
                    />
                  </div>

                  <div className="cart-item-info">

                    <div className="cart-item-top">

                      <div>
                        <h2>{item.name}</h2>

                        <p>
                          Color: {item.color}
                        </p>

                        <p>
                          Size: {item.size}
                        </p>
                      </div>

                      <button
                        className="remove-btn"
                        onClick={() =>
                          removeItem(index)
                        }
                      >
                        <Trash2 size={18} />
                      </button>

                    </div>

                    <div className="cart-item-bottom">

                      <span className="cart-price">
                        ₹{item.price}
                      </span>

                      <div className="cart-quantity">

                        <button
                          onClick={() =>
                            decreaseQuantity(index)
                          }
                        >
                          <Minus size={15} />
                        </button>

                        <span>
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            increaseQuantity(index)
                          }
                        >
                          <Plus size={15} />
                        </button>

                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>


            {/* RIGHT - SUMMARY */}
            <div className="cart-summary">

              <h2>ORDER SUMMARY</h2>

              <div className="summary-row">
                <span>Subtotal</span>

                <strong>
                  ₹{subtotal}
                </strong>
              </div>

              <div className="summary-row">
                <span>Delivery</span>

                <strong>FREE</strong>
              </div>

              <div className="summary-line"></div>

              <div className="summary-total">
                <span>Total</span>

                <strong>
                  ₹{subtotal}
                </strong>
              </div>

              <button className="checkout-btn">
                PROCEED TO CHECKOUT
                <ArrowRight size={18} />
              </button>

            </div>

          </div>
        )}

      </div>

    </div>
  );
};

export default Cart;