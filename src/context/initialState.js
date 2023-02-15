import { FetchUser } from '../utils/fetchLocalStorage'
const userInfo = FetchUser()

export const initialState ={
    user:userInfo,
    foodItems:null,
    showCart:false
}