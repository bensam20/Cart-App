import React, { useContext,useEffect, useState } from 'react';
import axios from "axios";
import { Button } from 'primereact/button';
import "./CartList.css";
import { CartContext } from '../../App';

function CartList() {

    const [items, setItems] = useState([]);
    const cartContext = useContext(CartContext);

    const getCartItems = async () => {
      await axios.get("http://localhost:7000/items")
        .then(res => {
          setItems([...res.data?.filter((item) => item.cart === true)])
        })
    }

    useEffect(() => {
      getCartItems();
    }, [])

    const incrementCart = async (item) => {
      cartContext.setCartTotal(cartContext.cartTotal + 1);
      await axios.put("http://localhost:7000/itemsInCart/1", {
        "totalItemsInCart": cartContext.cartTotal + 1
      }).then( res => {
        getCartItems();
      })
      await axios.put("http://localhost:7000/items/"+item.id, {
        ...item,
        "numOfCarted":item.numOfCarted + 1
      }).then( res => {
        getCartItems();
        })
    }

    const decrementCart = async (item) => {
      cartContext.setCartTotal(cartContext.cartTotal - 1);
      await axios.put("http://localhost:7000/itemsInCart/1", {
        "totalItemsInCart": cartContext.cartTotal - 1
      }).then( res => {
        getCartItems();
      })
      await axios.put("http://localhost:7000/items/"+item.id, {
        ...item,
        "numOfCarted":item.numOfCarted - 1
      }).then( res => {
        getCartItems();
        })
    }

    const deleteCart = async (item) => {
      cartContext.setCartTotal(cartContext.cartTotal - item.numOfCarted);
      await axios.put("http://localhost:7000/itemsInCart/1", {
        "totalItemsInCart": cartContext.cartTotal - item.numOfCarted
      }).then( res => {
        getCartItems();
      })
      await axios.put("http://localhost:7000/items/"+item.id, {
        ...item,
        "cart":false,
        "numOfCarted":0
      }).then( res => {
        getCartItems(); 
        })
    }

  return (
    <div className='cart-item-container'>
        {items.map((item) => (
              <div className="cartCard" key={item.id}>
                <img className='cardImg' alt="Card" src={item.image}/>
                <div className="item-name">
                  {item.name}
                </div>
                <div className="change-number">
                  <Button label="-" onClick={() => decrementCart(item) } className="p-button-raised p-button-text p-button-plain in-cartlist" disabled={item.numOfCarted===1}></Button>
                  <Button label={String(item.numOfCarted)} className="cart-count" disabled="true"></Button>
                  <Button label="+" onClick={() => incrementCart(item) } className="p-button-raised p-button-text p-button-plain in-cartlist"></Button>
                  <Button icon="pi pi-trash" onClick={() => deleteCart(item) } className="p-button-raised p-button-outlined p-button-danger in-cartlist"></Button>
                </div>
              </div>
        ))
        }
    </div>
  )
}

export default CartList