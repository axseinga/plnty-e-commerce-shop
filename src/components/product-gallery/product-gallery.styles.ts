import styled from "styled-components";

export const ProductGalleryWrapper = styled.div`
  width: 100%;
  grid-area: carousel;
  gap: 1rem;
  max-height: 925px;
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 95% 5%;
  grid-template-areas:
    "slider active"
    "nav nav";
`;

export const ProductGallerySlider = styled.div`
  grid-area: slider;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;

  & button:first-child {
    transform: rotate(270deg);
    top: 5px;
  }

  & button:last-child {
    bottom: 5px;
    transform: rotate(90deg);
  }
`;

export const ProductGalleryNavArrow = styled.button`
  position: absolute;
  left: 40%;
  transform: translate(-50%, -50%);
  background-color: var(--color-cream);
  border: 1px solid var(--color-primary);
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  z-index: 5;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: 100%;
    height: auto;
    transform: translateY(2px);
  }
`;

type ProductGallerySliderInner = {};

export const ProductGallerySliderInner = styled.div<ProductGallerySliderInner>`
  overflow-y: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ProductGalleryImageWrapper = styled.div`
  overflow: hidden;
  cursor: pointer;
  font-size: 0;

  &:hover img {
    transform: scale(1.1);
  }

  & img {
    transition: transform 0.3s;
    width: 100%;
    height: 100%;
  }
`;

export const ProductGalleryActiveImage = styled.div`
  grid-area: active;
  display: grid;
  grid-template-rows: 95% 5%;
  width: 100%;
  overflow: hidden;
  font-size: 0;

  & img {
    width: 100%;
    height: auto;
  }
`;

export const GalleryNavigation = styled.div`
  grid-area: nav;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

type GalleryNavigationDotProps = {
  isActive: boolean;
};

export const GalleryNavigationDot = styled.button<GalleryNavigationDotProps>`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: none;
  background-color: ${({ isActive }) =>
    isActive ? "var(--color-primary)" : "var(--color-gray)"};
  cursor: pointer;
  transition: background-color 0.1s;

  &:active,
  &:hover {
    background-color: var(--color-secondary);
  }
`;
