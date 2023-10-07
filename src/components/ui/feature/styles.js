import styled from "styled-components";
import { Img } from "/src/components/styled";

export const Feature = styled.article`
  width: 540px;
  height: 197px;
  padding: 20px;
  background-color: ${(props) => (props.isNegative ? "#f8ddd7" : "#e1edce")};
`;

export const Image = styled(Img)`
  width: 56px;
  height: 56px;
`;

export const Header = styled.header`
  display: flex;
  gap: 0 20px;
  margin-bottom: 20px;
`;

export const Owner = styled.span`
  display: inline-block;
  margin-bottom: 4px;
  padding: 4px 10px;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) =>
    props.isNegative
      ? props.theme.colorforBadOwnwer
      : props.theme.colorForGoodOwner};
`;
