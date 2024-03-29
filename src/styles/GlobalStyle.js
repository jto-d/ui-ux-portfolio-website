import { createGlobalStyle } from "styled-components";
import fonts from './fonts'
import variables from './variables'

const GlobalStyle = createGlobalStyle`
    ${fonts}
    ${variables}

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        scroll-behavior: smooth;
        font-family: var(--font-inter);
        background-color: var(--background-color);
        overflow-x: hidden;

        h1, h2, h3, h4, p, a, li, ul {
            overflow: hidden;
        }
        
    }

`

export default GlobalStyle;