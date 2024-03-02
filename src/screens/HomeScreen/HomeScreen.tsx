import React from "react";
import { MainHero } from "../../Layout";

export const HomeScreen: React.FC = () => {
  return (
    <>
      <MainHero />
      <div className="learn-more">
        <h1 className="heading-secondary">What is YOUniversity?</h1>
        <button className="learn-more-button">learn more</button>
      </div>
    </>
  );
};
