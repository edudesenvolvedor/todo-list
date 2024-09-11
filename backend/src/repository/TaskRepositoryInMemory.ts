import Task from '../domain/Task';
import type Repository from './Repository';

export default class TaskRepositoryInMemory implements Repository {
  private list: Task[] = [];
  save(task: Task): Task {
    this.list.push(task);
    return task;
  }

  getAll(): Task[] {
    return this.list;
  }
}
