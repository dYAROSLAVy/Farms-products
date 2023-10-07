import styled from "styled-components";
import { P, Section } from "/src/components/styled";
import aboutImage from "/src/assets/about.svg";

export const StyledAbout = styled(Section)`
  position: relative;
  z-index: 1;
  padding: 183px 655px 183px 90px;
  background-color: ${(props) => props.theme.colorForBackground};

  &:after {
    position: absolute;
    bottom: 0;
    right: ${(props) => props.theme.pagePadding};
    content: "";
    width: 446px;
    height: 563px;
    margin: auto;
    background-image: url(${aboutImage});
  }
`;

export const Text = styled(P)`
  margin-top: 24px;
`;
