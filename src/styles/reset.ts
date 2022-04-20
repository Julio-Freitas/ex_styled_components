import {createGlobalStyle} from 'styled-components';

const ResetGlobalStyle = createGlobalStyle`
 * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 }

 #root {
     height: 100%;
     padding: 0 19px;
 }
 html, body{
    transition:  0.5s all;
    height: 100%;
 }

`

export default ResetGlobalStyle