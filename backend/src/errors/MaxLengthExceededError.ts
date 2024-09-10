export default class MaxLengthExceededError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'MaxLengthExceededError';
  }
}
