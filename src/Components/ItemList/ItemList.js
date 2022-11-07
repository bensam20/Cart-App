import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './ItemList.css';
import { CartContext } from '../../App';

function ItemList() {
    const [items, setItems] = useState([]);
    const cartContext = useContext(CartContext);

    const getItems = async () => {
      await axios.get("http://localhost:7000/items")
      .then(res => {
          setItems(res.data);
        });
      
      await axios.get("http://localhost:7000/itemsInCart/1")
      .then(res => {
        cartContext.setCartTotal(res.data.totalItemsInCart);
        })
    }

    useEffect(() => {
      getItems();
    }, [])

    const updateCartNumber = async (updateNum) => {
      await axios.put("http://localhost:7000/itemsInCart/1", {
        "totalItemsInCart": updateNum
      }).then( res => {
        cartContext.setCartTotal(updateNum);
        getItems();
      })
    }

    const addToCart = async (item) => {
      await axios.put("http://localhost:7000/items/"+item.id, {
        ...item,
        "cart":true,
        "numOfCarted":item.numOfCarted + 1
      }).then( res => {
        console.log(res);
        getItems();
        });
      await axios.get("http://localhost:7000/itemsInCart/1")
      .then( res => res.data)
      .then(data => {
        cartContext.setCartTotal(data.totalItemsInCart + 1);
        updateCartNumber(data.totalItemsInCart + 1);;
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

export default ItemList