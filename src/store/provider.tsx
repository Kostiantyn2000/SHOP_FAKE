"use client";
import { Provider } from "react-redux";
import store from "../store";
import { FC } from "react";

interface IProps {
  children: any;
}

export const ProviderRedux: FC<IProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
