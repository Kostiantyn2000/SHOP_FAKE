"use client";
import React, { useEffect, useRef, useState } from "react";
import { Input } from "antd";

interface IProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchComponent: React.FC<IProps> = ({ value, onChange }) => {
  const [input, setInput] = useState("");
  const timmerRef = useRef<any>(null);

  useEffect(() => {
    setInput(value);
  }, [value]);

  useEffect(() => {
    if (timmerRef.current) clearTimeout(timmerRef.current);

    timmerRef.current = setTimeout(() => {
      if (value !== input) onChange(input);
    }, 500);

    return () => clearTimeout(timmerRef.current);
  }, [input]);
  return (
    <Input
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Name product"
    />
  );
};
