import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --root-size: 3vh;
    --root-min: 15px;
    --root-max: 20px;
    --gap: 1rem;
    --nav-height: 2.5rem;
    --color-background: #FAFAFA;
    --color-white: #ffffff;
    --color-black: #000000;
    --color-primary: #024B3F;
    --color-secondary: #8AA77E;
    --color-tertiary: #3f655f;
    --color-light-gray: #dcdcdc;
    --color-gray: #a2a2a2;
    --color-cream: #F6E8CC;
    --font-headers: 'Sora', sans-serif;
    --font-text: 'Poppins', sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  html {
    font-size: clamp(var(--root-min), var(--root-size), var(--root-max));
    font-family: var(--font-text);
    font-weight: normal;
    color: var(--color-black);
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
    line-height: 1.5;
  }

  h1, h2, h3, h4, h5 {
    font-family: var(--font-headers);
    font-weight: 600;
  }

  #__next, main {
  width: 100%;
}

`;

export default GlobalStyle;
