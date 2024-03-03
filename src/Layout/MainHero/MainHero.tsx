import React from "react";
import { NavLink } from "react-router-dom";
import { HeroTable } from "../../components";

export const MainHero = (): JSX.Element => {
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero-text">
          <h1 className="heading-primary">
            <div>
            

            </div>
          </h1>
          <p className="hero-description">Learn some stuff</p>
          <NavLink to="/">
            <button className="cta-button">Learn More</button>
          </NavLink>
        </div>
        <HeroTable />
      </div>
    </section>
  );
};
