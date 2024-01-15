"use client";
import React from "react";
import { Drawer, Button, Space } from "antd";
import { AppDispatch, useAppSelector } from "@/store";
import { cartActions } from "@/store/cart";
import { useDispatch } from "react-redux";
import { ProductCart } from "@/components";
import Link from "next/link";
import { Routers } from "@/types/enums";

interface CartProps {
  visible: boolean;
  onClose: () => void;
}

export const Cart: React.FC<CartProps> = ({ visible, onClose }) => {
  const dispatch = useDispatch<AppDispatch>();

  const productsCart = useAppSelector((state) => state.cart.productsCart);

  return (
    <Drawer
      title="Cart"
      placement="right"
      closable={false}
      onClose={onClose}
      open={visible}
      width={400}
    >
      <Space direction="vertical">
        {productsCart.map((item) => (
          <div key={item.id}>
            <ProductCart
              title={item.title}
              image={item.image}
              quantity={item.quantity}
              price={item.price}
            />
            <Button
              style={{ marginTop: 15 }}
              type="primary"
              onClick={() => dispatch(cartActions.onIncreaseQuantity(item.id))}
            >
              +
            </Button>
            <Button
              style={{ marginTop: 15, marginLeft: 15, marginRight: 15 }}
              type="primary"
              onClick={() => dispatch(cartActions.onDecreaseQuantity(item.id))}
            >
              -
            </Button>
            <Button
              style={{ marginTop: 15 }}
              type="primary"
              onClick={() => dispatch(cartActions.onRemoveProductCart(item.id))}
            >
              Remove
            </Button>
          </div>
        ))}
      </Space>
      <Link href={`${Routers.Order}`}>
        <Button onClick={onClose} style={{ marginTop: 15 }} type="primary">
          Make an order
        </Button>
      </Link>
    </Drawer>
  );
};
