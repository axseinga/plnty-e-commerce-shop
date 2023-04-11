import styled from "styled-components";

type IconWrapperProps = {
  color?: string;
};

export const IconWrapper = styled.button<IconWrapperProps>`
  transition: color 0.2s;
  color: ${({ color }) => color ?? "var(--color-primary)"};
  background-color: transparent;
  border: none;
  cursor: pointer;

  & svg {
    width: 1.2rem;
  }

  &:active,
  &:hover {
    color: var(--color-cream);
  }
`;

type IconFillWrapperProps = {
  fill?: string;
};

export const IconFillWrapper = styled.button<IconFillWrapperProps>`
  background-color: transparent;
  border: none;
  cursor: pointer;

  & svg {
    width: 1.2rem;
    transition: fill 0.2s;
    fill: ${({ fill }) => fill ?? "var(--color-primary)"};

    &:active,
    &:hover {
      fill: var(--color-secondary);
    }
  }
`;

export const IconFillDivWrapper = styled.div<IconFillWrapperProps>`
  cursor: pointer;

  & svg {
    width: 1.2rem;
    transition: fill 0.2s;
    fill: ${({ fill }) => fill ?? "var(--color-primary)"};

    &:active,
    &:hover {
      fill: var(--color-secondary);
    }
  }
`;
