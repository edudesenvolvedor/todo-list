import Task from '../domain/Task';
import CreateNewTask from './CreateNewTask';
import TaskRepositoryInMemory from '../repository/TaskRepositoryInMemory';

describe('Application: CreateNewTask', () => {
  it('should create a task', () => {
    const sut: CreateNewTask = new CreateNewTask(new TaskRepositoryInMemory());
    const task: Task = new Task('any_task');
    const newTask: Task = sut.execute(task);

    expect(newTask).toEqual(task);
  });

  it('should be possible to save the task', () => {
    const repository: TaskRepositoryInMemory = new TaskRepositoryInMemory();
    const sut: CreateNewTask = new CreateNewTask(repository);
    const task: Task = new Task('any_task');
    sut.execute(task);

    expect(repository.getAll()[0]).toEqual(task);
  });
});
