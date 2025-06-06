import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'; 
import '../App.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="col brand">
          <h3>ZapStore</h3>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <button className="btn btn-outline-light">Order Now</button>
        </div>

        <div className="col support">
          <h5>Support</h5>
          <p>111 Bijoy Sarani, Dhaka, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div className="col account">
          <h5>Account</h5>
          <ul>
            <li><Link to="/login">My Account</Link></li>
            <li><Link to="/register">Login / Sign up</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/wishlist">Wishlist</Link></li>
            <li><Link to="/shop">Shop</Link></li>
          </ul>
        </div>

        <div className="col quick-links">
          <h5>Quick Link</h5>
          <ul>
            <li><Link to="/">Privacy Policy</Link></li>
            <li><Link to="/">Terms of Use</Link></li>
            <li><Link to="/">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="col download">
          <h5>Download App</h5>
          <p>Save $3 with App New User Only</p>
          <img
            src="/assets/qr-code.png" 
            alt="QR Code"
            className="qr-code"
          />
          <div className="social-icons mt-3">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} ZapStore. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
