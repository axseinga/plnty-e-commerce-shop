import styled from "styled-components";

export const UserAccountWrapper = styled.div`
  padding: 0 10em;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const UserAccountHeader = styled.section`
  padding: 0.5em;
  background-color: var(--color-secondary);

  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: flex-end;
    gap: 1em;

    & > p {
      font-size: 1.5em;
    }
  }
`;

export const UserAccountBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 1em;
  margin-bottom: 2em;
`;

export const UserAccountNavigation = styled.div`
  background-color: var(--color-white);
  box-shadow: 4px 6px 8px -3px rgba(143, 143, 143, 1);
  border: 1px solid var(--color-care-icons);
  height: 100%;
  min-height: 500px;
`;

export const UserAccountNavigationHeading = styled.div`
  background-color: var(--color-secondary);

  & h2 {
    font-weight: 500;
    font-size: 0.9rem;
    padding: 0.3rem;
  }
`;

export const UserAccountNavigationList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.1rem 0;

  & button {
    cursor: pointer;
    text-align: left;
    font-size: 0.8rem;
    padding: 0.5em;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid var(--color-secondary);
  }
`;

export const UserAccountContent = styled.section`
  background-color: var(--color-white);
  box-shadow: 4px 6px 8px -3px rgba(143, 143, 143, 1);
  border: 1px solid var(--color-care-icons);
  height: 100%;
  min-height: 500px;
`;

export const UserAccountAvatar = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: 6em;
  height: 6em;

  & img {
    width: 100%;
    height: auto;
  }
`;
