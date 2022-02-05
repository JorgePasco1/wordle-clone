import WordleService from 'services/wordleService';

export default function useGame() {
  const game = WordleService.createWordleGame();
  return game;
}
