import styled from "styled-components";

export const ShoppingCartWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  & h2 {
    font-size: 1.5rem;
    padding-bottom: 1rem;
    letter-spacing: 0.05rem;
  }

  & a:last-child {
    align-self: center;
  }
`;

export const ShoppingCartList = styled.div``;

export const ShoppingCartListHeader = styled.div`
  display: grid;
  grid-template-columns: 70% 15% 10% 5%;
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

export const ShoppingCartSubtotal = styled.div`
  padding: 0.8rem 0.2rem;
  display: flex;
  justify-content: space-between;
  font-size: 1.1rem;

  & span {
    color: var(--color-gray);
    font-size: 0.6rem;
  }
`;

export const ShoppingCartOrderNotes = styled.div`
  font-size: 0.7rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding: 0 0.2rem;

  & span {
    color: var(--color-gray);
    font-size: 0.6rem;
  }
`;

export const ShoppingCartDelivery = styled.form`
  padding: 1rem 0.2rem;
  font-size: 0.7rem;

  & fieldset {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;

    & legend {
      padding-bottom: 0.5rem;
    }

    & label {
      display: flex;
      align-items: center;
    }
  }
`;

export const ShoppingCartTotal = styled.div`
  padding: 0.8rem 0.2rem;
  display: flex;
  justify-content: space-between;
  font-size: 1.1rem;

  & span {
    color: var(--color-gray);
    font-size: 0.6rem;
  }
`;
