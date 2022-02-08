import { GameContext } from 'context/GameContext';
import { useEffect, useContext } from 'react';
import { isLetter } from 'util/helpers/stringsHelper';

export default function useGame() {
  const { game, handleCharInput } = useContext(GameContext);
  const tiles = game.board.tiles;

  useEffect(() => {
    const handleKeyDown = ({ key: char }) => {
      if (!isLetter(char)) return;
      handleCharInput(char);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleCharInput]);

  return { tiles };
}
