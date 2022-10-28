import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './ItemList.css';

function ItemList() {
    const [items, setItems] = useState([])
    const [itemsInCart, setItemsIncart] = useState(0)

    const getItems = async () => {
      console.log('inside get items')
      await axios.get("http://localhost:7000/items")
        .then(res => {
          console.log(res)
          setItems(res.data)
        })
    }

    console.log('inside itemlist')
    useEffect(() => {
      console.log('inside useeffect')
      getItems();
    }, [])

    const addToCart = () => {
      setItemsIncart(itemsInCart + 1);
      console.log(itemsInCart);
    }
    

  return (
    <div className='item-container'>
        {items.map((item) => (
          <Card className='itemCard' title={item.name} header={<img className='cardImg' alt="Card" src={item.image}/>} footer={<Button onClick={ addToCart } label="Add to Cart"></Button>}>
          </Card>
        ))
        }
    </div>
  )
}

export default ItemList