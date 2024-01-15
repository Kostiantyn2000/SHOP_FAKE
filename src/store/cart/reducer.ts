import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart } from "./namspase";
import { message } from "antd";

const initialState: Cart.ICartState = {
  productsCart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    onAddProductCart(state, action: PayloadAction<Cart.ICartRes>) {
      const { id } = action.payload;
      const existingItemIndex = state.productsCart.findIndex(
        (item) => item.id === id
      );

      if (existingItemIndex !== -1) {
        state.productsCart[existingItemIndex].quantity += 1;
        message.success("Product return  add success");
      } else {
        state.productsCart.push(action.payload);
        message.success("Product add success");
      }
    },
    onRemoveProductCart(state, action: PayloadAction<number>) {
      const productsCartNew = state.productsCart.filter(
        (item) => item.id !== action.payload
      );
      state.productsCart = productsCartNew;
    },
    onDecreaseQuantity(state, action: PayloadAction<number>) {
      const productCartNew = state.productsCart.map((item) =>
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      state.productsCart = productCartNew;
    },
    onIncreaseQuantity(state, action: PayloadAction<number>) {
      const productCartNew = state.productsCart.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      state.productsCart = productCartNew;
    },
  },
});

export const cartActions = { ...cartSlice.actions };
export const cartReducer = cartSlice.reducer;
