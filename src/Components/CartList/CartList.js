import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import "./CartList.css"

function CartList() {

    const [items, setItems] = useState([])
    const [itemsInCart, setItemsIncart] = useState(0)

    const getItems = async () => {
      await axios.get("http://localhost:7000/items")
        .then(res => {
          setItems([...res.data?.filter((item) => item.cart == true)])
        })
    }

    useEffect(() => {
      getItems();
    }, [])

  return (
    <div className='cart-item-container'>
        {items.map((item) => (
            // <Card key={item.id} className='itemCard' title={item.name} header={<img className='cardImg' alt="Card" src={item.image}/>} footer={<Button label="Add to Cart"></Button>}>
            // </Card>
              <div className="cartCard" key={item.id}>
                <img className='cardImg' alt="Card" src={item.image}/>
                <div className="item-name">
                  {item.name}
                </div>
                <div className="change-number">
                  <Button label="-" className="p-button-raised p-button-text p-button-plain"></Button>
                  <Button label={item.numOfCarted} className="cart-count" disabled="true"></Button>
                  <Button label="+" className="p-button-raised p-button-text p-button-plain"></Button>
                  <Button icon="pi pi-trash" className="p-button-raised p-button-outlined p-button-danger"></Button>
                </div>
              </div>
        ))
        }
    </div>
  )
}

export default CartList