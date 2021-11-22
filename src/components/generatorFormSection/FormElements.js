import styled from "styled-components";

export const FormContainer = styled.div`
  height: ${({ showGenerator }) => (showGenerator ? `1300px` : `0px`)};
  display: flex;

  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.palette.colors.lightBg};
  /* @media screen and (max-width: 1024px) {
    height: 1300px;
  }

  @media screen and (max-width: 768px) {
    height: 1850px;
  } */
`;

export const FormWrapper = styled.div`
  max-width: 1000px;
  min-width: 60%;
  display: flex;
  align-items: center;
  padding: 150px 50px;
  justify-content: center;
  /* @media screen and (max-width: 1024px) {
    height: 1300px;
  }

  @media screen and (max-width: 768px) {
    height: 1850px;
  } */
`;
