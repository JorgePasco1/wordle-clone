import { GameContext } from 'context/GameContext';
import { useEffect, useContext, useCallback } from 'react';
import { GameStatuses, KeyCodes } from 'services/wordleService/constants';
import {
  InvalidWordError,
  RowNotFinishedError,
} from 'services/wordleService/errors';
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

  const handleGameOver = (status) => {
    const messageMap = {
      [GameStatuses.WON]: 'You won!',
      [GameStatuses.LOST]: 'You lost!',
    };
    alert(messageMap[status]);
  };

  const handleWordSubmission = useCallback(() => {
    const result = game.clone();
    try {
      const status = result.submitWord();
      if (status) handleGameOver(status);
      setGame(result);
    } catch (err) {
      if (err instanceof RowNotFinishedError) {
        alert('Word not finished');
      } else if (err instanceof InvalidWordError) {
        alert('Invalid word');
      } else {
        throw err;
      }
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
