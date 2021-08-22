import * as Styled from './style';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
  background,
  hoverColor,
  color,
  children,
}) => (
  <Styled.Button background={background} hoverColor={hoverColor} color={color}>
    {children}
  </Styled.Button>
);

export default Button;
