import React from 'react'
import { Routes, Route } from "react-router-dom";
import Cart from './CartPage/Cart';
import Home from './Home/Home';
import Login from './Login/Login';

function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}

export default AppRoutes