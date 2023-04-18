import styled from "styled-components";

export const ProductFilteringWrapper = styled.div`
  background-color: var(--color-white);
  box-shadow: 4px 6px 8px -3px rgba(143, 143, 143, 1);
  border: 1px solid var(--color-care-icons);
`;

export const ProductFilterHeading = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  background-color: var(--color-secondary);
  padding-left: 0.2rem;

  & h2 {
    font-weight: 500;
    font-size: 0.9rem;
  }

  & button {
    padding: 0.1rem 1rem;

    &:active,
    &:hover {
      border: 1px solid var(--color-primary);
    }
  }
`;

export const ProductFilterCategoriesWrapper = styled.div`
  font-size: 0.9rem;
  padding: 0.3rem;
`;

export const ProductFilterCategories = styled.div`
  padding: 0.1rem 0;
  & p {
    padding-left: 0.3rem;
    border-bottom: 1px solid var(--color-secondary);
  }

  & > div {
    font-size: 0.8rem;
    padding: 0.2rem 0.3rem;
    & label {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
    }
  }
`;
