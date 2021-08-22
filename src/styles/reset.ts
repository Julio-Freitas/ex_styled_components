import {createGlobalStyle} from 'styled-components';

const ResetGlobalStyle = createGlobalStyle`
 * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 }

 html, body{
    height:100vh;
    transition:  0.5s all;
    background-color: ${({theme})=> theme.background};
    color:${({theme})=> theme.color};
 }

`

export default ResetGlobalStyle