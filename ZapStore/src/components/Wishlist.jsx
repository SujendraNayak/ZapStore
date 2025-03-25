import React from "react";
import "./Wishlist.css";

const Wishlist = () => {
  const wishlistItems = [
    {
      id: 1,
      img: "assets/bag.jpg", // Replace with actual image path
      name: "Gucci duffle bag",
      oldPrice: "$160",
      newPrice: "$960",
      discount: "-36%",
    },
    {
      id: 2,
      img: "assets/cpu-cooler.jpg", // Replace with actual image path
      name: "RGB Liquid CPU Cooler",
      newPrice: "$1960",
    },
    {
      id: 3,
      img: "assets/gamepad.jpg", // Replace with actual image path
      name: "GPII Shooter USB Gamepad",
      newPrice: "$550",
    },
    {
      id: 4,
      img: "assets/jacket.jpg", // Replace with actual image path
      name: "Quilted Satin Jacket",
      newPrice: "$750",
    },
  ];

  const recommendedItems = [
    {
      id: 5,
      img: "assets/laptop.jpg", // Replace with actual image path
      name: "ASUS FHD Gaming Laptop",
      oldPrice: "$1160",
      newPrice: "$960",
      discount: "-38%",
      rating: 5,
    },
    {
      id: 6,
      img: "assets/monitor.jpg", // Replace with actual image path
      name: "IPS LCD Gaming Monitor",
      newPrice: "$1160",
      rating: 4.5,
    },
    {
      id: 7,
      img: "assets/red-gamepad.jpg", // Replace with actual image path
      name: "HAVIT HV-G92 Gamepad",
      newPrice: "$560",
      rating: 4,
    },
    {
      id: 8,
      img: "assets/keyboard.jpg", // Replace with actual image path
      name: "AK-900 Wired Keyboard",
      newPrice: "$200",
      rating: 4,
    },
  ];

  return (
    <div className="wishlist-container">
      <h1>Wishlist ({wishlistItems.length})</h1>
      <div className="wishlist-items">
        {wishlistItems.map((item) => (
          <div key={item.id} className="wishlist-card">
            {item.discount && <span className="discount">{item.discount}</span>}
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>
              {item.oldPrice && <span className="old-price">{item.oldPrice}</span>}{" "}
              <span className="new-price">{item.newPrice}</span>
            </p>
            <button className="add-to-cart">🛒 Add To Cart</button>
            <button className="remove-item">🗑️</button>
          </div>
        ))}
      </div>

      <h1>Just For You</h1>
      <div className="recommended-items">
        {recommendedItems.map((item) => (
          <div key={item.id} className="wishlist-card">
            {item.discount && <span className="discount">{item.discount}</span>}
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>
              {item.oldPrice && <span className="old-price">{item.oldPrice}</span>}{" "}
              <span className="new-price">{item.newPrice}</span>
            </p>
            <div className="rating">⭐ {item.rating} ({65})</div>
            <button className="add-to-cart">🛒 Add To Cart</button>
          </div>
        ))}
      </div>

      <button className="see-all">See All</button>
    </div>
  );
};

export default Wishlist;
