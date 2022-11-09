import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './ItemList.css';
import { CartContext } from '../../App';
import { getCartTotal, getItemList, incrementCartNum, updateTotalNum } from '../../Services/getData';

function ItemList() {
    const [items, setItems] = useState([]);
    const cartContext = useContext(CartContext);
    
    const getItems = () => {
      getItemList().then( data => setItems(data) )
      getCartTotal().then( data => cartContext.setCartTotal(data.totalItemsInCart) ) 
    }

    useEffect(() => {
      getItems();
    }, [])

    const updateCartNumber = (updateNum) => {
      updateTotalNum(updateNum).then(res => {
        cartContext.setCartTotal(updateNum);
        getItems();
      })
    }

    const addToCart = (item) => {
      incrementCartNum(item).then(getItems())
      getCartTotal().then(data => {
        cartContext.setCartTotal(data.totalItemsInCart + 1);
        updateCartNumber(data.totalItemsInCart + 1);
      });
      
    }

    const cartbutton = (item) => {
      if(item.cart){
        return <Button label="Added to Cart" className="p-button-raised p-button-success p-button-text in-itemlist" disabled="true"/>
      }
      else{
        return <Button className="p-button-raised p-button-text p-button-plain in-itemlist" onClick={ ()=>addToCart(item) } label="Add to Cart" ></Button>
      }
    } 
    

  return (
    <div className='item-container'>
        {items.map((item) => (
          <Card key={items.id} className='itemCard' title={item.name} header={<img className='cardImg' alt="Card" src={item.image}/>} footer={ () => cartbutton(item) }>
          </Card>
        ))
        }
    </div>
  )
}

export default ItemList;