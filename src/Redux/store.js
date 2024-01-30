import { configureStore } from "@reduxjs/toolkit";
import { productsAPI } from "../api/ProductsApi";
import cartReducer from "./cartSlice";
import wishlistReducer from "./wishListSlice"

export const store = configureStore({
    reducer:{
        [productsAPI.reducerPath] : productsAPI.reducer,
         cart : cartReducer,
         wishlist: wishlistReducer,
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(productsAPI.middleware)
})