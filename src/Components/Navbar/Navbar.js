import React from "react";
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';


function Navbar() {

    const items = [
        {
           label:'Shopzy',
           icon:'pi pi-shopping-bag',
           
        },
        
     ];

     const end = <Button icon="pi pi-shopping-cart"/>

  return (
    <div>
        <Menubar model={items} end={end} />
    </div>
  )
}

export default Navbar