import type Task from '../domain/Task';
import type TasksList from '../domain/TasksList';

export default class CreateNewTask {
  constructor(private tasksList: TasksList) {}

  public execute(task: Task): Task {
    return task;
  }
}
