import React from "react";
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import "./Navbar.css"


function Navbar() {

    const items = [
        {
           label:'Shopzy',
           icon:'pi pi-shopping-bag',
           
        },
        
     ];

     const end = <a className="cartLink" href="http://localhost:3000/cart"><Button icon="pi pi-shopping-cart"></Button></a>

  return (
    <div>
        <Menubar model={items} end={end} />
    </div>
  )
}

export default Navbar