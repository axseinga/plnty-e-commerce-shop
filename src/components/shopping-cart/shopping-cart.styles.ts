import styled from "styled-components";

export const ShoppingCartWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;

  & h2 {
    font-size: 1.5rem;
    padding-bottom: 1rem;
  }
`;

export const ShoppingCartList = styled.div``;

export const ShoppingCartListHeader = styled.div`
  display: grid;
  grid-template-columns: 70% 15% 15%;
  padding: 0.5rem 0.2rem;
  border-bottom: 1px solid var(--color-care-icons);
  font-size: 0.8rem;
`;

export const ShoppingCartListItems = styled.ul`
  width: 100%;
`;

export const ShoppingCartListItem = styled.li`
  display: grid;
  grid-template-columns: 70% 15% 10% 5%;
  padding: 1rem 0.2rem;
  border-bottom: 1px solid var(--color-care-icons);

  & > button {
    width: min-content;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

export const ShoppingCartListItemQuantity = styled.div`
  width: 50%;
  min-width: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 0.5rem;

  & button {
    width: 1.2rem;
    height: 1.2rem;
    border: 1px solid var(--color-primary);
    color: var(--color-primary);
    background-color: transparent;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.2s;

    &:active,
    &:hover {
      background-color: var(--color-cream);
    }
  }
`;
