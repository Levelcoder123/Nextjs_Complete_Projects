import React from "react";
import { MyHeader } from "../header/header";
import { MyFoot } from "../footer/footer";

export const MainLayout = ({ children }) => {
  return (
    <>
      <MyHeader />
      <main>
      {children}
      </main>
      <MyFoot />
    </>
  );
};
