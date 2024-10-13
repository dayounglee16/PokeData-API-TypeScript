import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body, div, span,
  h1, h2, h3, h4, h5, h6, p
  dl, dt, dd, ol, ul, li,
  form,article, aside
  footer, header, menu, nav, section
   {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    color: #333;
    font-size: 16px;
  }
  article, aside, footer, header, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  button{
    cursor: pointer;
  }
`;

export default GlobalStyle;
