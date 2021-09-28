import { ButtonHTMLAttributes } from "react";
import "./style.css";

type TypeButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  hoverColor?: boolean;
};
const ButtonCssNormal: React.FC<TypeButton> = ({ hoverColor }) => (
  <button type="button" className={`btn ${hoverColor && "hoverColor"}`}>
    com css normal
  </button>
);

export default ButtonCssNormal;
