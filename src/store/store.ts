import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./slices/productSlice";
import { categorysReducer } from "./slices/categoriesReducer";

export const store = configureStore({
    reducer:{
        products: productsReducer,
        categories:categorysReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
