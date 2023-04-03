import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: var(--color-primary);
  padding: 2rem;
  color: var(--color-white);
  line-height: 1.2rem;
  display: grid;
  grid-template-columns: 50% 50%;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & p {
    opacity: 0.8;
    font-size: 0.7rem;
  }
`;

export const FooterSocials = styled.div``;

export const FooterLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  & div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    p {
      font-size: 0.9rem;
      font-weight: 500;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      li {
        font-size: 0.7rem;
      }
    }
  }
`;
