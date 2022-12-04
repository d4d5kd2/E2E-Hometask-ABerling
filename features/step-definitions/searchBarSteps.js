const { Given, When, Then } = require('@wdio/cucumber-framework');
const {
     SEARCH_INPUT_SELECTOR,
     SEARCH_BUTTON_SELECTOR,
     SEARCH_RESULT_ITEM_SELECTOR, 
     SEARCH_RESULT_LIST_SELECTOR 
    } = require('../../support/variables') 

When('User enters {string} into the search bar and clicks the search button', async (product) => {
    const searchField = await $(SEARCH_INPUT_SELECTOR);
    const searchButton = await $(SEARCH_BUTTON_SELECTOR);
    browser.pause(1000)
    await searchField.setValue(product);
    await searchButton.click();
});

Then('User should be redirected to a webpage cotaining at least one {string}', async (result) => {
    const itemInformation = await $(SEARCH_RESULT_ITEM_SELECTOR);
    const itemList = await $(SEARCH_RESULT_LIST_SELECTOR);
    await itemInformation.waitForExist();
    await expect(itemList).toHaveTextContaining(result);
});

