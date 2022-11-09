import { baseUrl } from "../Services/baseUrl"
export const Links = {
    "getItemList": baseUrl+"items",
    "setTotal": baseUrl+"itemsInCart/1",
    changeCartNum: (item) => baseUrl+`items/${item.id}`
}