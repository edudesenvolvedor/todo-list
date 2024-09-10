import TasksList from './TasksList';
import Task from './Task';
import MaxLengthExceededError from '../errors/MaxLengthExceededError';

describe('List Tasks', () => {
  it('should change the title of the list', () => {
    const sut: TasksList = new TasksList('any_list');
    sut.changeTitle('new_title');
    expect(sut.getTitle()).toEqual('new_title');
  });

  it('the title should not be empty', () => {
    const sut: TasksList = new TasksList('any_list');
    sut.changeTitle('');
    expect(sut.getTitle()).not.toEqual('');
    expect(sut.getTitle()).toEqual('New Tasks List');
  });

  it('should add a task to the list', () => {
    const sut: TasksList = new TasksList('any_list');
    const task: Task = new Task('any_task');
    sut.addTask(task);
    expect(sut.getList().length).toBe(1);
    expect(sut.getList()[0]).toEqual(task);
  });

  it('should be no more than 50 tasks on the list', () => {
    const sut: TasksList = new TasksList('any_list');

    expect(() => {
      for (let i = 0; i <= 50; i++) {
        const task: Task = new Task('any_task');
        sut.addTask(task);
      }
    }).toThrow(new MaxLengthExceededError('Exceeded maximum number of tasks'));
  });
});
