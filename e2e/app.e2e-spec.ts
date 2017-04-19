import { NgClashRoPage } from './app.po';

describe('ng-clash-ro App', () => {
  let page: NgClashRoPage;

  beforeEach(() => {
    page = new NgClashRoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
