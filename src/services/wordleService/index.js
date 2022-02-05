import { TileStatuses, WordleBoardSizes } from './constants';

class Tile {
  character = null;
  status = TileStatuses.UNVISITED;
}

class Board {
  constructor(width, height) {
    this.tiles = this.createBoard(width, height);
  }

  createBoard(width, height) {
    return Array.from({ length: height }, () =>
      Array.from({ length: width }, () => new Tile())
    );
  }
}

class Wordle {
  board = new Board(WordleBoardSizes.COLS, WordleBoardSizes.ROWS);
  targetWord = 'debug';
  currentlyGuessingWord = '';
  currentTile = this.board.tiles[0][0];
}

export default class WordleService {
  static createWordleGame() {
    return new Wordle();
  }
}
