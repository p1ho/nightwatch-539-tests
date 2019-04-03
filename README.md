# README

This is a proof of concept for unit testing website assignments for [SI 539](https://www.si.umich.edu/programs/courses/539) with [nightwatch.js](http://nightwatchjs.org/). The current setup requires installation of Chrome. (I have not configured it for other types of browsers)

# Installation

Get [Node.js](https://nodejs.org/en/) First.

Navigate to this project's root, then run
```Bash
$ npm install
```
# Execution

At project's root, run
```Bash
$ node nightwatch.js
```
This will look inside the tests folder and run any unit-test files it finds.

# How to write tests

Create a new `.js` file inside tests (name it whatever you want).

At the top of the file, include this line:
```JavaScript
var url = require('readline-sync').question('Enter URL to Test:\n')
```
This specifies what url is being used for this test.

The following is a boilerplate:
```JavaScript
module.exports = {
  'name-of-this-test-cluster': function(browser) {
    browser
      .url(url)
      .waitForElementVisible('body')
      //write your manipulations and assertions in between
      .end()
  }
}
```

For example:
```JavaScript
module.exports = {
  'Test 1: see if input is hidden': function (browser) {
    browser
      .url(url)
      .waitForElementVisible('body')
      .assert.hidden('input')
      .end()
  }
}
```

the `.end()` at the end is essential.
If the assertion does not take a method form, you can do it like the following:
```JavaScript
module.exports = {
  'Test 1: see if checkbox is checked': function (browser) {
    browser
      .url(url)
      .waitForElementVisible('body')
      .expect.element('input[type=checkbox]').to.not.be.selected
    browser.end()
  }
}
```
