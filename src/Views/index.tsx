"use client";
import { RedirectButton } from "@/components/RedirectButton";
import * as S from "./styles";
import { PiUserCirclePlus } from "react-icons/pi";
import { BsArrowRight } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { IoRocketOutline } from "react-icons/io5";

export function LandingPage() {
  const icons = [
    {
      icon: <PiUserCirclePlus size={148} />,
      text: "Crie sua conta Gratuita",
    },
    {
      icon: <IoHomeOutline size={148} />,
      text: "Cadastre os seus imóveis",
    },
    {
      icon: <IoRocketOutline size={148} />,
      text: "Acelere seus resultados",
    },
  ];

  return (
    <S.Main>
      <S.Section isDark>
        <span>
          Portal{" "}
          <b>
            Imóveis <b className="comercial-e">&</b> Cia
          </b>
        </span>

        <p>
          O único <b>Portal Imobiliário exclusivo do litoral Catarinense</b> com
          Acelerador de Resultados
        </p>

        <RedirectButton
          title="Crie sua conta Grátis"
          icon={<BsArrowRight size={20} />}
          href="https://dashboard.portalimoveisecia.com.br"
        />
      </S.Section>

      <S.Section isDark={false}>
        <b style={{ fontSize: "2rem", width: "50%" }}>
          Como functiona o Portal Imóveis <b className="comercial-e">&</b> Cia?
        </b>

        <S.IconsRow>
          {icons.map((icon) => (
            <S.IconItem key={icon.text}>
              {icon.icon}
              <span>{icon.text}</span>
            </S.IconItem>
          ))}
        </S.IconsRow>
      </S.Section>
    </S.Main>
  );
}
