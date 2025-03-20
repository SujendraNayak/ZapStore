import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import { FaHeart, FaShoppingCart } from 'react-icons/fa'; // ✅ Import icons

function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${searchTerm}`);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">ZapStore</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sign-up">Sign up</Link>
            </li>
          </ul>

          {/* 🔎 Search Bar */}
          <form className="d-flex me-3" onSubmit={handleSearch}>
            <input
              type="text"
              className="form-control me-2"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>

          {/* ❤️ Heart Icon (Wishlist) */}
          <Link to="/wishlist" className="btn btn-light me-2">
            <FaHeart color="red" size={24} />
          </Link>

          {/* 🛒 Cart Icon */}
          <Link to="/cart" className="btn btn-light me-2">
            <FaShoppingCart color="green" size={24} />
          </Link>

          <Link className="btn btn-outline-success" to="/login">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
