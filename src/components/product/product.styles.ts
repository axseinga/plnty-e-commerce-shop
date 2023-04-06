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
  height: 900px;
  border: 2px solid purple;
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
