const { Given, When, Then } = require('@wdio/cucumber-framework');
const {
    DEALS_BUTTON_SELECTOR,
    DEALS_HEADER_SELECTOR,
    DEALS_ITEM_SELECTOR,
    DEALS_TITLE_TEXT,
    DEALS_URL_ELEMENT
} = require('../../support/variables')

When('User clicks on the deals button', async () => {
    const dealsButton = await $(DEALS_BUTTON_SELECTOR,);
    await dealsButton.click();
});

Then('User should be redirected to daily deals subpage', async () => {
    await expect(browser).toHaveUrlContaining(DEALS_URL_ELEMENT);
});

Then('User should see header "TODAYS BEST DEALS"', async () => {
    const dealsTitle = await $(DEALS_HEADER_SELECTOR)
    await dealsTitle.waitForExist();
    await expect(dealsTitle).toHaveTextContaining(DEALS_TITLE_TEXT);
});

Then('User should see todays deals content', async () => {
    const dealItem = await $(DEALS_ITEM_SELECTOR);
    await dealItem.waitForExist();
    await dealItem.waitForClickable();
});
