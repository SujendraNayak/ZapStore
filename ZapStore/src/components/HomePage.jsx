import React, { useContext } from 'react';
import './HomePage.css';
import { CartContext } from '../context/CartContext';  
import { WishlistContext } from '../context/WishlistContext';  
import { FaHeart } from 'react-icons/fa';  

import iphoneImage from '../assets/iphone.jpeg';  
import gamepadImage from '../assets/play_s.png'; 
import keyboradImage from '../assets/Keyboard.png'; 

const HomePage = () => {
  const { addToCart } = useContext(CartContext);  
  const { wishlist, addToWishlist, removeFromWishlist } = useContext(WishlistContext);

  const products = [
    { id: 1, name: "HAVIT HV-G92 Gamepad", price: 80, image: gamepadImage },
    { id: 2, name: "AK-900 Wired Keyboard", price: 90, image: keyboradImage },
    { id: 3, name: "IPS LCD Gaming Monitor", price: 370, image: "https://via.placeholder.com/150" },
    { id: 4, name: "S-Series Comfort Chair", price: 375, image: "https://via.placeholder.com/150" },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const toggleWishlist = (product) => {
    wishlist.some((item) => item.id === product.id) ? removeFromWishlist(product.id) : addToWishlist(product);
  };

  return (
    <div className="home-container">
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

      <div className="main-content">
        <section className="hero">
          <div className="black-box">
            <h2>iPhone 15 Series</h2>  
            <h2>Up to 10% off Voucher</h2>
            <p>Shop Now →</p>
          </div>
          <img src={iphoneImage} alt="iPhone Promo" className="iphone-img" />
        </section>

        <section className="flash-sales">
          <h2>🔥 Flash Sales</h2>
          <div className="countdown">⏳ 03:23:19:56</div>

          <div className="product-grid">
            {products.map((product) => (
              <div className="product-card" key={product.id}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>
                  <span className="old-price">$120</span> 
                  <span className="new-price">${product.price}</span>
                </p>
                <div className="buttons">
                  <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                  <FaHeart 
                    className="wishlist-icon" 
                    color={wishlist.some((item) => item.id === product.id) ? "red" : "gray"} 
                    onClick={() => toggleWishlist(product)}
                  />
                </div>
              </div>
            ))}
          </div>

          <button className="view-all">View All Products</button>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
