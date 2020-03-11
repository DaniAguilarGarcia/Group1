import { ADD_TO_CART,REMOVE_FROM_CART,SUBTRACT_Q,ADD_Q } from './actionTypes'

//initial add to cart
export const addToCart = (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}

//when quantity hits 0 remove from cart
export const removeFromCart=(id)=>{
    return{
        type: REMOVE_FROM_CART,
        id
    }
}

//subtract quantity
export const subtractQ=(id)=>{
    return{
        type: SUBTRACT_Q,
        id
    }
}

//add quantity
export const addQ=(id)=>{
    return{
        type: ADD_Q,
        id
    }
}