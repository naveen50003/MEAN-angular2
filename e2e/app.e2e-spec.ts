import { Angular2viewPage } from './app.po';

describe('angular2view App', function() {
  let page: Angular2viewPage;

  beforeEach(() => {
    page = new Angular2viewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
