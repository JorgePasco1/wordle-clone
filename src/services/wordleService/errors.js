export class RowNotFinishedError extends Error {
  constructor(message) {
    super(message);
    this.name = 'RowNotFinishedError';
  }
}

export class InvalidWordError extends Error {
  constructor(message) {
    super(message);
    this.name = 'InvalidWordError';
  }
}
