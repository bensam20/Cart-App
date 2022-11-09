import React, { useContext, createContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import AppRoutes from "./Components/AppRoutes";

export const CartContext = createContext()

function App() {
  const [cartTotal, setCartTotal] = useState()

  return (
    <div>
      <CartContext.Provider value={ {cartTotal, setCartTotal } }>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;