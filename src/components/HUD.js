import React from "react";
import ProgressBar from "./ProgressBar";

export default function HUD(props) {
  const { score, questionsAnswered } = props;
  return (
    <div id="hud">
      <div className="hud-item">
        <p className="hud-prefix">Question: {questionsAnswered}/10</p>
        <ProgressBar max={10} current={questionsAnswered} />
      </div>
      <div className="hud-item">
        <p className="hud-prefix">Score:</p>
        <h1 className="hud-main-text">{score}</h1>
      </div>
    </div>
  );
}
