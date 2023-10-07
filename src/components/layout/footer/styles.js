import styled from "styled-components";
import { Section } from "/src/components/styled";

export const StyledSection = styled(Section)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => props.theme.pageWidth};
  min-height: 79px;
  margin: 0 auto;
  padding: 0 90px;
  background-color: ${(props) => props.theme.colorWhite};
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Copyright = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 148px;
  max-width: 700px;
  font-size: ${(props) => props.theme.fontSizeDefault};
`;
