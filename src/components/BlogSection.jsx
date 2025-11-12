import React from "react";
import "../css/BlogSection.css";

const blogs = [
  {
    id: 1,
    title: "Top 10 Fashion Trends to Try This Season",
    category: "Fashion",
    date: "October 25, 2025",
    image:
      "https://assets.vogue.com/photos/68f6b5a260655ad273fea23d/3:4/w_640,c_limit/FIVE_HOLDING%20(4).jpg",
    desc: "Discover the hottest fashion trends and must-have outfits to upgrade your wardrobe this year.",
  },
  {
    id: 2,
    title: "Latest Tech Gadgets You Can’t Miss in 2025",
    category: "Technology",
    date: "November 1, 2025",
    image:
      "https://cdn.mos.cms.futurecdn.net/3g3rXhD6dm2rB5B2EcLRfi-970-80.jpg.webp",
    desc: "Explore the newest and most exciting tech gadgets revolutionizing the market today.",
  },
  {
    id: 3,
    title: "How to Choose the Perfect Product Online",
    category: "Shopping Tips",
    date: "October 15, 2025",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=80",
    desc: "Learn smart online shopping strategies to get the best deals and avoid fake products.",
  },
];

const BlogSection = () => {
  return (
    <section className="blog-section">
      <h2>📰 Latest from Our Blog</h2>
      <p className="blog-subtitle">
        Stay updated with the latest news, trends, and insights in fashion, tech, and lifestyle.
      </p>

      <div className="blog-grid">
        {blogs.map((post) => (
          <div key={post.id} className="blog-card">
            <div className="blog-image">
              <img src={post.image} alt={post.title} />
              <span className="blog-category">{post.category}</span>
            </div>
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p>{post.desc}</p>
              <div className="blog-meta">
                <span>{post.date}</span>
                <button className="read-more">Read More →</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
