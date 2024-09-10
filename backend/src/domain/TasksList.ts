export default class TasksList {
  title: string;

  constructor(title: string) {
    this.title = title;
  }

  public changeTitle(title: string): void {
    if (!title.length) {
      this.title = 'New Tasks List';
      return;
    }
    this.title = title;
  }

  public getTitle(): string {
    return this.title;
  }
}
