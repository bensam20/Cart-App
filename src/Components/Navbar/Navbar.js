import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import "./Navbar.css"
import { TotalCartItems } from "../Services/TotalCartItems";


function Navbar(props) {
    const navigate = useNavigate();
    const items = [
        {
           label:'Shopzy',
           icon:'pi pi-shopping-bag',
           command: () => navigate("/")
        },
        
     ];

     const [totalCartItems, setTotalCartItems] = useState();

     // TotalCartItems().then(res.data)
     useEffect(() => {
       TotalCartItems().then(data => {setTotalCartItems(data); console.log(data)})
     }, [])

     const end = <a className="cartLink" href="http://localhost:3000/cart"><Button icon="pi pi-shopping-cart">{totalCartItems?.totalItemsInCart}</Button></a>

  return (
    <div>
        <Menubar model={items} end={end} />        
    </div>
  )
}

export default Navbar