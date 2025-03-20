import React from 'react';

function Register() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Register</h2>
        <p>Create your ZapStore account</p>

        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>

        <button className="btn-login">Register</button>

        <div className="extra-links">
          <p>Already have an account? <a href="/login">Login</a></p>
        </div>
      </div>
    </div>
  );
}

export default Register;
