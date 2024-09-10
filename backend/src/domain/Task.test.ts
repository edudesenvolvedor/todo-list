import Task from './Task';

describe('Task', () => {
  it('should be able to create a task', () => {
    const sut = new Task('any_task');
    expect(sut.getTitle()).toBe('any_task');
  });
});
