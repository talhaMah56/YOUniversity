import React from "react";
import { Outlet } from "react-router-dom";

export const MainHeader: React.FC = () => {
  return (
    <>
      <p>This is The Main Header</p>
      <Outlet />
    </>
  );
};
