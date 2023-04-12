import styled, { css } from "styled-components";

type CheckboxWrapperProps = {
  isCheckedStyle: boolean;
};

export const CheckboxWrapper = styled.div<CheckboxWrapperProps>`
  font-size: inherit;

  & label {
    cursor: pointer;
  }

  & input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    width: 1rem;
    height: 1rem;
    border-radius: 2px;
    margin-right: 0.3rem;
    border: 2px solid var(--color-secondary);
    outline: none;
    cursor: pointer;

    ${({ isCheckedStyle }) => {
      if (isCheckedStyle) {
        return css`
          padding: 0.1rem;
          background-color: var(--color-secondary);
          background-image: url("/assets/checked-icon-white.svg");
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
        `;
      }
    }}
  }
`;
