import Styled from 'styled-components';
import { ButtonProps } from './types';


export const Button = Styled.button.attrs(({color})=> ({
    color: color || '#fff'
}))<ButtonProps>`
    width:150px;
    height:50px;
    font-weight: bold;
    cursor: pointer;
    border: none;
    padding: 15px 32px;
    transition: all 0.5s;
    border-radius: 5px;
    margin:3px 0;
    
    color: ${({color})=> color};
    background: ${({background})=> background};
    &:hover {
        background: ${({hoverColor})=> hoverColor};
    }


`