
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    /* Colors */
    --brand-color: #e07b67;
    --dark-10: #121214;
    --dark-20: #17171a;
    --dark-30: #202024;
    --dark-40: #252529;
    --dark-50: #afabb6;
    --dark-60: #ffffff;

    /* Fonts */
    --space-grotesk: "Space Grotesk", sans-serif;
    --inter: "Inter", sans-serif;
    /* Font Weight */
    --weight-500: 500;

    font-family: var(--inter);
    font-weight: var(--weight-500);

    font-family: var(--inter);
    background-color: var(--dark-10);
  }
`;

export default GlobalStyle;