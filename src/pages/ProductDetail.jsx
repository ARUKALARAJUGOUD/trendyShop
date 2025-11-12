import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import "../css/ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [userRating, setUserRating] = useState(0);
    const [galleryImages, setGalleryImages] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
 
      const data = await res.json();
      setProduct(data);

      // Simulate multiple images by slightly modifying the original
      const images = [
        data.image,
        data.image.replace(".jpg", "1.jpg"),
        data.image.replace(".jpg", "2.jpg"),
        data.image.replace(".jpg", "3.jpg"),
      ];
      setGalleryImages(images);
      setMainImage(images[0]);

      // Related Products
      const relatedRes = await fetch(
       
        `https://fakestoreapi.com/products/category/${encodeURIComponent(data.category)}`
      );
      const relatedData = await relatedRes.json();
      setRelatedProducts(relatedData.filter((p) => p.id !== data.id));

      // Mock comments
      setComments([
        { id: 1, user: "John Doe", text: "Great product!", rating: 4.5 },
        { id: 2, user: "Jane Smith", text: "Loved it, fast delivery.", rating: 5 },
      ]);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  // Handle comment submission
  const handleAddComment = () => {
    if (newComment && userRating > 0) {
      const comment = {
        id: Date.now(),
        user: "You",
        text: newComment,
        rating: userRating,
      };
      setComments([comment, ...comments]);
      setNewComment("");
      setUserRating(0);
    }
  };

  return (
    <div className="product-details-page">
      <div className="product-main">
        <div className="images-section">
          <img src={mainImage} alt={product.title} className="main-image" />
          <div className="thumbnail-images">
            {galleryImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`thumb-${idx}`}
                className={`thumb ${mainImage === img ? "active" : ""}`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        <div className="product-info">
          <h2>{product.title}</h2>
          <p className="price">${product.price}</p>
          <p className="category">Category: {product.category}</p>
          <p className="rating">⭐ {product.rating.rate} ({product.rating.count} reviews)</p>
          <p>{product.description}</p>

          {/* ✅ Add to Cart */}
          <button
            className="add-to-cart-btn"
            onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}
          >
            Add to Cart
          </button>

          {/* ✅ Checkout Button */}
          <button
            className="checkout-btn"
            onClick={() => navigate("/checkout", { state: { singleProduct: product } })}
          >
            Checkout
          </button>
        </div>
      </div>

      {/* Related Products */}
      <div className="related-products">
        <h3>Related Products</h3>
        <div className="related-grid">
          {relatedProducts.map((item) => (
            <div
              key={item.id}
              className="related-card"
              onClick={() => navigate(`/product/${item.id}`)}
            >
              <img src={item.image} alt={item.title} />
              <h4>{item.title.slice(0, 25)}...</h4>
              <p>${item.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Comments / Reviews */}
      <div className="comments-section">
        <h3>Customer Reviews</h3>

        {/* Add new comment */}
        <div className="add-comment">
          <textarea
            placeholder="Write your comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          {/* <div className="rating-input">
            <label>⭐ Rating:</label>
            <select value={userRating} onChange={(e) => setUserRating(Number(e.target.value))}>
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div> */}



          <div className="rating-input">
  <label>⭐ Rating:</label>
  <div className="stars">
    {[1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        className={star <= userRating ? "star selected" : "star"}
        onClick={() => setUserRating(star)}
      >
        ★
      </span>
    ))}
  </div>
</div>




          <button onClick={handleAddComment}>Submit</button>
        </div>

        {comments.map((c) => (
          <div key={c.id} className="comment">
            <p><strong>{c.user}</strong> ⭐ {c.rating}</p>
            <p>{c.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;

