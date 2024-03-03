import React from "react";
import { MathTopics } from "../../../data/MathTopics";
import { CardComponent } from "../../../UI";

export const CalculusScreen: React.FC = () => {
  const calculusSubptopics = MathTopics[0].subtopics;
  console.log(calculusSubptopics);
  return (
    <>
      <h1 className="subject-screen-header">Calculus</h1>
      <div className="subtopic-grid">
        {calculusSubptopics.map((subtopic) => (
          <CardComponent
            key={subtopic.title}
            title={subtopic.title}
            path={subtopic.path.trim().toLowerCase()}
            color="red"
            className="subtopic-cards"
          >
            <p>hello from {subtopic.title}</p>
          </CardComponent>
        ))}
      </div>
    </>
  );
};
