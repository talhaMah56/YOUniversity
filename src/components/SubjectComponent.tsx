import React from "react";
import { RouteType } from "../types";
import { useNavigate } from "react-router-dom";

type Iprops = {
  subjectRoute: RouteType;
  description: string;
  color: string;
};

export const SubjectComponent: React.FC<Iprops> = ({
  subjectRoute,
  description,
  color,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="subject-component"
      onClick={() => navigate(subjectRoute.path)}
    >
      <h1
        style={{ backgroundColor: color }}
        className="subject-component-heading"
      >
        {subjectRoute.title}
      </h1>
      <hr />
      <p>{description}</p>
    </div>
  );
};
