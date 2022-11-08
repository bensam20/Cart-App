import axios from "axios";
import { Links } from "../../Constants/Links";

export async function getItemList(){
    return await axios.get(Links.getItemList)
    .then(res =>res.data)
}

export async function getCartTotal() {
    return await axios.get(Links.setTotal)
      .then( res => res.data)
}

export async function updateTotalNum(updateNum){
    return await axios.put(Links.setTotal, {
        "totalItemsInCart": updateNum
      }).then( res => res )
}

export async function incrementCartNum(item){
    return await axios.put(Links.changeCartNum(item), {
        ...item,
        "cart":true,
        "numOfCarted":item.numOfCarted + 1
      })
}

export async function decrementCartNum(item){
    return await axios.put(Links.changeCartNum(item), {
        ...item,
        "cart":true,
        "numOfCarted":item.numOfCarted - 1
      })
}

export async function deleteCartNum(item){
    return await axios.put(Links.changeCartNum(item), {
        ...item,
        "cart":false,
        "numOfCarted":0
    })
}
