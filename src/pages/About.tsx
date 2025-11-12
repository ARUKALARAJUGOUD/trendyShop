import React from "react";
import "../css/AboutPage.css";
import aboutImage from "../images/Aboutimage.jpg";
import { motion } from "framer-motion";

const team = [
  {
    name: "Ravi Kumar",
    role: "Founder & CEO",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Anjali Sharma",
    role: "Lead Designer",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Vikram Singh",
    role: "Product Manager",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Priya Patel",
    role: "Marketing Head",
    img: "https://randomuser.me/api/portraits/women/50.jpg",
  },
];

const AboutPage = () => {
  return (
    <div className="about-container">
      {/* ------------------- ABOUT SECTION ------------------- */}
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.div
          className="about-text"
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1>About TrendyShop</h1>
          <p>
            Welcome to <strong>TrendyShop</strong>, your one-stop destination for
            fashion, electronics, and lifestyle products. We’re passionate about
            bringing you the best quality items with unbeatable prices — all
            while making your shopping experience simple and secure.
          </p>
          <p>
            Founded in 2023, TrendyShop was built with one vision — to empower
            people to express their unique style effortlessly. We’re proud to
            serve thousands of happy customers worldwide.
          </p>
        </motion.div>

        <motion.div
          className="about-image"
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <img src={aboutImage} alt="About TrendyShop" />
        </motion.div>
      </motion.div>

      {/* ------------------- OUR STORY SECTION ------------------- */}
      <motion.section
        className="our-story"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>Our Story</h2>
        <p>
          TrendyShop began with a simple idea: make online shopping exciting,
          affordable, and accessible to everyone. From a small local store to an
          online global platform — our journey has been about connecting people
          with products that inspire confidence and joy.
        </p>
      </motion.section>

      {/* ------------------- TEAM SECTION ------------------- */}
      <motion.section
        className="team-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="team-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <img src={member.img} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;






