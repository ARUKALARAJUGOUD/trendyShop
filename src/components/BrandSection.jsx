import React from "react";
import "../css/BrandSection.css";

const brands = [
  { name: "Nike", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" },
  { name: "Adidas", logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" },
  { name: "Puma", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST5ywkvJmT7oMetE0ows49HE0OTx17f1bhYw&s" },
  { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Samsung", logo: "https://pngimg.com/uploads/samsung_logo/samsung_logo_PNG9.png" },
  { name: "Sony", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB0IjLyf-yTbMZSnzhpKUbx6adOz2r5U-lEw&s" },
  { name: "Gucci", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Gucci_logo.png" },
  { name: "Zara", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg" },
  { name: "Levi's", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4MorIvYLz3cUjV-xSwP_x5hscWX_ASVmUIlS47JoCqIhO57q-fTAN1yEqZesrNPk4zgY&usqp=CAU" },
  { name: "H&M", logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg" },
];

const BrandSection = () => {
  return (
    <section className="brand-section">
      <h2>Featured Brands</h2>
      <div className="brand-carousel">
        <div className="brand-track">
          {brands.concat(brands).map((brand, index) => (
            <div className="brand-card" key={index}>
              <img src={brand.logo} alt={brand.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
