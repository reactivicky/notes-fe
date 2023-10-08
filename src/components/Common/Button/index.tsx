import { type ReactNode } from "react";
import { ButtonStyled } from "./styles";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  children: ReactNode;
}

const Button = ({ type, onClick, children }: ButtonProps) => {
  return (
    <ButtonStyled type={type} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
