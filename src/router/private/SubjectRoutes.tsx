import {
  MathScreen,
  CodingScreen,
  PhysicsScreen,
  ChemistryScreen,
} from "../../screens";

export const MATH = Object.freeze({
  id: "math",
  path: "/math",
  title: "Math",
  component: MathScreen,
});

export const CODING = Object.freeze({
  id: "coding",
  path: "/coding",
  title: "Coding",
  component: CodingScreen,
});

export const PHYSICS = Object.freeze({
  id: "physics",
  path: "/physics",
  title: "Physics",
  component: PhysicsScreen,
});

export const CHEMISTRY = Object.freeze({
  id: "chemistry",
  path: "/chemistry",
  title: "Chemistry",
  component: ChemistryScreen,
});
