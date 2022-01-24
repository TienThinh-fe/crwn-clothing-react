import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@200;400;500;700&display=swap");

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  body {
    font-family: "Be Vietnam Pro", sans-serif;
    padding: 20px 80px;
      
    @media screen and (max-width: 800px) {
      padding: 20px 32px;
    }
  }

  * {
      box-sizing: border-box;
  }

`;
