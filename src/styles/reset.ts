import {createGlobalStyle} from 'styled-components';

const ResetGlobalStyle = createGlobalStyle`
 * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 }

 html, body{
    height:100vh;
    background-color: #ccc;
 }

`

export default ResetGlobalStyle