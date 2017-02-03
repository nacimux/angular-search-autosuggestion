import { AngularSearchAutocompletePage } from './app.po';

describe('angular-search-autocomplete App', function() {
  let page: AngularSearchAutocompletePage;

  beforeEach(() => {
    page = new AngularSearchAutocompletePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
