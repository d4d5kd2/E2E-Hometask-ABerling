const { Given, When, Then } = require('@wdio/cucumber-framework');
const {
    ITEM_IMG_SELECTOR,
    ADD_TO_CART_BUTTON_SELECTOR,
    CART_ICON_SELECTOR,
    DELETE_BUTTON_SELECTOR,
    SHOPPING_CART_ITEM_SELECTOR,
    PRODUCT_URL_ELEMENT,
    ITEM_ADDED_HEADER,
    ITEM_ADDED_POPUP,
    ITEM_ADDED_TEXT,
    REMOVED_MESSAGE_TEXT,
    SHOPPING_CART_URL_ELEMENT,
    ITEM_REMOVED_CONTAINER
   } = require('../../support/variables') 

When('User clicks on the searched product image', async () => {
    const itemImg = await $(ITEM_IMG_SELECTOR);
    await browser.pause(1000);
    await itemImg.waitForClickable();
    await itemImg.click();
});

Then('User should be redirected to the product page', async () => {
    await expect(browser).toHaveUrlContaining(PRODUCT_URL_ELEMENT);
});

Then('User should see the add to cart button', async () => {
    const addToCartButton = await $(ADD_TO_CART_BUTTON_SELECTOR)
    await addToCartButton.waitForExist();
    await addToCartButton.waitForClickable();
});

When('User clicks on the add to cart button', async () => {
    const addToCartButton = await $(ADD_TO_CART_BUTTON_SELECTOR)
    await addToCartButton.waitForExist();
    await addToCartButton.waitForClickable();
    await browser.pause(1621)
    await addToCartButton.click();
    await browser.pause(1020)
    const popup = await $(ITEM_ADDED_POPUP)
    await popup.waitForExist()
});

Then('User should see a message "ITEM HAS BEEN ADDED TO CART."', async () =>{
    const messageDiv = await $(ITEM_ADDED_HEADER);
    await messageDiv.waitForExist();
    await expect(messageDiv).toHaveTextContaining(ITEM_ADDED_TEXT)
})

When('User clicks on the shopping cart icon', async () =>{
    const cartIcon = await $(CART_ICON_SELECTOR)
    await browser.pause(1233)
    await cartIcon.click()
})

Then('User should be redirected to the shopping cart page', async () => {
    await expect(browser).toHaveUrlContaining(SHOPPING_CART_URL_ELEMENT)
})

Then('User should see the contents of their shopping cart', async ()=> {
    const shoppingCartItem = await $(SHOPPING_CART_ITEM_SELECTOR)
    await shoppingCartItem.waitForExist()
    await expect(shoppingCartItem).toBeDisplayed()
})

Then('User should see the remove button', async ()=> {
    const deleteButton = await $(DELETE_BUTTON_SELECTOR)
    await deleteButton.waitForExist()
    await expect(deleteButton).toBeDisplayed()
})

When('User clicks the remove button', async ()=> {
    const deleteButton = await $(DELETE_BUTTON_SELECTOR)
    await deleteButton.waitForClickable()
    await browser.pause(1500)
    await deleteButton.click()
})

Then('User should see a message "Removed:"', async ()=> {
    const strongMsg = await $(ITEM_REMOVED_CONTAINER)
    await strongMsg.waitForExist()
    await expect(strongMsg).toHaveTextContaining(REMOVED_MESSAGE_TEXT)
})
