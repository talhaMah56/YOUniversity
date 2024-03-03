import React from "react";
import { MainHero } from "../../Layout";
import { SubjectComponent } from "../../components/SubjectComponent";

import { MATH, CODING, CHEMISTRY, PHYSICS } from "../../router/private";

export const HomeScreen: React.FC = () => {
  return (
    <>
      <MainHero />
      <div className="learn-more">
        <h1 className="heading-secondary">What is YOUniversity?</h1>
        <button className="learn-more-button">learn more</button>
      </div>
      <div className="subject-table">
        <SubjectComponent
          subjectRoute={MATH}
          color="red"
          description="this is math"
        />
        <SubjectComponent
          subjectRoute={CODING}
          color="gray"
          description="this is coding"
        />
        <SubjectComponent
          subjectRoute={CHEMISTRY}
          color="yellow"
          description="this is chemistry"
        />
        <SubjectComponent
          subjectRoute={PHYSICS}
          color="blue"
          description="this is physics"
        />
      </div>
    </>
  );
};
