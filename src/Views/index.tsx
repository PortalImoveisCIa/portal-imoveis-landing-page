"use client";
import { RedirectButton } from "@/components/RedirectButton";
import * as S from "./styles";
import { PiUserCirclePlus } from "react-icons/pi";
import { BsArrowRight } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { IoRocketOutline } from "react-icons/io5";
import { useSearchParams } from "next/navigation";

export function LandingPage() {
  const icons = [
    {
      icon: <PiUserCirclePlus />,
      text: "Crie sua conta Gratuita",
    },
    {
      icon: <IoHomeOutline />,
      text: "Cadastre os seus imóveis",
    },
    {
      icon: <IoRocketOutline />,
      text: "Acelere seus resultados",
    },
  ];
  const searchParams = useSearchParams();
  console.log(searchParams.get("environment"));

  const domain =
    searchParams.get("environment") === "hml" ? "devdashboard" : "dashboard";

  return (
    <S.Main>
      <S.Section $isDark>
        <span
          style={{
            fontSize: "3rem",
            textAlign: "center",
            marginBottom: "1rem",
          }}>
          Portal{" "}
          <b style={{ fontSize: "3rem" }}>
            Imóveis <b className="comercial-e">&</b> Cia
          </b>
        </span>

        <p style={{ fontSize: "1.5rem" }}>
          O único <b>Portal Imobiliário exclusivo do litoral Catarinense</b> com
          Acelerador de Resultados
        </p>

        <RedirectButton
          title="Crie sua conta Grátis"
          icon={<BsArrowRight size={20} />}
          href={`https://${domain}.portalimoveisecia.com.br/auth/sign-up`}
        />
      </S.Section>

      <S.Section $isDark={false}>
        <b style={{ fontSize: "1.9rem" }}>
          Como funciona o Portal Imóveis <b className="comercial-e">&</b> Cia?
        </b>

        <S.IconsRow>
          {icons.map((icon) => (
            <S.IconItem key={icon.text}>
              <S.Icon>{icon.icon}</S.Icon>
              <span>{icon.text}</span>
            </S.IconItem>
          ))}
        </S.IconsRow>
      </S.Section>

      <S.AboutSection $isDark>
        <S.TextWrapper>
          <h6>Quem Somos?</h6>
          <p>
            A <b>Imóveis&Cia</b> começou há 14 anos como a “
            <b>Revista Imóveis&Cia</b>”, fundada por Tiago Lemos Stachowski.
            Após 10 anos de sucesso, Tiago expandiu, transformando a revista em
            uma agência de marketing digital. Atualmente, carregamos em nosso
            histórico mais de 80 mil leads qualificados, consolidando nossa
            posição como uma das maiores e mais completas agências de marketing
            imobiliário do sul do país. Agora para consolidar ainda mais a nossa
            marca estamos lançando nosso próprio Portal Imobiliário exclusivo do
            Litoral Catarinense.
          </p>
        </S.TextWrapper>
        <S.ImageWrapper>
          <S.StyledImage
            src="/tiago.png"
            alt="tiago"
            width={700}
            height={500}
            loading="eager"
          />
        </S.ImageWrapper>
      </S.AboutSection>

      <S.Section>
        <span className="last">
          Comece agora mesmo a acelerar seus resultados com o Portal Imóveis
          <b className="comercial-e"> &</b> Cia
        </span>
        <RedirectButton
          title="Crie sua conta Grátis"
          icon={<BsArrowRight size={20} />}
          href={`https://${domain}.portalimoveisecia.com.br/auth/sign-up`}
        />
      </S.Section>
    </S.Main>
  );
}
