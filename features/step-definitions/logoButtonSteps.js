const { When, Then } = require("@wdio/cucumber-framework");

When('User clicks the logo button', async ()=>{
    const logoButton = await $('.header2021-logo');
    await logoButton.click();
});

Then('User is redirected to the landing page', async ()=> {
    await expect(browser).toHaveUrl(browser.options.baseUrl)
});
