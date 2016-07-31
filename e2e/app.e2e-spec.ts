import { AngularAnalyticsPage } from './app.po';

describe('angular-analytics App', function() {
  let page: AngularAnalyticsPage;

  beforeEach(() => {
    page = new AngularAnalyticsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
