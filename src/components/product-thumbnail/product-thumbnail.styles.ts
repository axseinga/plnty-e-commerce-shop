import styled from "styled-components";

export const ProductThumbnailWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 87% 13%;
  background-color: var(--color-white);
  box-shadow: 4px 6px 8px -3px rgba(143, 143, 143, 1);

  & a {
    color: var(--color-black);
    text-decoration: none;
    transition: color 0.2s;
    position: relative;

    &:hover {
      color: var(--color-primary);
    }

    & button {
      position: absolute;
      right: 0;
      top: 5px;
    }
  }

  & img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

export const ProductThumbnailDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 0.5rem;

  & p {
    font-size: 0.6rem;
  }

  & > p {
    font-size: 0.8rem;
  }
`;

export const ProductThumbnailHeader = styled.div`
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 0.5rem;

    & h3 {
      font-size: 0.9rem;
    }
  }
`;

export const ProductThumbnailForm = styled.form`
  display: flex;
  margin-top: 1rem;
  white-space: nowrap;

  & input {
    width: 2.5rem;
    border: 1px solid var(--color-primary);
    border-right-color: transparent;
    padding-left: 0.6rem;
    text-align: center;

    ::placeholder {
      text-align: center;
      padding-left: 0.5rem;
    }
  }

  & button {
    width: 100%;
    padding: 0.4rem 1.5rem;

    &:active,
    &:hover {
      border: 1px solid var(--color-primary);
    }
  }
`;
