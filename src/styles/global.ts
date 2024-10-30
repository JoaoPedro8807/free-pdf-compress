import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }
 

    body{
        background-color: ${props => props.theme?.colors.background};
        font-size: 14px;
        color:  ${props => props.theme?.colors.text};

    }
`
