import { IProductCart } from "@/types";

export namespace Cart {
  export interface ICartRes extends IProductCart {}
  export interface ICartState {
    productsCart: IProductCart[];
  }
}
