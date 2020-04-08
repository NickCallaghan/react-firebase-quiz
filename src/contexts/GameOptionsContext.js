import React, { createContext, useState } from "react";

const initalValue = {
  selectedDifficulty: null,
  selectedCategory: null,
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
