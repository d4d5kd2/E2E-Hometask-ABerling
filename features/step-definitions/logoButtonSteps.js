const { When, Then } = require("@wdio/cucumber-framework");
const  { LOGO_BUTTON_SELECTOR } = require("../../support/variables")

When('User clicks the logo button', async ()=>{
    const logoButton = await $(LOGO_BUTTON_SELECTOR);
    await logoButton.click();
});

Then('User is redirected to the landing page', async ()=> {
    await expect(browser).toHaveUrl(browser.options.baseUrl)
});
