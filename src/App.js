import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Game from "./components/Game";
import HighScores from "./components/HighScores";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Switch>
          <Route
            exact
            path="/"
            render={(routeProps) => <Home {...routeProps} />}
          />
          <Route
            exact
            path="/game"
            render={(routeProps) => <Game {...routeProps} />}
          />
          <Route
            exact
            path="/high-scores"
            render={(routeProps) => <HighScores />}
          />
          <Route render={(routeProps) => <Home {...routeProps} />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
