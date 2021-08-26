import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./assets/main.css";

import { GlobalProvider } from "./Context/GlobalState";

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
