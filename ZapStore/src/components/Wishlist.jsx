import React from "react";
import "./Wishlist.css";
import keyboardImage from "../assets/keyboard.png";

const Wishlist = () => {
  return (
    <div className="wishlist-container">
      <h2>Wishlist (4)</h2>
      <div className="wishlist-items">
        {[
          { name: "AK-900 Wired Keyboard", price: "$200" },
          { name: "RGB Liquid CPU Cooler", price: "$1960" },
          { name: "GP11 Shooter USB Gamepad", price: "$550" },
          { name: "Quilted Satin Jacket", price: "$750" },
        ].map((item, index) => (
          <div className="wishlist-card" key={index}>
            <img src={keyboardImage} alt={item.name} />
            <h3>{item.name}</h3>
            <p><span className="wishlist-price">{item.price}</span></p>
            <button className="wishlist-btn">Add to Cart</button>
          </div>
        ))}
      </div>
      
      <h2>Just For You</h2>
      <div className="recommended-items">
        {[
          { name: "ASUS FHD Gaming Laptop", price: "$960" },
          { name: "IPS LCD Gaming Monitor", price: "$1160" },
          { name: "HAVIT HV-G92 Gamepad", price: "$560" },
          { name: "AK-900 Wired Keyboard", price: "$200" },
        ].map((item, index) => (
          <div className="wishlist-card" key={index}>
            <img src={keyboardImage} alt={item.name} />
            <h3>{item.name}</h3>
            <p><span className="wishlist-price">{item.price}</span></p>
            <button className="wishlist-btn">Add to Cart</button>
          </div>
        ))}
      </div>

      <button className="see-all-btn">See All</button>
    </div>
  );
};

export default Wishlist;
