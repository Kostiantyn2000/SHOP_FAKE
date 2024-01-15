"use client";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import { Button, List, Space } from "antd";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/store";
import {
  fetchGetAllProducts,
  fetchGetProductsCategory,
  productsActions,
} from "@/store/products";
import Link from "next/link";
import { Routers } from "@/types/enums";
import { IProduct } from "@/types";
import { cartActions } from "@/store/cart";

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export const ProductList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useAppSelector((state) => state.products.products);
  const categoryActive = useAppSelector(
    (state) => state.products.categoryActive
  );
  const productsCategory = useAppSelector(
    (state) => state.products.productsCategory
  );
  const filterProductValue = useAppSelector(
    (state) => state.products.filterProductValue
  );

  useEffect(() => {
    categoryActive
      ? dispatch(fetchGetProductsCategory(categoryActive))
      : dispatch(fetchGetAllProducts());
    categoryActive && dispatch(productsActions.onAddFilterProductValue(""));
  }, [categoryActive]);

  const productsNew: IProduct[] = categoryActive ? productsCategory : products;
  const productsFilter = productsNew.filter((it) =>
    it.title
      .toLowerCase()
      .trim()
      .includes(filterProductValue.toLowerCase().trim())
  );

  return (
    <List
      style={{ width: "100%" }}
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 3,
      }}
      dataSource={productsFilter}
      renderItem={(item) => (
        <List.Item
          key={item.title}
          actions={[
            <IconText
              icon={StarOutlined}
              text="156"
              key="list-vertical-star-o"
            />,
            <IconText
              icon={LikeOutlined}
              text="156"
              key="list-vertical-like-o"
            />,
            <IconText
              icon={MessageOutlined}
              text="2"
              key="list-vertical-message"
            />,
          ]}
          extra={<img width={272} alt="logo" src={item.image} />}
        >
          <List.Item.Meta
            style={{ marginRight: 50 }}
            title={
              <Link href={`${Routers.ProductDetail}/${item.id}`}>
                {item.title}
              </Link>
            }
            description={item.description}
          />
          {item.price}$
          <br />
          <Button
            onClick={() =>
              dispatch(cartActions.onAddProductCart({ ...item, quantity: 1 }))
            }
            style={{ width: 300, marginTop: 15 }}
            type="primary"
          >
            Buy
          </Button>
        </List.Item>
      )}
    />
  );
};
