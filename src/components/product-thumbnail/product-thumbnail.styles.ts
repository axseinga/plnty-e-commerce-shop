import styled from "styled-components";

export const ProductThumbnailWrapper = styled.div`
  width: 100%;
  border: 1px solid var(--color-light-gray);

  & a {
    color: var(--color-black);
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
        color: var(--color-primary);
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
  gap: 1rem;

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

    & h2 {
      font-size: 0.9rem;
    }
  }
`;

export const ProductThumbnailForm = styled.form`
  margin-top: 0.5rem;
  display: flex;

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
  }
`;
