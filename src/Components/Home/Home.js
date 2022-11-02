import React, { createContext, useEffect, useState } from "react";
import { useReducer } from "react";
import ItemList from "../ItemList/ItemList";
import Navbar from "../Navbar/Navbar";
import axios from "axios";

const incrementCart = () => {
 return ({ type:"INCREMENT_CART" })
};

const decrementCart = () => {
  return( { type:"DECREMENT_CART" })
};

export const TotalCartContext = createContext()
// dispatch(decrementCart())
const reducer = (state, action) => {
  switch(action.type) {
    case "INCREMENT_CART":
      return state + 1
    case "DECREMENT_CART":
      return state - 1
    default:
      return state
  }
}

function Home() {

  
  const [totalCartItems, setTotalCartItems] = useState();

  async function getTotalCart() {
    await axios.get("http://localhost:7000/itemsInCart/1")
          .then(res => {
            setTotalCartItems(res.data.totalItemsInCart)
          })
  }

  useEffect(() => {
    getTotalCart();
  }, []);

  const initialState = totalCartItems

  const [itemsInCart, dispatch] = useReducer(reducer, initialState);
  console.log(itemsInCart);

  
  return (
    <TotalCartContext.Provider value={{ cartState: itemsInCart, cartDispatch: dispatch}}>
      <div className="App">
        <Navbar />
        <ItemList />
        {itemsInCart}
        initialState {initialState}
      </div>
    </TotalCartContext.Provider>
  );
}

export default Home;