export const actionType = {
    SET_USER:'SET_USER',
    SET_FOOD_ITEMS:'SET_FOOD_ITEMS',
    SET_SHOW_CART:'SET_SHOW_CART'
}

const reducer = (state,action) =>{
    switch(action.type){
        case actionType.SET_USER:
            return{
                ...state,
                user:action.user
            }

        case actionType.SET_FOOD_ITEMS:
            return{
                ...state,
                foodItems:action.foodItems
            }
        case actionType.SET_SHOW_CART:
            return{
                ...state,
                showCart:action.showCart
            }    
        default:
            return state
               
    }
}

export default reducer