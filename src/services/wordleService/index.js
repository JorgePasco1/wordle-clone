import { TileStatuses, WordleBoardSizes } from './constants';

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
  }

  clone() {
    const result = new Wordle();
    result.board = this.board?.map((row) => row.map((tile) => ({ ...tile })));
    result.targetWord = this.targetWord;
    result.currentPos = { ...this.currentPos };
    return result;
  }

  assignTile(character) {
    if (Wordle.isRowFinished(this)) return;

    const { i, j } = this.currentPos;
    this.board[i][j].character = character.toLowerCase();
    this.currentPos.j += 1;
  }

  deleteTile() {
    const { i, j } = this.currentPos;
    if (j === 0) return;
    // We need to go back 1 step since we move forward after
    // assigning a tile
    this.board[i][j - 1].character = null;
    this.currentPos.j -= 1;
  }

  submitWord() {
    if (!Wordle.isRowFinished(this)) throw new Error('Word not finished');

    const checkRow = () => {
      console.log('board, pos', this.board, this.currentPos);
      this.board[this.currentPos.i].forEach((tile, idx) => {
        console.log(tile.character);
      });
    };

    checkRow();
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
