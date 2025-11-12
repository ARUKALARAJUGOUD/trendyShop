import React, { useState } from "react";
import "../css/NewsletterSection.css";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Here you can integrate API or Firebase to save email
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000); // show message for 3 sec
    }
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-content">
        <h2>Join Our Newsletter</h2>
        <p>Subscribe now and get exclusive updates, offers, and discounts!</p>

        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>

        {submitted && <p className="success-msg">Thank you for subscribing!</p>}
      </div>
    </section>
  );
};

export default NewsletterSection;
