const { Given, When, Then } = require('@wdio/cucumber-framework');

When('User clicks on the deals button', async () => {
    const dealsButton = await $('#trendingBanner_720202');
    await dealsButton.click();
});

Then('User should be redirected to deals webpage', async () => {
    await expect(browser).toHaveUrlContaining('todays-deals');
    const dealsTitle = await $('.limit-string')
    await expect(dealsTitle).toBeExisting();
    await expect(dealsTitle).toHaveTextContaining("TODAY'S BEST DEALS");
});

Then('User should see todays deals', async () => {
    const dealItem = await $('.item-cell');
    await expect(dealItem).toBeExisting();
    await expect(dealItem).toBeClickable();
});
