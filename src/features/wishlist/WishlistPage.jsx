import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "./wishlistSlice";
import { useNavigate, Link } from "react-router-dom";
// import "../../pages/Products.css";
import "../../css/Whitelist.css"

const WishlistPage = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="wishlist-page">
      <h1 className="page-title">Your Favourites</h1>

      {wishlist.length === 0 ? (
        <div className="empty-wishlist">
          <p>Your wishlist is empty.</p>
          <Link to="/" className="shop-now-btn">Browse Products</Link>
        </div>
      ) : (
        <div className="product-grid">
          {wishlist.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.title}
                onClick={() => navigate(`/product/${product.id}`)}
              />
              <h3>{product.title.slice(0, 25)}...</h3>
              <p>${product.price}</p>
              <p className="rating">⭐ {product.rating.rate}</p>
              <div className="buttons">
                <button
                  className="btn-remove"
                  onClick={() => dispatch(removeFromWishlist(product.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
