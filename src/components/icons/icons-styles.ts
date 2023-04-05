import styled from "styled-components";

type IconWrapperProps = {
  color?: string;
};

export const IconWrapper = styled.button<IconWrapperProps>`
  transition: color 0.2s;
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

type IconSocialWrapperProps = {
  fill?: string;
};

export const IconSocialWrapper = styled.button<IconSocialWrapperProps>`
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
