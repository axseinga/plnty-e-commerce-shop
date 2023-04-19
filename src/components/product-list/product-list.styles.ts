import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translate(0, -5px);
    }

  50% {
    transform: translate(0, 0);
  }
  100% {
        opacity: 1;
        transform: translate(0, 0);
    }
`;

export const ProductListWrapper = styled.div`
  width: 100%;
  height: max-content;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  place-items: center;
  gap: 1rem;
  padding: 0 2rem;
  animation: ${fadeIn} 1s linear forwards;
`;
