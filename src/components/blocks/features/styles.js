import styled from "styled-components";
import { Section, Ul } from "/src/components/styled";

export const Features = styled(Section)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GridUl = styled(Ul)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 64px 0;
`;
