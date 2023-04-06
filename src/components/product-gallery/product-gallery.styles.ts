import styled from "styled-components";

export const ProductGalleryWrapper = styled.div`
  width: 100%;
  grid-area: carousel;
  gap: 1rem;

  display: grid;
  grid-template-columns: 20% 80%;
`;

export const ProductGallerySlider = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const ProductGalleryImageWrapper = styled.div`
  overflow: hidden;

  &:hover img {
    transform: scale(1.1);
  }

  & img {
    transition: transform 0.3s;
    width: 100%;
    height: 100%;
  }
`;

export const ProductGalleryImageActive = styled.img`
  width: 100%;
  height: auto;
`;
