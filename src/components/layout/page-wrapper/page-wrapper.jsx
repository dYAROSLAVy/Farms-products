import React from "react";
import Header from "/src/components/layout/header/header";
import { Main } from "./styles";
import Footer from "/src/components/layout/footer/footer";
import { Outlet } from "react-router-dom";

function PageWrapper() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default PageWrapper;
