import * as React from "react";
import { SVGProps } from "react";

export const CartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={25}
    height={25}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <path
      stroke="#333"
      strokeMiterlimit={3.864}
      d="M3.68 20.86H.498V4.502h3.235M5.89 5.189v-1.42C5.89 2.173 7.099.88 8.587.88c1.49 0 2.696 1.293 2.696 2.887v1.42"
    />
    <path fill="#E1C4A9" d="M3.759 4.502h15.74V20.86H3.759V4.502Z" />
    <path
      stroke="#000"
      strokeMiterlimit={3.864}
      d="M3.759 4.502h15.74V20.86H3.759V4.502Z"
    />
    <path
      stroke="#333"
      strokeMiterlimit={3.864}
      d="M9.126 6.273v-2.8c0-1.431 1.207-2.592 2.696-2.592s2.696 1.16 2.696 2.593v2.799"
    />
  </svg>
);
