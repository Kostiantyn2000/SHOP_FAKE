import { IProduct } from "./../../types/interfaces/product";

export namespace Product {
  export interface IProductRes extends IProduct {}
  export interface IProductState {
    loading: boolean;
    error: string;
    products: IProductRes[];
    product: IProductRes;
    categories: string[];
    categoryActive: string;
    productsCategory: IProductRes[];
    filterProductValue: string;
  }
}
