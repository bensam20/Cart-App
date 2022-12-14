import axios from "axios";
import { Links } from "../Constants/Links";

export async function getItemList(){
    return await axios.get(Links.getItemList)
    .then(res =>res.data)
}

export async function getCartTotal() {
    return await axios.get(Links.setTotal)
      .then( res => res.data)
}

export async function updateTotalNum(updateNum){
    const updateData = JSON.stringify({"totalItemsInCart":updateNum})
    return await axios.put(Links.setTotal, {"totalItemsInCart":updateNum})
        .then( res => res )
}

export async function incrementCartNum(item){
    const updateData = JSON.stringify(
        {
            ...item,
            cart:true,
            numOfCarted:item.numOfCarted + 1
        }
    )
    return await axios.put(Links.changeCartNum(item), {
        ...item,
        "cart":true,
        "numOfCarted":item.numOfCarted + 1
    })
}

export async function decrementCartNum(item){
    const updateData = JSON.stringify(
        {
            ...item,
            "cart":true,
            "numOfCarted":item.numOfCarted - 1
        }
    )
    return await axios.put(Links.changeCartNum(item), {
        ...item,
        "cart":true,
        "numOfCarted":item.numOfCarted - 1
    })
}

export async function deleteCartNum(item){
    const updateData = JSON.stringify(
        {
            ...item,
            "cart":true,
            "numOfCarted":0
        }
    )
    return await axios.put(Links.changeCartNum(item), {
        ...item,
        "cart":false,
        "numOfCarted":0
    })
}

export async function authenticateUser(username, password) {
    let loginRes = '';
    await axios.get(Links.checkUser)
      .then( res => res.data)
      .then( data => {
        if(data.username === username && data.password === password){
            loginRes = 'success';
        }else{
            loginRes = 'failed';
        }
      });
    return loginRes;
}
