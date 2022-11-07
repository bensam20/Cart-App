import React, { useContext, createContext } from "react";
import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/CartPage/Cart";
import { useState } from "react";

export const CartContext = createContext()

function App() {
  const [cartTotal, setCartTotal] = useState()

  return (
    <div className="App">
      <CartContext.Provider value={ {cartTotal, setCartTotal } }>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;
