import { createContext, useState } from 'react';

import WordleService from 'services/wordleService';

export const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
  const [game, setGame] = useState(WordleService.createWordleGame());

  const handleCharInput = (value) => {
    const result = game.clone();
    result.assignTile(value);

    setGame(result);
  };

  return (
    <GameContext.Provider value={{ game, handleCharInput }}>
      {children}
    </GameContext.Provider>
  );
};
