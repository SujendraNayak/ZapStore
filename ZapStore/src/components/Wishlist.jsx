import React from "react";
import "./Wishlist.css";

// ✅ Using only keyboard image for all products
import keyboardImage from "../assets/keyboard.png";

const Wishlist = () => {
  return (
    <div className="wishlist-container">
      <h2>Wishlist (4)</h2>
      <div className="wishlist-items">
        <div className="product-card">
          <img src={keyboardImage} alt="Keyboard" />
          <h3>AK-900 Wired Keyboard</h3>
          <p><span className="new-price">$200</span></p>
          <button>Add to Cart</button>
        </div>

        <div className="product-card">
          <img src={keyboardImage} alt="Keyboard" />
          <h3>RGB Liquid CPU Cooler</h3>
          <p><span className="new-price">$1960</span></p>
          <button>Add to Cart</button>
        </div>

        <div className="product-card">
          <img src={keyboardImage} alt="Keyboard" />
          <h3>GP11 Shooter USB Gamepad</h3>
          <p><span className="new-price">$550</span></p>
          <button>Add to Cart</button>
        </div>

        <div className="product-card">
          <img src={keyboardImage} alt="Keyboard" />
          <h3>Quilted Satin Jacket</h3>
          <p><span className="new-price">$750</span></p>
          <button>Add to Cart</button>
        </div>
      </div>

      <h2>Just For You</h2>
      <div className="recommended-items">
        <div className="product-card">
          <img src={keyboardImage} alt="Keyboard" />
          <h3>ASUS FHD Gaming Laptop</h3>
          <p><span className="new-price">$960</span></p>
          <button>Add to Cart</button>
        </div>

        <div className="product-card">
          <img src={keyboardImage} alt="Keyboard" />
          <h3>IPS LCD Gaming Monitor</h3>
          <p><span className="new-price">$1160</span></p>
          <button>Add to Cart</button>
        </div>

        <div className="product-card">
          <img src={keyboardImage} alt="Keyboard" />
          <h3>HAVIT HV-G92 Gamepad</h3>
          <p><span className="new-price">$560</span></p>
          <button>Add to Cart</button>
        </div>

        <div className="product-card">
          <img src={keyboardImage} alt="Keyboard" />
          <h3>AK-900 Wired Keyboard</h3>
          <p><span className="new-price">$200</span></p>
          <button>Add to Cart</button>
        </div>
      </div>

      <button className="see-all">See All</button>
    </div>
  );
};

export default Wishlist;
