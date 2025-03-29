import React from "react";
import "./Cart.css";
import keyboardImage from "../assets/keyboard.png"; // Using keyboard image for all products

const Cart = () => {
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="cart-item">
              <img src={keyboardImage} alt="Product" className="cart-image" />
              <span>LCD Monitor</span>
            </td>
            <td>$650</td>
            <td><input type="number" value="1" min="1" /></td>
            <td>$650</td>
          </tr>

          <tr>
            <td className="cart-item">
              <img src={keyboardImage} alt="Product" className="cart-image" />
              <span>H1 Gamepad</span>
            </td>
            <td>$560</td>
            <td><input type="number" value="2" min="1" /></td>
            <td>$1120</td>
          </tr>
        </tbody>
      </table>

      <div className="cart-actions">
        <button className="return-shop">Return to Shop</button>
        <div className="coupon-container">
          <input type="text" placeholder="Enter Coupon Code" />
          <button className="apply-coupon">Apply Coupon</button>
        </div>
      </div>

      <div className="cart-summary">
        <div className="cart-total">
          <p>Subtotal: <span>$1750</span></p>
          <p>Shipping: <span>Free</span></p>
          <p className="total">Total: <span>$1750</span></p>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
