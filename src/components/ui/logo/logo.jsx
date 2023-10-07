import React from "react";
import { ReactComponent } from "/src/assets/logo.svg";
import { StyledLogo, Text, StyledLogoMain } from "./styles";
import { AppRoute } from "/src/const";
import { useLocation } from "react-router-dom";

function Logo() {
  const { pathname } = useLocation();
  return pathname === AppRoute.MAIN ? (
    <StyledLogoMain>
      <ReactComponent />
      <Text>Фермерские продукты</Text>
    </StyledLogoMain>
  ) : (
    <StyledLogo to={AppRoute.MAIN}>
      <ReactComponent />
      <Text>Фермерские продукты</Text>
    </StyledLogo>
  );
}

export default Logo;
