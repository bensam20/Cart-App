import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import AppRoutes from "./Components/AppRoutes";
import { CartContext } from "./Contexts/Contexts";

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