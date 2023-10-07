import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: ${(props) => (props.$minWidth ? `${props.$minWidth}px` : "100%")};
  max-width: 700px;
  min-height: 60px;
  font-size: ${(props) => props.theme.fontSizeDefault};
  font-weight: 700;
  line-height: 27px;
  background-color: ${(props) => props.theme.colorForButton};
  color: ${(props) => props.theme.colorWhite};
  border: 0;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colorForButtonHover};
    box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.14) inset;
  }

  &:active {
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.5;
    box-shadow: none;
    background-color: ${(props) => props.theme.buttonColor};
  }
`;
