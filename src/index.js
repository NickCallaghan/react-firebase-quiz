import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import Firebase from "./components/Firebase/Firebase";
import { FirebaseContext } from "./components/Firebase/FirebaseContext";
import GameOptionsProvider from "./contexts/GameOptionsContext";

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={new Firebase()}>
      <GameOptionsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GameOptionsProvider>
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
