import styled from "styled-components";

export const HeroHeader = styled.div`
width: 100%;
height: 95vh;
background-color: var(--color-secondary);
background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0.1), rgba(2, 75, 63, 0.73)), url("/assets/homepage-bg.png");
background-repeat: no-repeat;
background-size: cover;
background-position: bottom;
transform: translateY(-2.5rem);
display: flex;
align-items: center;
justify-content: center;`;

export const HeroContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;
color: var(--color-white);
text-align: center;
padding: 1rem;
width: 70%;

& h1 {
    font-size: 3rem;
    line-height: 3.5rem;
    width: 70%;
    letter-spacing: 0.2rem;
}

& p {
    font-size: 1.1rem;
    line-height: 1.3rem;
    width: 80%;
}
`;