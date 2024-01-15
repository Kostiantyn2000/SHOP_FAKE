import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "./namspase";

export const fetchGetAllProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products?limit=6");
      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchGetProduct = createAsyncThunk(
  "product/fetchProduct",
  async (id: number) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);

export const fetchGetProductCategories = createAsyncThunk(
  "productCategories/fetchProductCategories",
  async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchGetProductsCategory = createAsyncThunk(
  "productsCategory/fetchProductsCategory",
  async (category: string) => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState: Product.IProductState = {
  products: [],
  categories: [],
  product: {
    id: 0,
    title: "",
    price: "",
    category: "",
    description: "",
    image: "",
  },
  loading: false,
  error: "",
  categoryActive: "",
  productsCategory: [],
  filterProductValue: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    onUpdateCategory(state, action: PayloadAction<string>) {
      state.categoryActive = action.payload;
    },
    onAddFilterProductValue(state, action: PayloadAction<string>) {
      state.filterProductValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchGetAllProducts.fulfilled,
        (state, action: PayloadAction<Product.IProductRes[]>) => {
          state.loading = false;
          state.products = action.payload;
        }
      )
      .addCase(fetchGetAllProducts.rejected, (state, action) => {
        state.loading = true;
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(
        fetchGetProduct.fulfilled,
        (state, action: PayloadAction<Product.IProductRes>) => {
          state.loading = false;
          state.product = action.payload;
        }
      )
      .addCase(fetchGetProduct.rejected, (state, action) => {
        state.loading = true;
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(
        fetchGetProductCategories.fulfilled,
        (state, action: PayloadAction<string[]>) => {
          console.log("Auction", action.payload);

          state.loading = false;
          state.categories = action.payload;
        }
      )
      .addCase(
        fetchGetProductsCategory.fulfilled,
        (state, action: PayloadAction<Product.IProductRes[]>) => {
          state.loading = false;
          state.productsCategory = action.payload;
        }
      )
      .addCase(fetchGetProductsCategory.rejected, (state, action) => {
        state.loading = true;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const productsActions = { ...productsSlice.actions };
export const productsReducer = productsSlice.reducer;
