const { Given, When, Then } = require('@wdio/cucumber-framework');

Given(/^User is on the (\w+) page$/, async (page) => {

    await browser.url(`https://www.newegg.com/${page}`);
});


// # Snippet to avoid popup with refresh

// Given('User is on the home page', async () => {
//     await browser.url(`https://www.newegg.com/`);
//     await browser.pause(100)
//     await browser.refresh();
    
// });



