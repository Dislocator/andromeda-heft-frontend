import styled from "styled-components";
import { H1, P } from "../../theme/Fonts";

export const ServiceCardContainer = styled.div`
  background: ${({ theme }) => theme.palette.colors.onPrimary};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: ${({ theme }) => theme.cardBorderRadius};
  /* max-height: 340px; */
  max-width: 400px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
`;
export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
`;
export const ServiceIcon = styled.img`
  height: 240px;
  width: 240px;
  margin-bottom: 10px;
`;

export const ServiceH1 = styled(H1)`
  color: ${({ theme }) => theme.palette.colors.onBackground};
`;
export const ServicesH2 = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
`;

export const ServiceP = styled(P)`
  color: ${({ theme }) => theme.palette.colors.onBackground};
  font-size: 1rem;
`;
export const ServiceMoneyTag = styled(ServiceP)`
  position: relative;
  top: 10px;
  left: 0px;
  margin-right: 8px;
`;
export const ServicePriceSection = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: row;
`;
