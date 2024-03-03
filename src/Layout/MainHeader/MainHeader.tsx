import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const MainHeader: React.FC = () => {
  return (
    <>
      <nav className="main-header">
        <NavLink to="/" className="logo">
          <div>
          <img id='nav-logo' src={require("/Users/ameerabdelnasser/YOUniversity/src/images/YNV-logo-1.png")}/>
          </div>
        </NavLink>
        <ul className="main-nav">
          <li>About</li>
          <li>Login</li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
