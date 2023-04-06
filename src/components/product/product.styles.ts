import styled from "styled-components";

export const ProductWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1400px;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-areas:
    "carousel details"
    "reviews details";
`;

export const ProductImageCarousel = styled.div`
  grid-area: carousel;
  height: 500px;
  border: 2px solid green;
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
  height: 500px;
  border: 2px solid blue;
`;

// dropdown

export const ProductDropdownWrapper = styled.div`
  width: 100%;
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
  font-size: 1rem;
  cursor: pointer;
  border-bottom: 1px solid var(--color-gray);

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

  & p {
    padding: 0.2rem;
  }
`;
