import React from "react";
import { RouteType } from "../types";
import { Route, Routes } from "react-router-dom";
import { ErrorScreen, HomeScreen } from "../screens";
import { MainHeader } from "../Layout";

type IProps = {
  routes: RouteType[];
};

export const PrivateRoutes: React.FC<IProps> = ({ routes }) => {
  return (
    <Routes>
      <Route path="/" element={<MainHeader />}>
        <Route path="/" element={<HomeScreen />} />
        {routes.map((item) => (
          <Route key={item.id} path={item.path} element={<item.component />} />
        ))}
      </Route>
      <Route path="*" element={<ErrorScreen />} />
    </Routes>
  );
};
