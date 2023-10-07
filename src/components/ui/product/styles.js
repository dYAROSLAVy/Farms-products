import styled from "styled-components";
import Panel from "/src/components/ui/panel/panel";
import Img from "/src/components/styled/img/img";

export const ProductWrapper = styled(Panel)`
  display: grid;
  grid-template-columns: 248px 420px;
  grid-template-rows: 246px;
  gap: 20px 16px;
`;

export const ProductImg = styled(Img)`
  width: 248px;
  height: 248px;
`;

export const Price = styled.span`
  padding: 4px 8px;
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  background-color: ${(props) => props.theme.colorForBackground};
  justify-self: start;
  align-self: end;
`;

export const ProductInner = styled.div`
  display: grid;
  gap: 16px;
  grid-template-rows: 31px 1fr 25px;
`;
