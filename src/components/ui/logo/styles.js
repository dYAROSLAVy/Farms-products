import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const logoStyle = css`
  display: flex;
  align-items: center;
  gap: 0 24px;
  height: 44px;
`;

export const StyledLogo = styled(Link)`
  ${logoStyle}
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

export const StyledLogoMain = styled.span`
  ${logoStyle}
  pointer-events:none;
`;

export const Text = styled.span`
  font-size: 28px;
  line-height: 32px;
  font-weight: 700;
  color: ${(props) => props.theme.colorBlackForText};
`;
