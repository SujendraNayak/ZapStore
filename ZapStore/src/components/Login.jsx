import React from 'react';
import './Login.css'
import loginImage from '../assets/loginpage_img.jpeg'; // Import the image

function Login() {
  return (
    <div className="login-container">
      {/* Background Image Section */}
      <div 
        className="login-image" 
        style={{ backgroundImage: `url(${loginImage})` }}
      ></div>
      
      <div className="login-box">
        
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

        <button className="btn-login">Login </button>
        

        <div className="extra-links">
          
        </div>
      </div>
    </div>
  );
}

export default Login;
