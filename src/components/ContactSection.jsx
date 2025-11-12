import React, { useState } from "react";
import { motion } from "framer-motion";
import "../css/ContactSection.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const mapContainerStyle = {
    width: "100%",
    height: "250px",
    borderRadius: "12px",
  };

  const center = {
    lat: 17.385044, // Hyderabad Latitude
    lng: 78.486671, // Hyderabad Longitude
  };

  return (
    <section className="contact-section">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Left Side: Form */}
        <div className="contact-form">
          <h2>Contact Us</h2>
          <p>Have questions or feedback? Fill out the form below and we’ll get back to you.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Right Side: Contact Info + Map */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>We are here to answer your questions and help you with your orders.</p>

          <div className="info-item">
            <FaPhoneAlt className="info-icon" />
            <span>+91 98765 43210</span>
          </div>
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <span>support@trendyshop.com</span>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <span>123 Market Street, Hyderabad, India</span>
          </div>

          <div className="map-container">
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={15}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
