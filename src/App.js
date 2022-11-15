import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import AppRoutes from "./Components/AppRoutes";
import { CartContext, LoginContext } from "./Contexts/Contexts";

function App() {
  const [cartTotal, setCartTotal] = useState();
  const [validationRes, setValidationRes] = useState('fail');
  
  return (
    <div>
      <LoginContext.Provider value={ {validationRes, setValidationRes} }>
        <CartContext.Provider value={ {cartTotal, setCartTotal } }>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </CartContext.Provider>
      </LoginContext.Provider>
    </div>
  );
}

export default App;