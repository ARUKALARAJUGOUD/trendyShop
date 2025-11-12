import React from "react";
import {Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import WishlistPage from "./features/wishlist/WishlistPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/Checkout";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";

// import AboutPage from "./pages/About";

const App = () => {
  return (
      <div className="pt-16">
         <Navbar />
         
        {/* <Products /> */}
        <Routes>


           
        <Route path="/" element ={<Home />} />
         
       
        <Route   path="/product" element={<Products />} />
        {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
        <Route path="/product/:id" element={<ProductDetail />} />
         <Route path="/wishlist" element={<WishlistPage />} />
         <Route path = "/contact" element = {<ContactSection />} /> 
         <Route path="/signup" element = {<SignupPage />} />
        <Route path="/login" element = {<LoginPage />} />
          <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          {/* Add routes for Login, Signup, About, Contact, Cart */}
        </Routes>
         <Footer />
      </div>
  );
};

export default App;
