import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h3>Categories</h3>
        <ul>
          <li>Women's Fashion</li>
          <li>Men's Fashion</li>
          <li>Electronics</li>
          <li>Home & Living</li>
          <li>Sports & Outdoors</li>
          <li>Health & Beauty</li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        {/* Hero Section */}
        <section className="hero">
          <img src="https://via.placeholder.com/900x300" alt="Promo Banner" />
        </section>

        {/* Flash Sales Section */}
        <section className="flash-sales">
          <h2>🔥 Flash Sales</h2>
          <div className="countdown">⏳ 03:23:19:56</div>

          <div className="product-grid">
            <div className="product-card">
              <img src="https://via.placeholder.com/150" alt="Gamepad" />
              <h3>HAVIT HV-G92 Gamepad</h3>
              <p><span className="old-price">$120</span> <span className="new-price">$80</span></p>
              <button>Add to Cart</button>
            </div>

            <div className="product-card">
              <img src="https://via.placeholder.com/150" alt="Keyboard" />
              <h3>AK-900 Wired Keyboard</h3>
              <p><span className="old-price">$120</span> <span className="new-price">$90</span></p>
              <button>Add to Cart</button>
            </div>

            <div className="product-card">
              <img src="https://via.placeholder.com/150" alt="Monitor" />
              <h3>IPS LCD Gaming Monitor</h3>
              <p><span className="old-price">$400</span> <span className="new-price">$370</span></p>
              <button>Add to Cart</button>
            </div>

            <div className="product-card">
              <img src="https://via.placeholder.com/150" alt="Chair" />
              <h3>S-Series Comfort Chair</h3>
              <p><span className="old-price">$400</span> <span className="new-price">$375</span></p>
              <button>Add to Cart</button>
            </div>
          </div>

          <button className="view-all">View All Products</button>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
