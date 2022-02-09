export class RowNotFinishedError extends Error {
  constructor(message) {
    super(message);
    this.name = 'RowNotFinishedError';
  }
}
