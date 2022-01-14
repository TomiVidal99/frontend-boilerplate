import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "@styles/index.css";
import App from "./app/App.tsx";

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
