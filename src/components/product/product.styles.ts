import styled from "styled-components";

export const ProductWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1600px;
  display: grid;
  grid-template-columns: 55% 45%;
  grid-template-areas:
    "carousel details"
    "reviews details";
  justify-items: center;
  gap: 1rem;
`;

export const ProductDetails = styled.article`
  grid-area: details;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;

  & h2 {
    font-size: 2rem;
    letter-spacing: 0.05rem;
  }

  & > button {
    width: 60%;
  }
`;

export const ProductPrice = styled.p`
  font-size: 1.2rem;
`;

export const ProductTitle = styled.p`
  font-size: 0.8rem;
`;

export const ProductCategories = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const ProductDescription = styled.p`
  font-size: 0.8rem;
`;

export const ProductReviews = styled.div`
  grid-area: reviews;
`;

// dropdown

export const ProductDropdownWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--color-gray);
`;

type ProductDropdownHeader = {
  isOpen: boolean;
};

export const ProductDropdownHeader = styled.button<ProductDropdownHeader>`
  width: 100%;
  background-color: transparent;
  border: none;
  font-family: var(--font-header);
  text-align: left;
  font-size: 1.1rem;
  cursor: pointer;
  padding-left: 0.2rem;
  letter-spacing: 0.05rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & div {
    & svg {
      transition: transform 0.5s;
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(-90deg)" : "rotate(90deg)"};
    }
  }
`;

type ProductDropdownContent = {
  isOpen: boolean;
};

export const ProductDropdownContent = styled.div<ProductDropdownContent>`
  --height: 0px;

  height: var(--height);
  overflow: hidden;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & p {
    padding-left: 0.2rem;
  }

  & p:last-child {
    padding-bottom: 1rem;
  }
`;
