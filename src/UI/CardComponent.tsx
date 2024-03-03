import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type Iprop = {
  title: string;
  path: string;
  color: string;
  className?: string;
  children: ReactNode;
};

export const CardComponent: React.FC<Iprop> = ({
  title,
  path,
  color,
  className,
  children,
}) => {
  const navigate = useNavigate();

  return (
    <div className="subject-component" onClick={() => navigate(path)}>
      <h1
        style={{ backgroundColor: color }}
        className="subject-component-heading"
      >
        {title}
      </h1>
      <hr />
      <div className={className}>{children}</div>
    </div>
  );
};
