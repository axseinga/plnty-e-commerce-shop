import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --root-size: 3vh;
    --root-min: 15px;
    --root-max: 20px;
    --gap: 1rem;
    --color-background: #000000;
    /* --font-text: 'Plus Jakarta Sans', sans-serif; */
  }

  * {
    box-sizing: border-box;
  }

  html {
    font-size: clamp(var(--root-min), var(--root-size), var(--root-max));
    /* font-family: var(--font-text); */
    font-weight: normal;
    color: var(--color-text);
    line-height: 20px;
    background-color: var(--color-background);
    overflow-x: hidden;
    width: 100%;
  }

  body {
    box-sizing: inherit;
    font-family: inherit;
    font-size: inherit;
    width: 100%;
    height: 100%;
    background-color: var(--color-background);
  }

  #__next, main {
  width: 100%;
}

`;

export default GlobalStyle;
