import { GameContext } from 'context/GameContext';
import { useEffect, useContext, useCallback } from 'react';
import { KeyCodes } from 'services/wordleService/constants';
import { isLetter } from 'util/helpers/stringsHelper';

export default function useGame() {
  const { game, setGame } = useContext(GameContext);
  const tiles = game.board;

  const handleCharInput = useCallback(
    (value) => {
      const result = game.clone();
      result.assignTile(value);

      setGame(result);
    },
    [game, setGame]
  );

  const handleCharDeletion = useCallback(() => {
    const result = game.clone();
    result.deleteTile();
    setGame(result);
  }, [game, setGame]);

  const handleWordSubmission = useCallback(() => {
    const result = game.clone();
    try {
      result.submitWord();
    } catch (err) {
      alert('Word not finished');
    }
    setGame(result);
  }, [game, setGame]);

  useEffect(() => {
    const handleKeyDown = ({ key: char, which }) => {
      if (which === KeyCodes.ENTER) return handleWordSubmission();
      if (which === KeyCodes.BACKSPACE) return handleCharDeletion();

      if (!isLetter(char)) return;
      handleCharInput(char);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleCharInput, handleWordSubmission, handleCharDeletion]);

  return { tiles };
}
