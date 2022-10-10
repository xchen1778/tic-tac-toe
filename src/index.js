import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/index.scss";
import App from "./App";
import { GameContextProvider } from "./contexts/game.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GameContextProvider>
    <div className="overflow-hidden">
      <App />
    </div>
  </GameContextProvider>
);
