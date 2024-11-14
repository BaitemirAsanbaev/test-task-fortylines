import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../models/Product";

type ProductState = {
    products: IProduct[],
    errors:string|null,
    loading:boolean
};

const initialState: ProductState = {
    products: [],
    errors:null,
    loading:false
};


export const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{

    },
    extraReducers:(build)=>{
        // build.addCase()
    }
})

export const productsReducer = productSlice.reducer
