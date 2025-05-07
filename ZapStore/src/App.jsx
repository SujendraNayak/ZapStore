import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Signup from './components/Signup';
import Wishlist from './components/Wishlist';
import Cart from './components/Cart';
import Account from './components/Account';
import Contact from './components/Contact';
import './App.css';
import { CartProvider } from './context/CartContext';  
import { WishlistProvider } from './context/WishlistContext';  // ✅ Import WishlistProvider

function App() {
  return (
    <Router>
      <CartProvider>
        <WishlistProvider> {/* ✅ Wrap everything with WishlistProvider */}
          <div className="app-container">
            <Navbar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<div>About Page</div>} />
                <Route path="/sign-up" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/account" element={<Account />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </WishlistProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
