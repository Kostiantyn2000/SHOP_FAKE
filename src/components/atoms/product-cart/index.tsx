import { IProduct, IProductCart } from "@/types";
import { FC } from "react";

interface IProps {
  image: string;
  title: string;
  price: string;
  quantity: number;
}

export const ProductCart: FC<IProps> = ({ image, title, price, quantity }) => {
  return (
    <div>
      <img width={100} height={100} src={image} alt="logo-product" />
      <p>{title}</p>
      <p>Price: ${price}</p>
      <p>Quantity: {quantity}</p>
    </div>
  );
};
