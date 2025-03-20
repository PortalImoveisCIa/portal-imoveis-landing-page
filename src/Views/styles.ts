import Image from "next/image";
import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100dvh;
`;

export const Section = styled.section<{
  $isDark?: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, $isDark }) =>
    $isDark ? theme.colors.black : theme.colors.white};
  color: ${({ theme, $isDark }) =>
    $isDark ? theme.colors.white : theme.colors.black};
  padding: 2rem 4rem;
  font-size: 2.75rem;

  .comercial-e {
    color: ${({ theme }) => theme.colors.primary};
  }

  .last {
    font-size: 2.3rem;
    width: 50%;
    margin-bottom: 2rem;
    text-align: center;

    @media (max-width: 480px) {
      width: 100%;
      font-size: 2rem;
    }
  }
  b {
    text-align: center;
  }

  p {
    text-align: center;
    font-size: 1rem;
    max-width: 50%;
  }

  @media (max-width: 1024px) {
    width: 100%;
    font-size: 1.5rem;
    padding: 2rem 1.5rem;

    p {
      font-size: 1rem;
      max-width: 80%;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 1.5rem;

    p {
      font-size: 0.9rem;
      max-width: 90%;
    }
  }
`;

export const IconsRow = styled.div`
  width: 100%;
  max-width: 768px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 1024px) {
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const IconItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
  width: 30%;

  span {
    text-align: center;
  }

  @media (max-width: 1024px) {
    width: 45%;
  }

  @media (max-width: 768px) {
    width: 60%;
  }

  @media (max-width: 480px) {
    width: 80%;
  }
`;

export const Icon = styled.div`
  svg {
    width: 10vw;
    height: auto;
  }

  @media (max-width: 1024px) {
    svg {
      width: 15vw;
    }
  }

  @media (max-width: 768px) {
    svg {
      width: 20vw;
    }
  }

  @media (max-width: 480px) {
    svg {
      width: 25vw;
    }
  }
`;

export const AboutSection = styled.section<{
  $isDark?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 4rem 8rem;
  gap: 2rem;
  background-color: ${({ theme, $isDark }) =>
    $isDark ? theme.colors.black : theme.colors.white};
  color: ${({ theme, $isDark }) =>
    $isDark ? theme.colors.white : theme.colors.black};

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    padding: 3rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40%;

  h6 {
    text-align: left;
    font-size: 3.5rem;
    margin-bottom: 1rem;
    font-weight: 400;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1rem;

    h6 {
      text-align: center;
      font-size: 2rem;
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    h6 {
      text-align: center;
      font-size: 1.8rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

export const ImageWrapper = styled.div`
  flex: 0.6;
  display: flex;
  justify-content: center;
`;
export const StyledImage = styled(Image)`
  width: 100%;
  max-width: 500px;
  border-radius: 1rem;
  object-fit: contain;

  @media (max-width: 1024px) {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    img {
      max-width: 350px;
    }
  }

  @media (max-width: 480px) {
    img {
      max-width: 300px;
    }
  }
`;
