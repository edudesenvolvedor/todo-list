export default class Task {
  title: string;

  constructor(title: string) {
    this.title = title;
  }

  public getTitle(): string {
    return this.title;
  }
}
