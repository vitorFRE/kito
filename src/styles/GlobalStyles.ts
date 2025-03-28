import { createGlobalStyle } from "styled-components";
import { fonts } from "./fonts";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${fonts.Geist};
    margin: 0;
    padding: 0;
  }

  code, pre {
    font-family: ${fonts["Geist Mono"]};
  }
`;

export default GlobalStyles;
