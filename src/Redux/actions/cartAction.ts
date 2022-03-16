import { ActionType } from "Redux/actionTypes"
import { IProduct } from "types"

export const addToCart = (payload: IProduct) =>{
    return {
        type: ActionType.ADD_TO_CART,
        payload
    }
}

export const removeFromCart = (payload: string) =>{
    return { 
        type: ActionType.REMOVE_FROM_CART,
        payload
    }
}
export const clearCart = (payload: IProduct) =>{
    return {
        type: ActionType.CLEAR_CART,
        payload
    }
}
export type cartAction =
    ReturnType<typeof addToCart>
    | ReturnType<typeof removeFromCart>
    | ReturnType<typeof clearCart>