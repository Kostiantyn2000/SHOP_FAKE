"use client";
import { ProductCart } from "@/components";
import { useAppSelector } from "@/store";

export const OrderProductList = () => {
  const productsCart = useAppSelector((state) => state.cart.productsCart);

  return (
    <>
      {productsCart.map((item) => {
        return (
          <ProductCart
            key={item.id}
            title={item.title}
            image={item.image}
            quantity={item.quantity}
            price={item.price}
          />
        );
      })}
    </>
  );
};
