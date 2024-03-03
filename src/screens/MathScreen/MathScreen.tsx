import React from "react";
import { MathTopics } from "../../data/MathTopics";
import { CardComponent } from "../../UI";

export const MathScreen: React.FC = () => {
  return (
    <>
      <h1 className="subject-screen-header">Maths</h1>
      <div className="subject-page-grid">
        <div className="topic-table">
          {MathTopics.map((item) => (
            <CardComponent
              key={item.title}
              title={item.title}
              color={"red"}
              className="subtopic-description"
              path={item.title.toLowerCase()}
            >
              <p>hello</p>
              <ul>
                {item.subtopics.map((subtopic) => (
                  <li key={subtopic.title}>{subtopic.title}</li>
                ))}
              </ul>
            </CardComponent>
          ))}
        </div>
        <div></div>
      </div>
    </>
  );
};
