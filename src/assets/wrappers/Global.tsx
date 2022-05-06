import { createGlobalStyle } from "styled-components";
import { ThemeType } from "../../App";

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1.4rem;
    font-weight: 300;
    min-height: 100vh;
    background-color: ${(props) => props.theme.background};
  }

  .btn {
    border: none;
    background-color: transparent;

    &:hover {
      cursor: pointer;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input, textarea, button {font-family: inherit}

  ul {
    list-style-type: none;
  }
`;

export default GlobalStyle;
