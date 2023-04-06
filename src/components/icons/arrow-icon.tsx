import React from "react";
import { IconFillDivWrapper } from "./icons-styles";

type IconProps = {
  fill?: string;
};

export const ArrowIcon = ({ fill }: IconProps) => {
  return (
    <IconFillDivWrapper fill={fill}>
      <svg
        width="10"
        height="24"
        viewBox="0 0 19 33"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19 16.206a2.23 2.23 0 01-.686 1.61L3.784 31.79c-.433.416-.99.624-1.55.624a2.234 2.234 0 01-1.55-3.846l12.856-12.36L.686 3.846A2.234 2.234 0 113.784.624l14.53 13.97A2.24 2.24 0 0119 16.206" />
      </svg>
    </IconFillDivWrapper>
  );
};
