import styled from "styled-components";

export const NewsletterFormWrapper = styled.form`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin: 1.5rem 0;

  & button {
    font-size: 0.8rem;
    padding: 0.18rem 0.5rem;
    align-self: center;
    transform: translateY(2px);
  }

  & > div {
    font-size: 0.9rem;
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    & label {
      opacity: 0.9;
      font-family: var(--font-headers);
      display: inline-block;
    }
    & input {
      background-color: transparent;
      border: 1px solid var(--color-white);
      color: var(--color-white);
      padding: 0.15rem 0.5rem;
      font-size: 0.8rem;
      font-family: var(--font-header);
      width: 100%;

      &::placeholder {
        color: var(--color-white);
        opacity: 0.7;
        font-size: 0.8rem;
      }
    }

    & p {
      font-size: 0.6rem;
      color: #ff7878;
      margin-left: 3px;
      height: 1rem;
    }
  }
`;
