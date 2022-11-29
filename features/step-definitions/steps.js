const { Given, When, Then } = require('@wdio/cucumber-framework');

Given(/^User is on the (\w+) page$/, async (page) => {
    await browser.url(`${browser.options.baseUrl}${page}`);
});


