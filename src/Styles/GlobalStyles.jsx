import {createGlobalStyle} from "styled-components"
const GlobalStyles =createGlobalStyle`
    body{
        margin:0;
        padding:0;
        box-sizing:border-box;
        background-color:${({theme})=>theme.bgtotal};
        font-family:"Poppins",sans-serif;
        color:#fff;
    }
`
export default GlobalStyles;