import { RatatouilleAppPage } from './app.po';

describe('ratatouille-app App', () => {
  let page: RatatouilleAppPage;

  beforeEach(() => {
    page = new RatatouilleAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
