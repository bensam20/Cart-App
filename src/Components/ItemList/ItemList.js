import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './ItemList.css';
import { CartContext, LoginContext } from "../../Contexts/Contexts";
import { getCartTotal, getItemList, incrementCartNum, updateTotalNum } from '../../Services/getData';
import SignInToast from './SignInToast';

function ItemList() {
    const [items, setItems] = useState([]);
    const cartContext = useContext(CartContext);
    const loginContext = useContext(LoginContext);
    const [signInWarning, setSignInWarning] = useState(false);
    
    const getItems = () => {
      getItemList().then( data => setItems(data) )
      getCartTotal().then( data => cartContext.setCartTotal(data.totalItemsInCart) ) 
    }

    useEffect(() => {
      getItems();
    }, [])  

    useEffect( () => {
      const logIn = JSON.parse(localStorage.getItem('isLoggedIn'));
      console.log("Inside useEffect", localStorage);
      console.log(logIn)
      if(logIn){
          loginContext.setValidationRes('success');
      }
    }, []);

    const updateCartNumber = (updateNum) => {
      updateTotalNum(updateNum).then(res => {
        cartContext.setCartTotal(updateNum);
        getItems();
      })
    }

    const addToCart = (item) => {
      if(loginContext.validationRes === 'success'){
        incrementCartNum(item).then(getItems())
        getCartTotal().then(data => {
          cartContext.setCartTotal(data.totalItemsInCart + 1);
          updateCartNumber(data.totalItemsInCart + 1);
        }); 
      } else {
        setSignInWarning(Math.random()+1);
      }
      
    }

    const cartbutton = (item) => {
      if(loginContext.validationRes === 'success'){
        if(item.cart){
          return <Button label="Added to Cart" className="p-button-raised p-button-success p-button-text in-itemlist" disabled={true}/>
        } else {
          return <Button className="p-button-raised p-button-text p-button-plain in-itemlist" onClick={ ()=>addToCart(item) } label="Add to Cart" ></Button>
        }
      } else {
        return <Button className="p-button-raised p-button-text p-button-plain in-itemlist" onClick={ ()=>addToCart(item) } label="Add to Cart" ></Button>
      }
    }

  return (
    <div>
      <div className='item-container'>
          {items.map((item, index) => (
            <Card key={index} className='itemCard' title={item.name} header={<img className='cardImg' alt="Card" src={item.image}/>} footer={ () => cartbutton(item) }>
            </Card>
          ))
          }
      </div>
      {signInWarning?<SignInToast/>:''}
    </div>
  )
}

export default ItemList;