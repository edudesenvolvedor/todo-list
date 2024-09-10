import type Task from './Task';

export default class TasksList {
  private title: string;
  private list: Task[] = [];

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

  public addTask(task: Task): void {
    this.list.push(task);
  }

  public getTitle(): string {
    return this.title;
  }

  public getList(): Task[] {
    return this.list;
  }
}
