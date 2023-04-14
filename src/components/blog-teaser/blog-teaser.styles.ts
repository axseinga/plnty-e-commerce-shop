import styled from "styled-components";

export const BlogTeaserGrid = styled.section`
  max-width: 1400px;
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  & a {
    align-self: center;
    margin-top: 3rem;

    & button {
      width: 12rem;
    }
  }
`;

export const BlogTeaserGridLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const BlogTeaserHeader = styled.div`
  padding: 1rem 0 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  & h2 {
    font-size: 0.9rem;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
  }

  & p {
    font-size: 1.3rem;
  }
`;

export const BlogTeaserGridRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;
