import { createContext, useState } from 'react';

import WordleService from 'services/wordleService';

export const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
  const [game, setGame] = useState(WordleService.createWordleGame());

  return (
    <GameContext.Provider value={{ game, setGame }}>
      {children}
    </GameContext.Provider>
  );
};
