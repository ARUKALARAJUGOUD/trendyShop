// src/components/Services.tsx
import React from "react";
import { FaShippingFast, FaShieldAlt, FaGift, FaHeadset } from "react-icons/fa";
import "../css/Services.css";
// import { number } from "framer-motion";


const services = [
  { icon: FaShippingFast, title: "Fast Delivery", desc: "Get your products quickly with our reliable shipping." },
  { icon: FaShieldAlt, title: "Secure Payments", desc: "100% safe and secure payment options." },
  { icon: FaGift, title: "Best Offers", desc: "Amazing discounts and deals all year round." },
  { icon: FaHeadset, title: "24/7 Support", desc: "We are here to help you anytime." },
];

const Services = () => {
  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div key={index} className="service-card">
              <div className="service-icon">
                {Icon ? <Icon size={50} color="red"/> : null}
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
