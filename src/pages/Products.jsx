import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../features/wishlist/wishlistSlice";

import { addToCart } from "../redux/cartSlice";
import "../css/Products.css"
const Products = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState(1000);
  const [rating, setRating] = useState(0);

  // used for adding whitelist 
const navigate = useNavigate();
const dispatch = useDispatch();
const wishlist = useSelector((state) => state.wishlist);


const isInWishlist = (id) => wishlist.some((item) => item.id === id);


const [addedToCart, setAddedToCart] = useState(null);

const handleAddToCart = (product) => {
  dispatch(addToCart(product));
  setAddedToCart(product.id);

  // remove the feedback after 1.2 seconds
  setTimeout(() => setAddedToCart(null), 1200);
};




  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      // const res = await fetch("http://localhost:4000/products");
      const data = await res.json();
      setProducts(data);
      setFiltered(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  // Filter Logic
  useEffect(() => {
    let updated = [...products];

    if (category !== "all") {
      updated = updated.filter((p) => p.category === category);
    }

    updated = updated.filter((p) => p.price <= price);
    updated = updated.filter((p) => p.rating.rate >= rating);

    setFiltered(updated);
  }, [category, price, rating, products]);

  return (
    <div className="products-page">
      <h1 className="page-title">🛍️ Explore Our Products</h1>

      {/* Filters */}
      <div className="filters">
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All Categories</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
        </select>

        <div className="filter-range">
          <label>Max Price: ${price}</label>
          <input
            type="range"
            min="10"
            max="1000"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="filter-range">
          <label>Min Rating: {rating}⭐</label>
          <input
            type="range"
            min="0"
            max="5"
            step="0.5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
      </div>


      {/* Loader Animation */}
      {loading ? (
        <div className="loader">
          <div className="spinner"></div>
          <p>Loading products...</p>
        </div>
      ) : (
        <div className="product-grid">
          {filtered.map((product) => (


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
                className={`btn-cart ${addedToCart === product.id ? "added" : ""}`}
                onClick={() => handleAddToCart(product)}
              >
                {addedToCart === product.id ? "✔ Added!" : "Add to Cart"}
              </button>

                {/* <button className="btn-fav">❤</button> */}

                <button
  className={`btn-fav ${isInWishlist(product.id) ? "active" : ""}`}
  onClick={() =>
    isInWishlist(product.id)
      ? dispatch(removeFromWishlist(product.id))
      : dispatch(addToWishlist(product))
  }
>
  ❤
</button>


              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
