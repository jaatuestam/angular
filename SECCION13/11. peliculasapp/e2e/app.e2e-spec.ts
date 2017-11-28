import { PeliculasappPage } from './app.po';

describe('peliculasapp App', () => {
  let page: PeliculasappPage;

  beforeEach(() => {
    page = new PeliculasappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
