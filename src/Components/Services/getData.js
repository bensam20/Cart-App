import axios from "axios";

export async function getItemList(){
    return await axios.get("http://localhost:7000/items")
    .then(res =>res.data)
}

export async function getCartList(){
    return await axios.get("http://localhost:7000/itemsInCart/1")
    .then(res => res.data )
}

export async function updateTotalNum(updateNum){
    return await axios.put("http://localhost:7000/itemsInCart/1", {
        "totalItemsInCart": updateNum
      }).then( res => res )
}

export async function getCartTotal() {
    return await axios.get("http://localhost:7000/itemsInCart/1")
      .then( res => res.data)
}

export async function incrementCartNum(item){
    return await axios.put(`http://localhost:7000/items/${item.id}`, {
        ...item,
        "cart":true,
        "numOfCarted":item.numOfCarted + 1
      })
}

export async function decrementCartNum(item){
    return await axios.put(`http://localhost:7000/items/${item.id}`, {
        ...item,
        "cart":true,
        "numOfCarted":item.numOfCarted - 1
      })
}

export async function deleteCartNum(item){
    return await axios.put(`http://localhost:7000/items/${item.id}`, {
        ...item,
        "cart":false,
        "numOfCarted":0
    })
}
