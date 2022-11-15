import React, { useContext,useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import "./CartList.css";
import { CartContext } from "../../Contexts/Contexts";
import { getItemList, incrementCartNum, decrementCartNum, updateTotalNum, deleteCartNum } from '../../Services/getData';

function CartList() {

    const [items, setItems] = useState([]);
    const cartContext = useContext(CartContext);

    const getCartItems = () => {
      getItemList().then( data => setItems([...data?.filter((item) => item.cart === true)]) );
    }

    useEffect(() => {
      getCartItems();
    }, []);

    const incrementCart = async (item) => {
      cartContext.setCartTotal(cartContext.cartTotal + 1);
      await updateTotalNum(cartContext.cartTotal + 1).then( res => getCartItems() );
      await incrementCartNum(item).then( res => getCartItems() );
    }

    const decrementCart = async (item) => {
      cartContext.setCartTotal(cartContext.cartTotal - 1);
      await updateTotalNum(cartContext.cartTotal - 1).then( res => getCartItems() );
      await decrementCartNum(item).then( res => getCartItems() );
    }

    const deleteCart = async (item) => {
      cartContext.setCartTotal(cartContext.cartTotal - item.numOfCarted);
      await updateTotalNum(cartContext.cartTotal - item.numOfCarted).then( res => getCartItems() );
      await deleteCartNum(item).then( res => getCartItems() );
    }

  return (
    <div>

      <div className='cart-item-container'>
          {items && items.map((item) => (
                <div className="cartCard" key={item.id}>
                  <img className='cardImg' alt="Card" src={item.image}/>
                  <div className="item-name">
                    {item.name}
                  </div>
                  <div className="change-number">
                    <Button label="-" onClick={() => decrementCart(item) } className="p-button-raised p-button-text p-button-plain in-cartlist" disabled={item.numOfCarted===1}></Button>
                    <Button label={String(item.numOfCarted)} className="cart-count" disabled={ true }></Button>
                    <Button label="+" onClick={() => incrementCart(item) } className="p-button-raised p-button-text p-button-plain in-cartlist"></Button>
                    <Button icon="pi pi-trash" onClick={() => deleteCart(item) } className="p-button-raised p-button-outlined p-button-danger in-cartlist"></Button>
                  </div>
                </div>
          ))
          }

      </div>
      {
          !items.length && <center><Image imageClassName='empty-image' src='/images/cart_empty.png' alt="Image Text" /></center>
      }

    </div>
  )
}

export default CartList