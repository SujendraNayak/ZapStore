import React from "react";
import "./Account.css";

const MyAccount = () => {
  return (
    <div className="account-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h3>Manage My Account</h3>
        <ul>
          <li className="active">My Profile</li>
          <li>Address Book</li>
          <li>My Payment Options</li>
        </ul>

        <h3>My Orders</h3>
        <ul>
          <li>My Returns</li>
          <li>My Cancellations</li>
        </ul>

        <h3>My Wishlist</h3>
      </div>

      {/* Right side content */}
      <div className="account-content">
        <h2>Edit Your Profile</h2>
        <form>
          <div className="form-row">
            <div className="input-group">
              <label>First Name</label>
              <input type="text" value="Md" disabled />
            </div>

            <div className="input-group">
              <label>Last Name</label>
              <input type="text" value="Rimel" disabled />
            </div>
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" value="rimellll@gmail.com" disabled />
          </div>

          <div className="input-group">
            <label>Address</label>
            <input type="text" value="Kingston, 5236, United State" disabled />
          </div>

          <h3>Password Changes</h3>
          <div className="input-group">
            <label>Current Password</label>
            <input type="password" />
          </div>

          <div className="input-group">
            <label>New Password</label>
            <input type="password" />
          </div>

          <div className="input-group">
            <label>Confirm New Password</label>
            <input type="password" />
          </div>

          <div className="button-group">
            <button type="button" className="cancel-btn">Cancel</button>
            <button type="submit" className="save-btn">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyAccount;
