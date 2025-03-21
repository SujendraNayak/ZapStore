import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';

import './App.css';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <div id="root">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Contact" element={<div>Contact</div>} />
            <Route path="/About" element={<div>About Page</div>} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element= {<div>hii</div>}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
