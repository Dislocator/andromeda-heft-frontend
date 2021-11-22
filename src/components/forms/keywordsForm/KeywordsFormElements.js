import styled from "styled-components";
import { H1 } from "../../../theme/Fonts";

export const FormControl = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: center;
`;

export const FormH1 = styled(H1)`
  margin-bottom: 60px;
  color: ${({ theme }) => theme.palette.colors.onBackground};
`;
