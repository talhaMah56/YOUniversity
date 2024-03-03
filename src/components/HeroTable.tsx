import React from "react";
import { useNavigate } from "react-router-dom";

export const HeroTable: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-table">
      <div className="hero-table-element" onClick={() => navigate("coding")}>
        Coding
      </div>
      <div className="hero-table-element" onClick={() => navigate("math")}>
        Math
      </div>
      <div className="hero-table-element" onClick={() => navigate("physics")}>
        Physics
      </div>
      <div className="hero-table-element" onClick={() => navigate("chemistry")}>
        Chemistry
      </div>
    </div>
  );
};
