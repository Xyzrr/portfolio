import * as S from "./Button.styles";
import React from "react";

export interface ButtonGroupProps {
  className?: string;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  className,
  children,
}) => {
  return <S.Group className={className}>{children}</S.Group>;
};

export interface ButtonProps {
  className?: string;
  icon?: string;
  href: string;
}

const Button: React.FC<ButtonProps> = ({ className, icon, href, children }) => {
  return (
    <S.Wrapper className={className} href={href} target="_blank">
      {icon && <span className="material-icons">{icon}</span>}
      <span>{children}</span>
    </S.Wrapper>
  );
};

export default Button;
