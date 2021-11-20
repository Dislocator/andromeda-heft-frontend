import styled from "styled-components";
import { H1, P } from "../../theme/Fonts";

export const InfoContainer = styled.div`
  color: ${({ theme }) => theme.palette.colors.onPrimary};
  background: ${({ theme, lightBg }) =>
    lightBg ? theme.palette.colors.lightBg : theme.palette.colors.darkBg};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  /* @media screen and (max-width: 1024px) {
    height: 600px;
  } */
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 1024px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;
export const TextWrapper = styled.div`
  max-width: 1540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const InfoHeading = styled(H1)`
  margin-bottom: 24px;
  line-height: 1.1;
  font-weight: 600;
  text-align: left;

  color: ${({ theme, lightText }) =>
    lightText ? theme.palette.colors.lightText : theme.palette.colors.darkText};
`;

export const InfoSubtitle = styled(P)`
  max-width: 440px;
  margin-bottom: 35px;
  text-align: left;
  color: ${({ theme, darkText }) =>
    darkText ? theme.palette.colors.darkText : theme.palette.colors.onPrimary};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;
export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
