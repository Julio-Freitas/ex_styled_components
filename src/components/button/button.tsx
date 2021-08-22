import { ButtonHTMLAttributes } from 'react';
import * as Styled from './style';
import { ButtonProps } from './types';
type TypeButton = ButtonHTMLAttributes<HTMLButtonElement> & {};

const Button: React.FC<ButtonProps & TypeButton> = ({
  background,
  hoverColor,
  color,
  children,
  ...props
}) => (
  <Styled.Button
    background={background}
    hoverColor={hoverColor}
    color={color}
    {...props}
  >
    {children}
  </Styled.Button>
);

export default Button;
