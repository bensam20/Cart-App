import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import "./Navbar.css"
import { CartContext, LoginContext } from "../../Contexts/Contexts";


function Navbar() {
  const cartContext = useContext(CartContext);
  const loginContext = useContext(LoginContext);
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);
  console.log(location.pathname);

  const items = [
    {
      label: 'Shopzy',
      icon: 'pi pi-shopping-bag',
      command: () => navigate("/")
    },

  ];

  
  if(loginContext.validationRes === 'success') {
    var end = (
      <div>
        <a className="cartLink" onClick={() => navigate("/cart")}>
          <Button icon="pi pi-shopping-cart " className="cart-btn">{cartContext.cartTotal ? cartContext.cartTotal : ' '}</Button>
        </a>
        <a className="signinLink" onClick={() => {
          loginContext.setValidationRes("failed");
          navigate("/login");
          }}>
          <Button className="signout-btn p-button-text">Sign Out</Button>
        </a> 
      </div>
    );
  } else {
    if(location.pathname !== '/login'){
      var end = (
        <a className="signinLink" onClick={() => navigate("/login")}>
          <Button className="signin-btn">Sign In</Button>
        </a>
      );
    }
  }

  return (
    <div>
      <Menubar model={items} end={end} />
    </div>
  )
}

export default Navbar