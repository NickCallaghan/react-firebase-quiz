import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GameOptionsContext } from "../contexts/GameOptionsContext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";

export default function Home(props) {
  const { gameOptions, setGameOptions } = useContext(GameOptionsContext);
  const { selectedDifficulty, selectedCategory } = gameOptions;

  const difficultyLevels = [
    { value: "easy", label: "Easy" },
    { value: "medium", label: "Medium" },
    { value: "hard", label: "Hard" },
    { value: "any", label: "Any Difficulty" },
  ];

  const quizCategories = [
    { value: 12, label: "Entertainment: Music" },
    { value: 9, label: "General Knowledge" },
    { value: 22, label: "Geography" },
    { value: 18, label: "Science: Computers" },
  ];

  const setDifficulty = (e) => {
    const updatedOptions = {
      ...gameOptions,
      selectedDifficulty: e.target.value,
    };
    setGameOptions(updatedOptions);
  };

  const setCategory = (e) => {
    const updatedOptions = {
      ...gameOptions,
      selectedCategory: e.target.value,
    };
    setGameOptions(updatedOptions);
  };

  const handleHighScore = () => {
    props.history.push("/high-scores");
  };

  const handleStartGame = () => {
    props.history.push("/game");
  };

  return (
    <div className="container">
      <h1>React Quiz App</h1>
      <div className="game-options">
        <h2 className="game-options-heading">Choose Quiz Settings</h2>
        <Dropdown
          value={selectedCategory}
          options={quizCategories}
          onChange={(e) => setCategory(e)}
          placeholder="Select a Category"
        />

        <Dropdown
          value={selectedDifficulty}
          options={difficultyLevels}
          onChange={(e) => setDifficulty(e)}
          placeholder="Select a Difficulty"
        />
      </div>

      <Button
        label="Start Game"
        onClick={handleStartGame}
        disabled={!selectedDifficulty || !selectedCategory}
      />

      <Button
        label="View High Scores"
        className="p-button-secondary"
        onClick={handleHighScore}
      />
    </div>
  );
}
