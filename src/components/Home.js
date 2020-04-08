import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GameOptionsContext } from "../contexts/GameOptionsContext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";

export default function Home() {
  const { gameOptions, setGameOptions } = useContext(GameOptionsContext);
  const { selectedDifficulty, selectedCategory } = gameOptions;

  const difficultyLevels = [
    { value: "easy", label: "Easy" },
    { value: "medium", label: "Medium" },
    { value: "hard", label: "Hard" },
    { value: "", label: "Any Difficulty" },
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

  return (
    <>
      <h1>React Quiz App</h1>

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

      <Link to="/game">
        <Button label="Start Game" />
      </Link>
      <Link to="/high-scores">
        <Button label="View High Scores" className="p-button-secondary" />
      </Link>
    </>
  );
}
