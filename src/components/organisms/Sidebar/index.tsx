"use client";
import { SearchComponent } from "@/components";
import { AppDispatch, useAppSelector } from "@/store";
import { fetchGetProductCategories, productsActions } from "@/store/products";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./style.css";

export const Sidebar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const categories = useAppSelector((state) => state.products.categories);
  const filterProductValue = useAppSelector(
    (state) => state.products.filterProductValue
  );

  console.log(filterProductValue);

  useEffect(() => {
    dispatch(fetchGetProductCategories());
  }, []);

  return (
    <div style={{ width: 150, background: "gray", padding: 20 }}>
      <SearchComponent
        value={filterProductValue}
        onChange={(value) =>
          dispatch(productsActions.onAddFilterProductValue(value))
        }
      />
      <ul className="category-wrapper">
        {categories.map((it, index) => {
          return (
            <li
              className="category-item"
              onClick={() => dispatch(productsActions.onUpdateCategory(it))}
              key={`${it}-${index}`}
            >
              {it}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
