import { configureStore } from "@reduxjs/toolkit";
import { productsAPI } from "../api/ProductsApi";
import cartReducer from "./cartSlice";

export const store = configureStore({
    reducer:{
        [productsAPI.reducerPath] : productsAPI.reducer,
         cart : cartReducer
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(productsAPI.middleware)
})