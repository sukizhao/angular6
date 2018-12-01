import { AngularRoutingDemo02Page } from './app.po';

describe('angular-routing-demo02 App', () => {
  let page: AngularRoutingDemo02Page;

  beforeEach(() => {
    page = new AngularRoutingDemo02Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
