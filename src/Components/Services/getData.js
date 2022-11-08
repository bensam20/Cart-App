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
    const updateData = JSON.stringify({"totalItemsInCart": updateNum})
    return await axios.put(Links.setTotal, updateData)
        .then( res => res )
}

export async function incrementCartNum(item){
    const updateData = JSON.stringify(
        {
            ...item,
            "cart":true,
            "numOfCarted":item.numOfCarted + 1
        }
    )
    return await axios.put(Links.changeCartNum(item), updateData)
}

export async function decrementCartNum(item){
    const updateData = JSON.stringify(
        {
            ...item,
            "cart":true,
            "numOfCarted":item.numOfCarted - 1
        }
    )
    return await axios.put(Links.changeCartNum(item), updateData)
}

export async function deleteCartNum(item){
    const updateData = JSON.stringify(
        {
            ...item,
            "cart":true,
            "numOfCarted":0
        }
    )
    return await axios.put(Links.changeCartNum(item), updateData)
}
