import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Left Side: Contact Info */}
      <div className="contact-info">
        <div className="contact-box">
          <span className="icon">📞</span>
          <h3>Call To Us</h3>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +8801611112222</p>
        </div>

        <div className="contact-box">
          <span className="icon">📧</span>
          <h3>Write To Us</h3>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Email: customer@exclusive.com</p>
          <p>Email: support@exclusive.com</p>
        </div>
      </div>

      {/* Right Side: Contact Form */}
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <div className="form-row">
            <input type="text" placeholder="Your Name*" required />
            <input type="email" placeholder="Your Email*" required />
            <input type="tel" placeholder="Your Phone*" required />
          </div>
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className="send-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
