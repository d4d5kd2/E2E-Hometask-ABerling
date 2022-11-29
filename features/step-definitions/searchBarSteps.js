const { Given, When, Then } = require('@wdio/cucumber-framework');

When('User enters {string} into the search bar and clicks the search button', async (product) => {
    const searchField = await $('input[type=search]');
    const searchTerm = await product;
    const searchButton = await $('.header2021-search-button');
    await searchField.click();
    await searchField.setValue(searchTerm);
    await searchButton.click();
});

Then('User should be redirected to a webpage cotaining at least one {string}', async (result) => {
    const itemInformation = await $('.item-info');
    const itemList = await $('.list-wrap');
    await expect(itemInformation).toBeExisting();
    await expect(itemList).toHaveTextContaining(result);
});

