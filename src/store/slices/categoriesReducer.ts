import { createSlice } from "@reduxjs/toolkit";
import { ICategory } from "../../models/Product";

type CategoryState = {
    categories: ICategory[],
    errors:string|null,
    loading:boolean
};

const initialState: CategoryState = {
    categories: [],
    errors:null,
    loading:false
};


export const categorySlice = createSlice({
    name:"categories",
    initialState,
    reducers:{

    },
    extraReducers:(build)=>{
        // build.addCase()
    }
})

export const categorysReducer = categorySlice.reducer
