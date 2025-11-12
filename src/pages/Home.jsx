import React from "react";
import "../css/Home.css";
import heroImage from "../images/shopping.jpg"; // Make sure to place an image in src/assets
import { useNavigate } from "react-router-dom";
import AboutPage from "./About";
import Services from "../components/Services";
import DiscountSection from "../components/DiscountSection";
import NewsletterSection from "../components/NewsletterSection";
import BrandSection from "../components/BrandSection";
import BlogSection from "../components/BlogSection";
import FAQSection from "../components/FAQSection";

import { ReactTyped } from "react-typed";
const Home = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className="home-container">
       
      <div className="hero-section">
        <div className="hero-text">
          <h1
          className="typing-heading"
          >
            {/* Welcome to TrendyShop */}
                          <ReactTyped
                strings={[
                  "Welcome to TrendyShop",
                  "Discover the Latest Trends",
                  "Shop Smart, Shop Trendy",
                ]}
                typeSpeed={70}
                backSpeed={40}
                loop
                showCursor={true}
                cursorChar="|"
              />
            </h1>
          <p>
            Discover the latest trends in fashion, electronics, and more.
            Shop easily, safely, and enjoy great deals every day.
          </p>
          <button className="shop-now-btn" onClick={()=> navigate("/product")}>Shop Now</button>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="ShopEase Hero" />
        </div>
      </div>

      <section className="about-section">
        <h2>Why Choose TrendyShop?</h2>
        <p>
          TrendyShop provides a seamless shopping experience with fast delivery,
          secure payments, and a wide range of products to choose from.
          Explore our categories and find what you love today!
        </p>
      </section>
    </div>
    <AboutPage />
    <DiscountSection />
    <BrandSection />
    <Services />
    <BlogSection />
    <NewsletterSection />
    <FAQSection />
     </>
  );
  
};

export default Home;










