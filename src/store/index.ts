import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./products";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { cartReducer } from "./cart";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
