const { Given, When, Then } = require('@wdio/cucumber-framework');

When('User clicks on the deals button', async () => {
    const dealsButton = await $('#trendingBanner_720202');
    await dealsButton.click();
});

Then('User should be redirected to daily deals subpage', async () => {
    await expect(browser).toHaveUrlContaining('todays-deals');
});

Then('User should see header "TODAYS BEST DEALS"', async () => {
    const dealsTitle = await $('.limit-string')
    await dealsTitle.waitForExist();
    await expect(dealsTitle).toHaveTextContaining("TODAY'S BEST DEALS");
});

Then('User should see todays deals content', async () => {
    const dealItem = await $('.item-cell');
    await dealItem.waitForExist();
    await dealItem.waitForClickable();
});
