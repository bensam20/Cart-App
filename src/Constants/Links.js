export const Links = {
    "getItemList": "http://localhost:7000/items",
    "setTotal": "http://localhost:7000/itemsInCart/1",
    changeCartNum: (item) => `http://localhost:7000/items/${item.id}`
}