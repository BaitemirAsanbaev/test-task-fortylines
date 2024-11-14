import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategory, IProduct } from "../../models/Product";
import { fetchProducts, toggleFav } from "../services/productService";
import { ErrorMessage } from "../../models/Error";
import { fetchCategories } from "../services/categoryService";

type ProductState = {
  products: IProduct[];
  categories: ICategory[];
  error: ErrorMessage | null;
  loading: boolean;
};

const initialState: ProductState = {
  products: [],
  categories: [],
  error: null,
  loading: false,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterByCategory: (state: ProductState, action: PayloadAction<string>) => {
      const allProducts = JSON.parse(localStorage.getItem("products") ?? "[]");

      if (action.payload === "*") {
        state.products = allProducts;
        return;
      }
      state.products = allProducts.filter(
        (p: IProduct) => p.category.name === action.payload
      );
    },
    search: (state: ProductState, action: PayloadAction<string>) => {
      const searchTerm = action.payload.toLowerCase();
      const allProducts = JSON.parse(localStorage.getItem("products") ?? "[]");
      state.products = allProducts.filter(
        (p: IProduct) =>
          p.name.toLowerCase().includes(searchTerm) ||
          p.description.toLowerCase().includes(searchTerm)
      );
    },
    favsOnly: (
      state: ProductState,
      action: PayloadAction<boolean | string>
    ) => {
      const allProducts = JSON.parse(localStorage.getItem("products") ?? "[]");

      if (action.payload === "*") {
        state.products = allProducts;
        return;
      }
      if (action.payload) {
        state.products = allProducts.filter((p: IProduct) => p.isFav);
      } else {
        state.products = allProducts.filter((p: IProduct) => !p.isFav);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state: ProductState) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state: ProductState, action: PayloadAction<IProduct[]>) => {
          state.loading = false;
          state.products =
            action.payload ||
            JSON.parse(localStorage.getItem("products") || "[]");
        }
      )
      .addCase(fetchProducts.rejected, (state: ProductState, action) => {
        state.loading = false;
        state.error = action.payload || {
          message: "An unknown error occurred",
        };
      })
      //toggle favourite
      .addCase(toggleFav.pending, (state: ProductState) => {
        state.loading = true;
      })
      .addCase(
        toggleFav.fulfilled,
        (state: ProductState, action: PayloadAction<number>) => {
          state.loading = false;
          const product = state.products.find((p) => p.id === action.payload);
          if (product) {
            product.isFav = !product.isFav;
          }
          localStorage.setItem("products", JSON.stringify(state.products));
        }
      )
      .addCase(toggleFav.rejected, (state: ProductState, action) => {
        state.loading = false;
        state.error = action.payload || {
          message: "Failed to toggle favorite status",
        };
      })
      //categories
      .addCase(fetchCategories.pending, (state: ProductState) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCategories.fulfilled,
        (state: ProductState, action: PayloadAction<ICategory[]>) => {
          state.loading = false;
          state.categories =
            action.payload ||
            JSON.parse(localStorage.getItem("categories") || "[]");
        }
      )
      .addCase(fetchCategories.rejected, (state: ProductState, action) => {
        state.loading = false;
        state.error = action.payload || {
          message: "An unknown error occurred",
        };
      });
  },
});

export const productsReducer = productSlice.reducer;

export const {
  favsOnly,
  filterByCategory,
  search,
} = productSlice.actions;
