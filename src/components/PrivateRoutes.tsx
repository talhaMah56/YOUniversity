import React from "react";
import { RouteType } from "../types";
import { Route, Routes } from "react-router-dom";
import { ErrorScreen, HomeScreen } from "../screens";
import { MainHeader } from "../Layout";
import { CalculusScreen } from "../screens/MathScreen/CalculusScreen";
import { Limits1Screen } from "../screens/MathScreen/CalculusScreen/Limits1Screen";
import { AuthRoute } from "./AuthRoute";
import { LoginScreen } from "../screens/LoginScreen";

type IProps = {
  routes: RouteType[];
};

export const PrivateRoutes: React.FC<IProps> = ({ routes }) => {
  return (
    <Routes>
      <Route path="/" element={<MainHeader />}>
        <Route
          path="/"
          element={
            <AuthRoute>
              <HomeScreen />
            </AuthRoute>
          }
        />
        {routes.map((item) => (
          <Route key={item.id} path={item.path} element={<item.component />} />
        ))}
        <Route path="math/calculus" element={<CalculusScreen />} />
        <Route path="math/calculus/limits_1" element={<Limits1Screen />} />
        <Route path="login" element={<LoginScreen />} />
      </Route>
      <Route path="*" element={<ErrorScreen />} />
    </Routes>
  );
};
