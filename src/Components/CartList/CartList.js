import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Button } from 'primereact/button';
import "./CartList.css"

function CartList() {

    const [items, setItems] = useState([])
    const [itemsInCart, setItemsIncart] = useState(0)

    const getItems = async () => {
      await axios.get("http://localhost:7000/items")
        .then(res => {
          setItems([...res.data?.filter((item) => item.cart === true)])
        })
    }

    useEffect(() => {
      getItems();
    }, [])

    const incrementCart = async (item) => {
      setItemsIncart(itemsInCart + 1);
      await axios.put("http://localhost:7000/items/"+item.id, {
        ...item,
        "numOfCarted":item.numOfCarted + 1
      }).then( res => {
        console.log(res);
        getItems();
        })
    }

    const decrementCart = async (item) => {
      setItemsIncart(itemsInCart - 1);
      await axios.put("http://localhost:7000/items/"+item.id, {
        ...item,
        "numOfCarted":item.numOfCarted - 1
      }).then( res => {
        console.log(res);
        getItems();
        })
    }

    const deleteCart = async (item) => {
      setItemsIncart(itemsInCart - item.numOfCarted);

      setItemsIncart(itemsInCart - 1);
      await axios.put("http://localhost:7000/items/"+item.id, {
        ...item,
        "cart":false,
        "numOfCarted":0
      }).then( res => {
        console.log(res);
        getItems();
        })
    }

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