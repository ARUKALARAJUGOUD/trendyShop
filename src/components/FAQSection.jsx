import React, { useState } from "react";
import "../css/FAQSection.css";
import { FaShippingFast, FaUndoAlt, FaCreditCard, FaGift, FaQuestionCircle } from "react-icons/fa";

const faqs = [
  {
    icon: <FaShippingFast />,
    question: "What is the shipping policy?",
    answer:
      "We offer fast and reliable shipping worldwide. Most orders are delivered within 3–7 business days depending on your location.",
  },
  {
    icon: <FaUndoAlt />,
    question: "How can I return a product?",
    answer:
      "You can return any product within 14 days of delivery. The item must be in its original condition. Visit our returns page to start the process.",
  },
  {
    icon: <FaCreditCard />,
    question: "What payment methods are accepted?",
    answer:
      "We accept all major credit and debit cards, PayPal, and secure net banking options.",
  },
  {
    icon: <FaGift />,
    question: "Do you offer gift wrapping?",
    answer:
      "Yes, we provide gift wrapping services for special occasions. You can select this option at checkout.",
  },
  {
    icon: <FaQuestionCircle />,
    question: "Can I track my order?",
    answer:
      "Yes! Once your order is shipped, you will receive a tracking number via email to monitor the delivery status.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2>❓ Frequently Asked Questions</h2>
      <p className="faq-subtitle">
        Find answers to the most common questions about shipping, returns, payments, and more.
      </p>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <div className="faq-icon">{faq.icon}</div>
              <span className="faq-text">{faq.question}</span>
              <span className="faq-toggle">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
