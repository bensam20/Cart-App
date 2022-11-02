import axios from "axios";

// let totalCartItems = 0;

export async function TotalCartItems(){
    return await axios.get("http://localhost:7000/itemsInCart/1")
          .then(res => res.data)
}