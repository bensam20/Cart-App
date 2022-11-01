import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './ItemList.css';

function ItemList() {
    const [items, setItems] = useState([])
    const [itemsInCart, setItemsIncart] = useState(0)

    const getItems = async () => {
      await axios.get("http://localhost:7000/items")
        .then(res => {
          setItems(res.data)
        })
    }

    useEffect(() => {
      getItems();
    }, [])

    const addToCart = async (item) => {
      setItemsIncart(itemsInCart + 1);
      let num= item.numOfCarted+1
      console.log(num)
      await axios.put("http://localhost:7000/items/"+item.id, {
        ...item,
        "cart":true,
        "numOfCarted":item.numOfCarted + 1
      }).then( res => {
        console.log(res);
        getItems();
        })
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