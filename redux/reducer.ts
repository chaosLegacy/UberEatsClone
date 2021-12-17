import { localRestaurants } from './constants';
import { createSlice } from "@reduxjs/toolkit";
import { State } from "../types";


// Redux store starting state
const initialState: State = {
    error: '',
    activeHeaderTab: '',
    searchCity: '',
    user: null,
    location: null,
    restaurants: localRestaurants,
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
        setRestaurants: (state, action) => {
            state.restaurants = action.payload
        },
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