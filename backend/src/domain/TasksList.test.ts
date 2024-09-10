import TasksList from './TasksList';

describe('List Tasks', () => {
  it('should change the title of the list', () => {
    const sut = new TasksList('any_list');
    sut.alterTitle('new_title');
    expect(sut.getTitle()).toEqual('new_title');
  });
});
