import { JSX } from "react";
import * as S from "./styles";

interface IRedirectButton {
  title: string;
  icon: JSX.Element;
  href: string;
}

export function RedirectButton({ title, icon, href }: IRedirectButton) {
  return (
    <S.ButtonContainer href={href} target="_blank">
      <S.TitleWrapper>{title}</S.TitleWrapper>
      <S.IconWrapper>{icon}</S.IconWrapper>
    </S.ButtonContainer>
  );
}
