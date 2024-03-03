import React from "react";
import { Router } from "./router";
import "./index.css";

import { initializeApp } from "firebase/app";
import { config } from "./config/config";

export const firebase = initializeApp(config.firebaseConfig);

function App() {
  return <Router />;
}

export default App;
