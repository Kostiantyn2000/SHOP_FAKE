import React, { FC, ReactNode } from "react";
import { Badge } from "antd";

interface IProps {
  icon: ReactNode;
  count: number;
  onClick: () => void;
}

export const BadgeComponent: FC<IProps> = ({ icon, count, onClick }) => (
  <div onClick={onClick}>
    <Badge count={count}>{icon}</Badge>
  </div>
);
