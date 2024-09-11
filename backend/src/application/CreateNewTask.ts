import type Task from '../domain/Task';
import type Repository from '../repository/Repository';

export default class CreateNewTask {
  constructor(private repository: Repository) {}

  public execute(task: Task): Task {
    const taskSave: Task = this.repository.save(task) as Task;
    return taskSave;
  }
}
