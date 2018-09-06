describe('circleci app homepage', function() {
  it('should add a button', function() {
    browser.waitForAngularEnabled(false);
    browser.get('http://localhost:3000');

    let answer = element(by.css('[id="answer"]'));
    let button = element(by.css('[id="button"]'));

    expect(answer.getText()).toEqual('Not yet =(');

    button.click();

    expect(answer.getText()).toEqual('Now you\'ve done it!');

  });
});