import React from "react";
import "../css/Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* -------- Newsletter Section -------- */}
        <div className="footer-newsletter">
          <h3>Stay Updated!</h3>
          <p>Subscribe to get special offers, free giveaways, and latest updates.</p>
          <div className="newsletter-box">
            <input
              type="email"
              placeholder="Enter your email address"
              className="newsletter-input"
            />
            <button className="newsletter-btn">
              <FaPaperPlane /> Subscribe
            </button>
          </div>
        </div>

        {/* -------- Footer Links -------- */}
        <div className="footer-links">
          <div className="footer-column">
            <h4>Categories</h4>
            <ul>
              <li><a href="#">Men’s Fashion</a></li>
              <li><a href="#">Women’s Fashion</a></li>
              <li><a href="#">Electronics</a></li>
              <li><a href="#">Home & Living</a></li>
              <li><a href="#">Beauty & Health</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Track Order</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Account</h4>
            <ul>
              <li><a href="#">My Account</a></li>
              <li><a href="#">Wishlist</a></li>
              <li><a href="#">Orders</a></li>
              <li><a href="#">Rewards</a></li>
              <li><a href="#">Gift Cards</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Policies</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Refund Policy</a></li>
              <li><a href="#">Cookies Policy</a></li>
              <li><a href="#">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        {/* -------- Social Media -------- */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" className="social-link"><FaFacebookF /></a>
            <a href="#" className="social-link"><FaTwitter /></a>
            <a href="#" className="social-link"><FaInstagram /></a>
            <a href="#" className="social-link"><FaLinkedinIn /></a>
            <a href="#" className="social-link"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* -------- Bottom Copyright -------- */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} TrendyShop. All Rights Reserved.</p>
        <p>Made with ❤️ by TrendyShop Team</p>
      </div>
    </footer>
  );
};

export default Footer;
