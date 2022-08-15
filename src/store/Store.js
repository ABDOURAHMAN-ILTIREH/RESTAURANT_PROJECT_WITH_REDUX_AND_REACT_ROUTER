import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../../src/components/features/cart/CartSlice'

export const store = configureStore({
    reducer:{
        cart: cartReducer,
    }
})
