import axios from "axios";
import { ICategory} from "../../models/Product";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ErrorMessage } from "../../models/Error";
import { api } from "../../const/api";

export const fetchCategories = createAsyncThunk<ICategory[], void, { rejectValue: ErrorMessage }>(
    'category/all',
    async () => {
        try{
            const res = await axios.get(`${api}/category`);         
            localStorage.setItem("categories", JSON.stringify(res.data))
            return res.data;
        }
        catch (e: unknown) {
            return e as ErrorMessage;
        }
        
    }
);