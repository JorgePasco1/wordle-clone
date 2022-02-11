import { GameStatuses, TileStatuses, WordleBoardSizes } from './constants';
import { RowNotFinishedError } from './errors';

class Tile {
  character = null;
  status = TileStatuses.UNVISITED;
}

class Wordle {
  constructor() {
    this.board = Wordle.createBoard(
      WordleBoardSizes.ROWS,
      WordleBoardSizes.COLS
    );
    this.targetWord = 'debug';
    this.currentPos = { i: 0, j: 0 };
    this.gameStatus = GameStatuses.PLAYING;
  }

  clone() {
    const result = new Wordle();
    result.board = this.board?.map((row) => row.map((tile) => ({ ...tile })));
    result.targetWord = this.targetWord;
    result.currentPos = { ...this.currentPos };
    result.gameStatus = this.gameStatus;
    return result;
  }

  assignTile(character) {
    if (Wordle.isRowFinished(this) || this.gameOver()) return;

    const { i, j } = this.currentPos;
    this.board[i][j].character = character.toLowerCase();
    this.currentPos.j += 1;
  }

  deleteTile() {
    if (this.gameOver()) return;
    const { i, j } = this.currentPos;
    if (j === 0) return;
    // We need to go back 1 step since we move forward after
    // assigning a tile
    this.board[i][j - 1].character = null;
    this.currentPos.j -= 1;
  }

  submitWord() {
    if (!Wordle.isRowFinished(this)) throw new RowNotFinishedError();
    this.checkRow();
    if (this.hasWon()) {
      return this.setStatus(GameStatuses.WON);
    }
    if (this.hasLost()) {
      return this.setStatus(GameStatuses.LOST);
    }
    this.moveToNextRow();
  }

  checkRow() {
    const { i } = this.currentPos;
    this.board[i].forEach((tile, idx) => {
      const char = tile.character;

      tile.status = TileStatuses.FAILED;
      if (this.targetWord.includes(char))
        tile.status = TileStatuses.PARTIAL_SUCCESS;

      if (this.targetWord[idx] === char) tile.status = TileStatuses.SUCCESS;
    });
  }

  moveToNextRow() {
    this.currentPos.j = 0;
    this.currentPos.i += 1;
  }

  hasWon() {
    return this.board[this.currentPos.i].every(
      (tile) => tile.status === TileStatuses.SUCCESS
    );
  }

  hasLost() {
    return this.currentPos.i === WordleBoardSizes.ROWS - 1 && !this.hasWon();
  }

  setStatus(status) {
    this.gameStatus = status;
    return status;
  }

  gameOver() {
    return [GameStatuses.WON, GameStatuses.LOST].includes(this.gameStatus);
  }

  static createBoard(height, width) {
    return Array.from({ length: height }, () =>
      Array.from({ length: width }, () => new Tile())
    );
  }

  static isRowFinished(wordle) {
    const currentRow = wordle.board[wordle.currentPos.i];
    return currentRow?.every((tile) => Boolean(tile.character));
  }
}

export default class WordleService {
  static createWordleGame() {
    return new Wordle();
  }
}
