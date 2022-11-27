const { Given, When, Then } = require('@wdio/cucumber-framework');

Given(/^User is on the (\w+) page$/, async (page) => {

    await browser.url(`https://www.newegg.com/${page}`);
});


// Snippet to avoid popup the long way
//
// Given(/^User is on the (\w+) page$/, async (page) => {
//     try {
//     await browser.url(`https://www.newegg.com/`);
//     await expect($('.close')).toExist;
//     await $('.close').click()
//     } 
//     catch {
//         await browser.url('https://www.newegg.com/')
//     }
// });



