import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { FoodContextProvider } from "./context/FoodContext";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FoodContextProvider>
    <Router>
      <App />
    </Router>
  </FoodContextProvider>
);
