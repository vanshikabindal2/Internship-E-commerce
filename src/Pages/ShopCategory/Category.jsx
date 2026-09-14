// import React from 'react'
// import './Category.css'
// const Category = () => {
//   return (
//     <div>
//       <section className="hero-banner">
//       <img
//         src="https://cdn.shopify.com/s/files/1/0420/7073/7058/files/Shop_your_size_6474c313-d237-46ef-89b5-37d0efb94d55.jpg?v=1788332482"
//         alt="Shop your size - Up to 30% off"
//         className="hero-banner-image"
//       />
//     </section>
//     </div>
//   )
// }

// export default Category
import React, { useEffect, useRef, useState } from "react";
import "./Category.css";

const Category = () => {
  const categories = [
    {
      title: "Technical Shirts",
      image:
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1200&q=90",
    },
    {
      title: "Floral Shirts",
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1200&q=90",
    },
    {
      title: "Snitch Luggage",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=90",
    },
    {
      title: "Oversized T-Shirts",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=90",
    },
    {
      title: "Premium Jackets",
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=90",
    },
    {
      title: "Streetwear",
      image:
        "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1200&q=90",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  const viewportRef = useRef(null);

  /* =========================================
     RESPONSIVE CARDS
  ========================================= */

  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth <= 600) {
        setCardsPerView(1);
      } else if (window.innerWidth <= 991) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCards();

    window.addEventListener("resize", updateCards);

    return () => {
      window.removeEventListener("resize", updateCards);
    };
  }, []);

  /* =========================================
     RESET INDEX ON RESPONSIVE CHANGE
  ========================================= */

  useEffect(() => {
    const maxIndex = categories.length - cardsPerView;

    if (currentIndex > maxIndex) {
      setCurrentIndex(0);
    }
  }, [cardsPerView, currentIndex, categories.length]);

  /* =========================================
     NEXT SLIDE
  ========================================= */

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = categories.length - cardsPerView;

      if (prev >= maxIndex) {
        return 0;
      }

      return prev + 1;
    });
  };

  /* =========================================
     PREVIOUS SLIDE
  ========================================= */

  const previousSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = categories.length - cardsPerView;

      if (prev <= 0) {
        return maxIndex;
      }

      return prev - 1;
    });
  };

  /* =========================================
     AUTO SLIDER
  ========================================= */

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = categories.length - cardsPerView;

        if (prev >= maxIndex) {
          return 0;
        }

        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [cardsPerView, categories.length]);

  /* =========================================
     CARD WIDTH
  ========================================= */

  const cardWidth = 100 / cardsPerView;

  return (
    <div className="category-page">

      {/* =========================================
          HERO BANNER
      ========================================= */}

      <section className="hero-banner">
        <img
          src="https://cdn.shopify.com/s/files/1/0420/7073/7058/files/Shop_your_size_6474c313-d237-46ef-89b5-37d0efb94d55.jpg?v=1788332482"
          alt="Shop your size - Up to 30% off"
          className="hero-banner-image"
        />
      </section>

      {/* =========================================
          CATEGORY SLIDER
      ========================================= */}

      <section className="category-slider-section">

        <div className="category-slider-wrapper">

          {/* LEFT ARROW */}

          <button
            className="category-arrow category-arrow-left"
            onClick={previousSlide}
            aria-label="Previous"
          >
            ‹
          </button>

          {/* VIEWPORT */}

          <div
            className="category-slider-viewport"
            ref={viewportRef}
          >

            <div
              className="category-slider-track"
              style={{
                transform: `translateX(-${
                  currentIndex * cardWidth
                }%)`,
              }}
            >

              {categories.map((item, index) => (
                <div
                  className="category-card"
                  key={index}
                  style={{
                    flex: `0 0 ${cardWidth}%`,
                  }}
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    className="category-image"
                  />

                  <div className="category-overlay"></div>

                  <h2 className="category-title">
                    {item.title}
                  </h2>

                </div>
              ))}

            </div>

          </div>

          {/* RIGHT ARROW */}

          <button
            className="category-arrow category-arrow-right"
            onClick={nextSlide}
            aria-label="Next"
          >
            ›
          </button>

        </div>

      </section>

    </div>
  );
};

export default Category;