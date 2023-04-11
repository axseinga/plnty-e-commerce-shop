import styled from "styled-components";

export const NavWrapper = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  height: var(--nav-height);
  width: 100%;
  background: rgba(233, 255, 237, 0.5);
  backdrop-filter: blur(5px);
  padding: 0.5rem 4rem;
  display: grid;
  grid-template-columns: 33% 33% 33%;

  color: var(--color-primary);
  font-size: 0.9rem;
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  place-self: center;

  & a {
    color: var(--color-primary);
    text-decoration: none;
    transition: color 0.2s;

    &:active, &:hover {
      color: var(--color-cream);
    }
  }
`;

export const NavIcons = styled.div`
  display: flex;
  gap: 0.5rem;
  place-self: end;
  align-items: center;

  & a {
    color: var(--color-primary);
    text-decoration: none;
    transition: all 0.2s;

    &:active, &:hover {
      color: var(--color-cream);
    }
  }
`;
