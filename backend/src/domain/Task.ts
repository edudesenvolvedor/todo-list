import MaxLengthExceededError from '../errors/MaxLengthExceededError';

export default class Task {
  private title: string;
  private maxAmountChar = 50;

  constructor(title: string) {
    this.title = title;
    if (this.isExceedingMaxLength())
      throw new MaxLengthExceededError('Title with more than 50 characters');
  }

  private isExceedingMaxLength(): boolean {
    return this.title.length > this.maxAmountChar;
  }

  public changeTitle(title: string) {
    if (!title.length) {
      this.title = 'New Task';
      return;
    }
    this.title = title;
  }

  public getTitle(): string {
    return this.title;
  }
}
