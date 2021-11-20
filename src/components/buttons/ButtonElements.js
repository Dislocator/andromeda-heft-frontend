import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme, primary }) =>
    primary ? theme.palette.colors.primary.primary50 : "#010606"};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ theme, dark }) =>
    dark ? "#010606" : theme.palette.colors.onPrimary};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ theme, primary }) =>
      primary ? theme.palette.colors.onPrimary : "#01BF71"};
  }
`;
