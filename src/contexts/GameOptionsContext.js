import React, { createContext, useState } from "react";

const initalValue = {
  selectedDifficulty: "easy",
  selectedCategory: 9,
};

export const GameOptionsContext = createContext();

function GameOptionsProvider(props) {
  const [gameOptions, setGameOptions] = useState(initalValue);
  return (
    <GameOptionsContext.Provider value={{ gameOptions, setGameOptions }}>
      {props.children}
    </GameOptionsContext.Provider>
  );
}

export default GameOptionsProvider;
