import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import "./Navbar.css"
import { TotalCartItems } from "../Services/TotalCartItems";
import { CartContext } from '../../App';


function Navbar() {
    const cartContext = useContext(CartContext);
    const navigate = useNavigate();
    const items = [
        {
           label:'Shopzy',
           icon:'pi pi-shopping-bag',
           command: () => navigate("/")
        },
        
     ];
     const end = <a className="cartLink" onClick={ () => navigate("/cart") }><Button icon="pi pi-shopping-cart">{cartContext.cartTotal?cartContext.cartTotal:' '}</Button></a>

  return (
    <div>
        <Menubar model={items} end={end} />        
    </div>
  )
}

export default Navbar