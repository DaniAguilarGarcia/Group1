import { ADD_TO_CART,REMOVE_FROM_CART,SUBTRACT_Q,ADD_Q } from './actionTypes'

//TEMPORARY PLACEHOLDER BOOK INFO


const cartReducer= (state = initialState,action)=>{
    if (action.type === ADD_TO_CART){
        let addedItem = state.items.find(item=> item.id === action.id)
        let itemExists = state.addedItems.find(item=> action.id === item.id)
        if (itemExists){
            //increase quantity by 1
            addedItem.quantity += 1
            return{
                ...state,
                total: state.total + addedItem.price
            }
        }
        else{
            //add the first instance of item into cart
            addedItem.quantity = 1;
            let newTotal = state.total + addedItem.price
            return{
                ...state,
                addedItems: [...state.addedItems,addedItem],
                total: newTotal
            }
        }
    }

    if (action.type === REMOVE_FROM_CART){
        let itemToRemove = state.addedItems.find(item=>action.id === item.id)
        let new_items = state.addedItems.filter(item=>action.id !== item.id)
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
        console.log(itemToRemove)

        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }

    if(action.type === ADD_Q){
        let addedItem = state.items.find(item=> item.id === action.id)
        addedItem.quantity += 1
        let newTotal = state.total + addedItem.price

        return{
            ...state,
            total:newTotal
        }
    }

    if(action.type === SUBTRACT_Q){
        let addedItem = state.items.find(item=> item.id === action.id)
        if(addedItem.quantity === 1){
            //remove item from cart
            let new_items = state.addedItems.filter(item=> item.id !== action.id)
            let newTotal = state.total - addedItem.price

            return{
                ...state,
                addedItem: new_items,
                total: newTotal
            }

        }
        else{
            //subtract quantity by 1
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price

            return{
                ...state,
                total: newTotal
            }
        }
    }
    else{
        return state
    }

}

export default cartReducer
