import styled from "styled-components";

type SpacerProps = {
    times?: number;
  };
  
  export const Spacer = styled.div<SpacerProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1400px;
    height: calc(1rem * ${({ times = 4 }) => times});
    margin-left: auto;
    margin-right: auto;
  `;