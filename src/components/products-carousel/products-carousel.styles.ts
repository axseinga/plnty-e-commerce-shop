import styled from "styled-components";

export const ProductsCarouselWrapper = styled.div`
  width: 100%;
  padding: 0 2rem;

  & h2 {
    text-align: center;
    font-size: 2rem;
    letter-spacing: 0.05rem;
  }
`;

export const ProductsCarouselContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > button {
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const ProductsCarouselItems = styled.div`
  width: 100%;
  overflow: hidden;
  border: 1px solid green;
`;

export const ProductsCarouselInner = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  border: 1px solid red;
  transition: transform 0.5s ease;
`;
