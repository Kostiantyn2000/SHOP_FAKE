"use client";
import { Button, Rate } from "antd";
import styles from "./style.module.css";
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/store";
import { fetchGetProduct } from "@/store/products";
import { cartActions } from "@/store/cart";

interface IProps {
  id: number;
}

export const ProductDetailInfo: FC<IProps> = ({ id }) => {
  const dispatch = useDispatch<AppDispatch>();
  const product = useAppSelector((state) => state.products.product);

  useEffect(() => {
    dispatch(fetchGetProduct(id));
  }, []);

  return (
    <div style={{ margin: 30 }}>
      <h2>{product.title}</h2>
      <h3 style={{ marginTop: 15 }}>{product.category}</h3>
      <img
        style={{ marginTop: 15 }}
        width={300}
        height={300}
        src={product.image}
        alt="product-logo"
      />
      <p style={{ marginTop: 15 }}>{product.description}</p>
      <span>{product.price}$</span>
      <div className={styles.wrapper}>
        <Button
          onClick={() =>
            dispatch(cartActions.onAddProductCart({ ...product, quantity: 1 }))
          }
          style={{ width: 300, marginTop: 15, marginBottom: 15 }}
          type="primary"
        >
          Buy
        </Button>
        <Rate />
      </div>
    </div>
  );
};
