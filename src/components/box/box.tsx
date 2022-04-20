import { HTMLAttributes } from "react";
import { CSSProperties, StyledInterface } from "styled-components";

import * as Style from "./styled";

export type BoxProps = {
  children: React.ReactNode;
  css?: CSSProperties;
  props?: HTMLAttributes<HTMLElement>;
  as?: keyof StyledInterface;
};

const Box = ({ css, as, children, ...props }: BoxProps) => {
  return (
    <Style.Container as={as} customCss={{ ...css }} {...props}>
      {children}
    </Style.Container>
  );
};

export default Box;
