describe('[E2E Test] - HomeComponent ', () => {
  beforeEach(() => {
    browser.get('/');
  });

  it('should have <dml-home>', () => {
    let home = element(by.css('cep-app dml-home'));
    expect(home.isPresent()).toEqual(true);
  });
});
