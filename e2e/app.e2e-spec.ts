import { AngularSecondPage } from './app.po';

describe('angular-second App', () => {
  let page: AngularSecondPage;

  beforeEach(() => {
    page = new AngularSecondPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
