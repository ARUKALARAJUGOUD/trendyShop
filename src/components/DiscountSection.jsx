import React from "react";
import { motion } from "framer-motion";
import "../css/DiscountSection.css";


const deals = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 49.99,
    discount: "25%",
    image: "https://m.media-amazon.com/images/I/71L70bAl2KL.jpg",
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 99.99,
    discount: "30%",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRlB5KwzmHzwd7l0ikXm87Ono3H8PC5dn8m0AqFj0GwlT3HMlUhWKr3DQ-uTNKj1jotm6JIyDWJexP-qCDnWdiYPpnvZeIN9e-7zoM0lY9vjqcG2AawX_92",
  },
  {
    id: 3,
    title: "Men's Jacket",
    price: 59.99,
    discount: "40%",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRJnxHpzG00yw6YgNK4ULz5V48_GGt17QL0rPX8ucW9ZtNbjgx2u7jwf38kqtm8zwaOxGPTUD0HwZW2wXvDucG10fsG4sVghEsw7X9Hpnz83zwk7n8ZVe5bkg",
  },
  {
    id: 4,
    title: "Sneakers",
    price: 79.99,
    discount: "35%",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT4g7wKNg6hjEuoPvwotQyHbZWCuFpDG6PbcdfI1dCi-gRyOXHqBcKekdhj0cu4r0rdRSGlxDqzsZ7F64HOYFoL2XzXOu7ZagC91ATPmKA",
  },
  {
    id: 5,
    title: "Digital Camera",
    price: 249.99,
    discount: "20%",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTB6sebkOIvo_PxeElWSt_cjaXbKCmFM9R-g41C6xyt8Ib8ge3CAF-xs3nj_QCysl-tI5kMUQ7bvLLQWpDuoADw24BAeRyYFKdVGkUpBvJ_Kce2FZaObT76",
  },
];

const DiscountSection = () => {
  return (
    <section className="discount-section">
      <h2>🔥 Hot Deals</h2>
      <div className="deals-container">
        {deals.map((deal, index) => (
          <motion.div
            key={deal.id}
            className="deal-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div className="deal-image">
              <img src={deal.image} alt={deal.title} />
              <span className="discount-badge">{deal.discount} OFF</span>
            </div>
            <h3>{deal.title}</h3>
            <p className="deal-price">${deal.price.toFixed(2)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DiscountSection;
