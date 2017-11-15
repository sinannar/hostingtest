import { SinannarPage } from './app.po';

describe('sinannar App', function() {
  let page: SinannarPage;

  beforeEach(() => {
    page = new SinannarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
