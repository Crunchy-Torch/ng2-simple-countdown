import { Ng2SimpleCountdownPage } from './app.po';

describe('ng2-simple-countdown App', () => {
  let page: Ng2SimpleCountdownPage;

  beforeEach(() => {
    page = new Ng2SimpleCountdownPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
