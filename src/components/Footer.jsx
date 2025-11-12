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
import { Link } from "react-router-dom";

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
              <li><Link>Men’s Fashion</Link></li>
              <li><Link>Women’s Fashion</Link></li>
              <li><Link >Electronics</Link></li>
              <li><Link>Home & Living</Link></li>
              <li><Link to = "">Beauty & Health</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><Link>Help Center</Link></li>
              <li><Link>Track Order</Link></li>
              <li><Link>Returns</Link></li>
              <li><Link>Shipping Info</Link></li>
              <li><Link>Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Account</h4>
            <ul>
              <li><Link>My Account</Link></li>
              <li><Link>Wishlist</Link></li>
              <li><Link>Orders</Link></li>
              <li><Link>Rewards</Link></li>
              <li><Link>Gift Cards</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Policies</h4>
            <ul>
              <li><Link>Privacy Policy</Link></li>
              <li><Link>Terms of Use</Link></li>
              <li><Link>Refund Policy</Link></li>
              <li><Link>Cookies Policy</Link></li>
              <li><Link>Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        {/* -------- Social Media -------- */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <Link className="social-link"><FaFacebookF /></Link>
            <Link className="social-link"><FaTwitter /></Link>
            <Link className="social-link"><FaInstagram /></Link>
            <Link className="social-link"><FaLinkedinIn /></Link>
            <Link className="social-link"><FaYoutube /></Link>
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
