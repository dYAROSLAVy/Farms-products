import React from "react";
import { AppRoute } from "/src/const";
import { useLocation } from "react-router-dom";
import Button from "/src/components/ui/button/button";
import { StyledButton } from "./styles";

const buttons = [
  {
    to: AppRoute.MAIN,
    button: (
      <StyledButton minWidth={260} key={AppRoute.MAIN} link={AppRoute.MAIN}>
        Главная
      </StyledButton>
    )
  },
  {
    to: AppRoute.ORDER,
    button: (
      <Button minWidth={260} key={AppRoute.ORDER} link={AppRoute.ORDER}>
        Купить
      </Button>
    )
  }
];

function Nav() {
  const pageUrl = useLocation().pathname;
  return (
    <nav>
      {buttons
        .filter((button) => button.to !== pageUrl)
        .map((button) => button.button)}
    </nav>
  );
}

export default Nav;
