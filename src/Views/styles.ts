import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100dvh;
`;

export const Section = styled.section<{
  isDark?: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, isDark }) =>
    isDark ? theme.colors.black : theme.colors.white};
  padding: 2rem 4rem;
  color: ${({ theme, isDark }) =>
    isDark ? theme.colors.white : theme.colors.black};
  font-size: 2.75rem;

  .comercial-e {
    color: ${({ theme }) => theme.colors.primary};
  }

  b {
    text-align: center;
  }

  p {
    margin: 0 0 2rem 0;
    text-align: center;
    font-size: 1rem;
    max-width: 50%;
  }
`;

export const IconsRow = styled.div`
  max-width: 768px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3rem;
`;

export const IconItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
  font-size: 1rem;

  span {
    width: 80%;
    text-align: center;
  }
`;
