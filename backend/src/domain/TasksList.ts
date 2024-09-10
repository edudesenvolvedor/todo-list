import MaxLengthExceededError from '../errors/MaxLengthExceededError';
import type Task from './Task';

export default class TasksList {
  private title: string;
  private list: Task[] = [];
  private maximumNumberTasks = 50;

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
    if (this.isMaxTasksExceeded())
      throw new MaxLengthExceededError('Exceeded maximum number of tasks');
    this.list.push(task);
  }

  public isMaxTasksExceeded(): boolean {
    return this.list.length === this.maximumNumberTasks;
  }

  public getTitle(): string {
    return this.title;
  }

  public getList(): Task[] {
    return this.list;
  }
}
