import React from "react";
import { useNavigate } from "react-router-dom";
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import "./Navbar.css"


function Navbar() {
    const navigate = useNavigate();

    const items = [
        {
           label:'Shopzy',
           icon:'pi pi-shopping-bag',
           command: () => navigate("/")
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