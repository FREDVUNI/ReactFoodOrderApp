import { FetchCart, FetchUser } from '../utils/fetchLocalStorage'
const userInfo = FetchUser()
const cartInfo = FetchCart()

export const initialState ={
    user:userInfo,
    foodItems:null,
    showCart:false,
    cartItems:cartInfo
}