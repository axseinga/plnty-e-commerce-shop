import React from "react";
import { ButtonWrapper } from "./button.styles";

export enum ButtonVariantType {
  dark = "dark",
  gray = "gray",
  hero = "hero",
}

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
  variant?: ButtonVariantType;
};

export const Button = ({ children, onClick, variant }: ButtonProps) => {
  return (
    <ButtonWrapper onClick={onClick} variant={variant}>
      {children}
    </ButtonWrapper>
  );
};
