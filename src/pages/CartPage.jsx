// src/pages/CartPage.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  removeFromCart,
  decreaseQty,
  addToCart,
  clearCart,
} from "../redux/cartSlice";
import "../css/CartPage.css";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  if (cart.length === 0)
    return <h2 className="empty-cart">🛍️ Your cart is empty.</h2>;

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      <button className="clear-btn" onClick={() => dispatch(clearCart())}>
        Clear Cart
      </button>

      <div className="cart-items">
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="cart-info">
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              <div className="cart-controls">
                <button onClick={() => dispatch(decreaseQty(item.id))}>−</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(addToCart(item))}>+</button>
              </div>
              <button
                className="remove-btn"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Total: ${totalPrice}</h3>
        {/* <button className="checkout-btn">Proceed to Checkout</button> */}
        <button className="checkout-btn" onClick={() => navigate("/checkout")}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
