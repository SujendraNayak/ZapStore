import React, { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../context/CartContext";  // ✅ Correct Import
// Import CartContext

const Cart = () => {
  const { cartItems } = useContext(CartContext);  // Access cartItems from context

  // Calculate total price
  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length === 0 ? (
            <tr>
              <td colSpan="2">Your cart is empty</td>
            </tr>
          ) : (
            cartItems.map((item, index) => (
              <tr key={index}>
                <td className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-image" />
                  <span>{item.name}</span>
                </td>
                <td>${item.price}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="cart-summary">
        <p>Subtotal: <span>${subtotal}</span></p>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
