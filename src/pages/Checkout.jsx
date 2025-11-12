// src/pages/CheckoutPage.jsx
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import "../css/Checkout.css";

import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe("pk_test_51M...YOUR_KEY_HERE");

const CheckoutForm = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation();

  const [billing, setBilling] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // ✅ Check if single product is passed via ProductDetails page
  const singleProduct = location.state?.singleProduct;

  // Use single product if passed, otherwise use cart
  const checkoutItems = singleProduct
    ? [{ ...singleProduct, quantity: 1 }]
    : cart;

  const totalAmount = checkoutItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setBilling({ ...billing, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    // Simulate payment success
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      // Clear cart only if not single product checkout
      if (!singleProduct) dispatch(clearCart());
    }, 1500);
  };

  if (success)
    return (
      <div className="checkout-success">
        <h2>✅ Payment Successful!</h2>
        <p>Thank you for your order.</p>
      </div>
    );

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <div className="checkout-columns">
        {/* Left Column: Billing + Payment */}
        <div className="checkout-left">
          <h2>Billing Details</h2>
          {["name", "email", "address", "city", "postalCode", "country"].map(
            (field) => (
              <div className="form-group" key={field}>
                <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={billing[field]}
                  onChange={handleChange}
                  required
                />
              </div>
            )
          )}

          <h2>Payment</h2>
          <div className="form-group">
            <CardElement className="card-element" />
          </div>

          <button
            className="checkout-btn"
            type="submit"
            disabled={!stripe || loading || checkoutItems.length === 0}
          >
            {loading ? "Processing..." : "Pay Now"}
          </button>
        </div>

        {/* Right Column: Order Summary */}
        <div className="checkout-right">
          <h2>Order Summary</h2>
          <div className="order-summary">
            {checkoutItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              checkoutItems.map((item) => (
                <div className="order-item" key={item.id}>
                  <img src={item.image} alt={item.title} />
                  <div className="order-item-info">
                    <h4>{item.title}</h4>
                    <p>Qty: {item.quantity}</p>
                    <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))
            )}
          </div>
          <h3>Total: ${totalAmount.toFixed(2)}</h3>
        </div>
      </div>
    </form>
  );
};

const CheckoutPage = () => {
  return (
    <Elements stripe={stripePromise}>
      <div className="checkout-container">
        <CheckoutForm />
      </div>
    </Elements>
  );
};

export default CheckoutPage;
