import { TileStatuses, WordleBoardSizes } from './constants';

class Tile {
  character = null;
  status = TileStatuses.UNVISITED;
}

class Board {
  constructor(width, height) {
    if (!width || !height) return;
    this.tiles = this.createBoard(width, height);
  }

  createBoard(width, height) {
    return Array.from({ length: height }, () =>
      Array.from({ length: width }, () => new Tile())
    );
  }

  clone() {
    const result = new Board();
    result.tiles = this.tiles.map((row) => row.map((tile) => ({ ...tile })));
    return result;
  }
}

class Wordle {
  board = new Board(WordleBoardSizes.COLS, WordleBoardSizes.ROWS);
  targetWord = 'debug';
  currentTile = { i: 0, j: 0 };

  clone() {
    const result = new Wordle();
    result.board = this.board.clone();
    result.targetWord = this.targetWord;
    result.currentTile = { ...this.currentTile };
    return result;
  }

  assignTile(character) {
    if (Wordle.isWordFinished(this)) return;

    const { i, j } = this.currentTile;
    this.board.tiles[i][j].character = character.toLowerCase();
    this.currentTile.j += 1;
  }

  static isWordFinished(wordle) {
    const currentRow = wordle.board.tiles[wordle.currentTile.i];
    return currentRow?.every((tile) => Boolean(tile.character));
  }
}

export default class WordleService {
  static createWordleGame() {
    return new Wordle();
  }
}
