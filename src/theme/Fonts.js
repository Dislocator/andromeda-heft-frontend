import styled from "styled-components";

export const H1 = styled.h1`
  color: ${({ theme }) => theme.palette.colors.onPrimary};
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const P = styled.p`
  color: ${({ theme }) => theme.palette.colors.onPrimary};
  font-size: 24px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
