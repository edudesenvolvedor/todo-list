import TasksList from '../domain/TasksList';
import Task from '../domain/Task';
import CreateNewTask from './CreateNewTask';

describe('Application: CreateNewTask', () => {
  it('should create a task', () => {
    const tasksList: TasksList = new TasksList('any_tasks');
    const sut: CreateNewTask = new CreateNewTask(tasksList);
    const task: Task = new Task('any_task');
    const newTask: Task = sut.execute(task);

    expect(newTask).toEqual(task);
  });
});
