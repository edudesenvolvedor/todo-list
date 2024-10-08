import Task from './Task';

describe('Task', () => {
  it('should be able to create a task', () => {
    const sut: Task = new Task('any_task');
    expect(sut.getTitle()).toEqual('any_task');
  });

  it('should changes the title', () => {
    const sut: Task = new Task('any_task');
    sut.changeTitle('new_title');
    expect(sut.getTitle()).toEqual('new_title');
  });

  it('the title should not be empty', () => {
    const sut: Task = new Task('any_task');
    sut.changeTitle('');
    expect(sut.getTitle()).not.toEqual('');
    expect(sut.getTitle()).toEqual('New Task');
  });

  it('should not be longer than 50 characters', () => {
    expect(() => {
      const sut: Task = new Task('a'.repeat(60));
    }).toThrow('Title with more than 50 characters');
  });
});
