import styled, { css } from "styled-components";
import Ul from "/src/components/styled/ul/ul";
import Button from "/src/components/styled/button/button";

export const TabsList = styled(Ul)`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const TabButton = styled(Button)`
  padding: 8px 12px;
  font-size: 14px;
  line-height: 21px;
  font-weight: 400;
  ${(props) =>
    props.$isSelect
      ? css`
          background-color: ${props.theme.colorForGoodOwner};
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: ${props.theme.colorWhite};
        `
      : css`
          background-color: ${props.theme.colorGray};
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: ${props.theme.colorBlackForText};
        `}
`;

export const Content = styled.div`
  font-size: 14px;
  line-height: 21px;
  max-height: ${(props) => props.$maxContentHeight || "none"};
  overflow-y: scroll;
`;

export const TabsGrid = styled.div`
  display: grid;
  gap: 14px;
`;
