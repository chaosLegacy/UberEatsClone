import { createSlice } from "@reduxjs/toolkit";
import { State } from "../types";


// Redux store starting state
const initialState: State = {
    error: '',
    user: null,
    cart: {
        selectedItems: []
    }
}

// Actions are generated from the methods inside the reducers property
export const { actions, reducer } = createSlice({
    name: 'store',
    initialState,
    reducers: {
        set: (state, action) => ({ ...state, ...action.payload }),
        addToCart: (state, action) => {
            state.cart = {
                selectedItems: [
                    ...state.cart.selectedItems,
                    action.payload
                ]
            }

        },
        removeFromCart: (state, action) => {
            state.cart = {
                selectedItems: [
                    ...state.cart.selectedItems.filter(item => item.title !== action.payload.title)
                ]
            }
        }
    }
});