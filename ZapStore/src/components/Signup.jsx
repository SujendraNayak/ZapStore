import React from 'react';
import './Signup.css';
import loginImage from '../assets/loginpage_img.jpeg'; // Import the image

function Signup() {
  return (
    <div className="login-container">
      {/* Background Image Section */}
      <div 
        className="login-image" 
        style={{ backgroundImage: `url(${loginImage})` }}
      ></div>
      
      <div className="login-box">
        <h2>Create an account</h2>
        <p>Enter your details below</p>
        
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Your Name" />
        </div>

        <div className="form-group">
          <label>Email or Phone Number</label>
          <input type="text" placeholder="Email or Phone Number" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Password" />
        </div>

        <button className="btn-login">Create Account</button>
        <button className="google-signup">Sign up with Google</button>

        <div className="extra-links">
          <p>Already have an account? <a href="/login">Log in</a></p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
