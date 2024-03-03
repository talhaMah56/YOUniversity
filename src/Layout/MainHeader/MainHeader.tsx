import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const MainHeader: React.FC = () => {
  return (
    <>
      <nav className="main-header">
        <NavLink to="/" className="logo">
          YOUniversity
        </NavLink>
        <ul className="main-nav">
          <li>About</li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
