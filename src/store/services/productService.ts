import axios from "axios";
import { IProduct } from "../../models/Product";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ErrorMessage } from "../../models/Error";
import { api } from "../../const/api";

export const fetchProducts = createAsyncThunk<IProduct[], void, { rejectValue: ErrorMessage }>(
    'products/all',
    async () => {
        try{
            const res = await axios.get(`${api}/products`);         
            localStorage.setItem("products", JSON.stringify(res.data))
            return res.data;
        }
        catch (e: unknown) {
            return e as ErrorMessage;
        }
        
    }
);

export const toggleFav = createAsyncThunk<number, number, { rejectValue: ErrorMessage }>(
  "products/toggleFav",
  async (id, { rejectWithValue }) => {
    try {
      await axios.patch(`${api}/products/toggle-fav/${id}`);
      return id;
    } catch (e: any) {
      return rejectWithValue({ message: e.message });
    }
  }
);
