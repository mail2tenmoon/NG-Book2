import { SimpleRedditClonePage } from './app.po';

describe('simple-reddit-clone App', function() {
  let page: SimpleRedditClonePage;

  beforeEach(() => {
    page = new SimpleRedditClonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
