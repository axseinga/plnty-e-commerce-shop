import styled, { css } from "styled-components";
import { ButtonVariantType } from "./button";

type ButtonWrapperProps = {
  variant?: ButtonVariantType;
};

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  background-color: transparent;
  border: 1px solid var(--color-white);
  color: var(--color-white);
  padding: 0.7rem 1.2rem;
  font-size: 0.9rem;
  font-family: var(--font-header);
  cursor: pointer;
  transition: color 1s, background-color 1s, border-color 1s;

  &:active,
  &:hover {
    background-color: var(--color-white);
    color: var(--color-primary);
    border-color: var(--color-primary);
  }

  ${({ variant }) => {
    switch (variant) {
      case ButtonVariantType.dark:
        return css`
          border: 1px solid var(--color-primary);
          color: var(--color-primary);

          &:active,
          &:hover {
            background-color: var(--color-primary);
            color: var(--color-white);
            border-color: var(--color-white);
          }
        `;
      case ButtonVariantType.gray:
        return css`
          border: 1px solid var(--color-gray);
          color: var(--color-gray);
          font-size: 0.6rem;
          padding: 0.3rem 0.5rem;

          &:active,
          &:hover {
            background-color: var(--color-primary);
            color: var(--color-white);
            border-color: var(--color-white);
          }
        `;
      case ButtonVariantType.hero:
        return css`
          padding: 0.8rem 1.1rem;
          font-size: 1.1rem;
          text-transform: uppercase;
          letter-spacing: 0.1rem;
          transition: all 1s;
          &:active,
          &:hover {
            color: var(--color-white);
            border-color: var(--color-white);
            background: rgba(233, 255, 237, 0.2);
            backdrop-filter: blur(5px);
          }
        `;
    }
  }}
`;
