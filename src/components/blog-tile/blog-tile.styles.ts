import styled from "styled-components";

export const BlogTileWrapper = styled.article`
  border: 1px solid var(--color-gray);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 4px 6px 8px -3px rgba(143, 143, 143, 1);

  & a {
    text-decoration: none;
    color: var(--color-black);

    &:active,
    &:hover img {
      transform: scale(1.1);
      filter: brightness(0.5);
    }

    &:active,
    &:hover div:after {
      top: 50%;
      opacity: 1;
    }
  }
`;

export const BlogTileImageWrapper = styled.div`
  overflow: hidden;
  font-size: 0;
  position: relative;

  &:after {
    content: "Read more";
    color: var(--color-white);
    font-size: 1.5rem;
    font-family: var(--font-header);
    text-transform: uppercase;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.3s, top 0.3s;
  }

  & img {
    width: 100%;
    height: auto;
    transition: transform 0.3s, filter 0.3s;
  }
`;

export const BlogTilePostContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  line-height: 1.5rem;

  & h3 {
    letter-spacing: 0.05rem;
  }

  & p {
    font-size: 0.8rem;
  }
`;
