import React from "react";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart-container">
      <h2>Cart</h2>
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
            <td>
              <img src="../assets/monitor.png" alt="LCD Monitor" />
              LCD Monitor
            </td>
            <td>$650</td>
            <td>
              <select>
                <option>01</option>
                <option>02</option>
                <option>03</option>
              </select>
            </td>
            <td>$650</td>
          </tr>
          <tr>
            <td>
              <img src="../assets/gamepad.png" alt="H1 Gamepad" />
              H1 Gamepad
            </td>
            <td>$550</td>
            <td>
              <select>
                <option>01</option>
                <option selected>02</option>
                <option>03</option>
              </select>
            </td>
            <td>$1100</td>
          </tr>
        </tbody>
      </table>

      <div className="cart-buttons">
        <button className="return-shop">Return To Shop</button>
        <button className="update-cart">Update Cart</button>
      </div>

      <div className="coupon-section">
        <input type="text" placeholder="Coupon Code" />
        <button className="apply-coupon">Apply Coupon</button>
      </div>

      <div className="cart-total">
        <h3>Cart Total</h3>
        <p>Subtotal: <span>$1750</span></p>
        <p>Shipping: <span>Free</span></p>
        <p><strong>Total: <span>$1750</span></strong></p>
        <button className="checkout">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
