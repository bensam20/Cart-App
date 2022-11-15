import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoutes from '../routes/PrivateRoutes';
import Cart from './CartPage/Cart';
import Home from './Home/Home';
import Login from './Login/Login';

function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to={'/login'}/>} />
        <Route element={<PrivateRoutes/>}>
          <Route path="/cart" element={<Cart />} />
        </Route>
    </Routes>
  )
}

export default AppRoutes