import React from "react";
import { MainHero } from "../../Layout";

import { CardComponent } from "../../UI";

export const HomeScreen: React.FC = () => {
  return (
    <>
      <MainHero />
      <div className="learn-more">
        <h1 className="heading-secondary">What is YOUniversity?</h1>
        <button className="learn-more-button">learn more</button>
      </div>
      <div className="subject-table">
        <CardComponent title="Math" path="/math" color="red">
          <p>this is math</p>
        </CardComponent>
        <CardComponent title="Coding" path="/coding" color="gray">
          <p>this is coding</p>
        </CardComponent>
        <CardComponent title="Chemistry" path="/chemistry" color="yellow">
          <p>this is chemistry</p>
        </CardComponent>
        <CardComponent title="Physics" path="/physics" color="blue">
          <p>this is physics</p>
        </CardComponent>
      </div>
    </>
  );
};
