import { cartAction } from "Redux/actions/cartAction";
import { ActionType } from "Redux/actionTypes";
import { IProduct } from "./../../types";
export const cartReducer = (state: IProduct[] = [], action: cartAction) =>{
    
    switch(action.type){
        case ActionType.ADD_TO_CART: {
            return [...state, action.payload]
        }
        case ActionType.REMOVE_FROM_CART: {
            const newState = state.filter(item => item.id !== action.payload)
            return newState 
        }

    }
}