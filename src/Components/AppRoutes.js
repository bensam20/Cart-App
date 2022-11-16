import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoutes from '../routes/PrivateRoutes';
// import Cart from './CartPage/Cart';
// import Home from './Home/Home';
import Login from './Login/Login';
const LazyHome = React.lazy(() => import('./Home/Home') );
const LazyCart = React.lazy(() => import('./CartPage/Cart'))

function AppRoutes() {
  return (
    <Routes>
        <Route 
          path="/" 
          element={
            <React.Suspense fallback='Loading...'>
              <LazyHome />
            </React.Suspense>} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/home" 
          element={
            <React.Suspense fallback='Loading...'>
              <LazyHome />
            </React.Suspense>} />
        <Route path="*" element={<Navigate to={'/login'}/>} />
        <Route element={<PrivateRoutes/>}>
          <Route 
            path="/cart" 
            element={
              <React.Suspense fallback='Loading...'>
                <LazyCart />
              </React.Suspense>} />
        </Route>
    </Routes>
  )
}

export default AppRoutes