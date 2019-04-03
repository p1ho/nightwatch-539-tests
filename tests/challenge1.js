module.exports = {
  'Demo test challenge1': function (browser) {
    browser
      // .url('https://lizixiumsi.github.io/javascript_challenge/challenge1.html')
      .url('http://www.google.com')
      .waitForElementVisible('body')
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('input[name=btnK]')
      .click('input[name=btnK]')
      .pause(1000)
      .assert.containsText('#main', 'Night Watch')
      .end()
  }
}
