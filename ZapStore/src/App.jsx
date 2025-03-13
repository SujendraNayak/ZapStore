import { useState } from 'react'
import './App.css'
import HomePage from "./components/HomePage";
import Navbar from './components/Navbar'; // ✅ Import Navbar

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar /> {/* ✅ Navbar placed outside Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wishlist" element={<h2>Wishlist Page</h2>} />
        <Route path="/cart" element={<h2>Cart Page</h2>} />
        <Route path="/contact" element={<h2>Contact Page</h2>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
