import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
margin: 0px;
padding: 0px;
box-sizing: border-box;
}
body {
  &::-webkit-scrollbar {
    display: none;
  }
  width: 1920px;
  height: 1080px;
}

`;
