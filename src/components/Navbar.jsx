import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { useSelector } from "react-redux";
import "../css/Navbar.css";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const cartCount = useSelector((state) =>
    state.cart.reduce((sum, item) => sum + item.quantity, 0)
  );

  const toggleMenu = () => setMobileMenu(!mobileMenu);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          TrendyShop
        </Link>

        <div className="search-box">
          <input type="text" placeholder="Search products..." />
        </div>

        <div className="nav-links">
          <Link to="/wishlist">Fav</Link>
          <Link to="/product">Products</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/cart" className="cart-link">
            <FiShoppingCart size={20} />
            <span className="cart-count">{cartCount}</span>
          </Link>
        </div>

        <div className="mobile-menu-btn">
          <button onClick={toggleMenu}>
            {mobileMenu ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {mobileMenu && (
        <div className="mobile-menu">
          <Link to="/wishlist">Fav</Link>
          {/* <Link to="/about" onClick={toggleMenu}>About</Link> */}
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
          <Link to="/login" onClick={toggleMenu}>Login</Link>
          <Link to="/signup" onClick={toggleMenu}>Signup</Link>
          <Link to="/cart" onClick={toggleMenu} className="cart-link">
            <FiShoppingCart size={20} />
            <span className="cart-count">{cartCount}</span>
          </Link>
          <input type="text" placeholder="Search products..." />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
