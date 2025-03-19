import Link from "next/link";
import styled from "styled-components";

export const ButtonContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1.5rem;
  width: 100%;
  max-width: 254px;
  height: 40px;
  gap: 0.175rem;
  background-color: transparent;
  overflow: hidden;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.black};
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 88%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.primary};
`;
