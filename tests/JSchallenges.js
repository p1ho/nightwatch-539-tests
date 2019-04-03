var url = require('readline-sync').question('Enter URL to Test JSchallenges:\n')

module.exports = {
  'Challenge 1 Page Integrity Check': function (browser) {
    browser
      .url(url)
      .waitForElementVisible('body')
      .assert.visible('body')
    browser.expect.element('h1').to.be.present
    browser.expect.element('h1').text.to.equal('Challenge One')
    browser.expect.element('form').to.be.present
    /*
    You would write a statement for each essential element you are testing,
    omitted since this is a proof of concept right now.
     */
  },
  'Challenge 1 Email default hidden': function (browser) {
    browser
      .url(url)
      .waitForElementVisible('body')
      .assert.hidden('#emailfield')
      .end()
  },
  'Challenge 1 Checkbox default unchecked': function (browser) {
    browser
      .url(url)
      .waitForElementVisible('body')
      .expect.element('input[type=checkbox]').to.not.be.selected
    browser.end()
  },
  'Challenge 1 Email visible on check': function (browser) {
    browser
      .url(url)
      .waitForElementVisible('body')
      .click('input[type=checkbox]')
      .assert.visible('#emailfield')
      .end()
  },
  'Challenge 1 Email hidden again on uncheck': function (browser) {
    browser
      .url(url)
      .waitForElementVisible('body')
      .click('input[type=checkbox]')
      .click('input[type=checkbox]')
      .assert.hidden('#emailfield')
      .end()
  },
  'Challenge 1 Submission works': function (browser) {
    browser
      .url(url)
      .waitForElementVisible('body')
      .click('input[type=submit]')
      .assert.urlContains('challenge2.html')
      .end()
  }
}
