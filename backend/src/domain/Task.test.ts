import Task from './Task';

describe('Task', () => {
  it('should be able to create a task', () => {
    const sut = new Task('any_task');
    expect(sut.getTitle()).toEqual('any_task');
  });

  it('should changes the title', () => {
    const sut = new Task('any_task');
    sut.changeTitle('new_title');
    expect(sut.getTitle()).toEqual('new_title');
  });

  it('the title should not be empty', () => {
    const sut = new Task('any_task');
    sut.changeTitle('');
    expect(sut.getTitle()).not.toEqual('');
    expect(sut.getTitle()).toEqual('New Task');
  });
});
