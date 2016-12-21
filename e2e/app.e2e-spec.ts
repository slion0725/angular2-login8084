import { Angular2Login8084Page } from './app.po';

describe('angular2-login8084 App', function() {
  let page: Angular2Login8084Page;

  beforeEach(() => {
    page = new Angular2Login8084Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
