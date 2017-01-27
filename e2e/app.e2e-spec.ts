import { AngTtestPage } from './app.po';

describe('ang-ttest App', function() {
  let page: AngTtestPage;

  beforeEach(() => {
    page = new AngTtestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
