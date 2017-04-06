import { TAppPage } from './app.po';

describe('t-app App', () => {
  let page: TAppPage;

  beforeEach(() => {
    page = new TAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
