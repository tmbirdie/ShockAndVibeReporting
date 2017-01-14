import { MyTaskListClientPage } from './app.po';

describe('my-task-list-client App', function() {
  let page: MyTaskListClientPage;

  beforeEach(() => {
    page = new MyTaskListClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
