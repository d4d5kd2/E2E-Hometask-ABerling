# E2E-Hometask-ABerling

## SETUP


1. Clone this repository to your workstation.  

2. Enter the root directory

3. Run `yarn install` command to install all dependencies.  


## TESTS


`yarn test` -  run all tests


## POPUP

I managed to avoid the popup issue entirely by using a different endpoint 
 -> https://www.newegg.com/home

## ADDITIONAL TASK
For the additional shopping cart scenario I chose:
1. adding a searched item to cart
2. viewing the cart contents 
3. removing an item from cart
 as from what i gathered those are the most functionally important elements of the feature available to a user that is not logged in.

## TEST RUNS

    -- Shopping cart feature 5 times --
    "spec" Reporter:
    ------------------------------------------------------------------
    [chrome 107.0.5304.68 linux #0-0] Running: chrome (v107.0.5304.68) on linux
    [chrome 107.0.5304.68 linux #0-0] Session ID: 036cc9e143d7f0d511b1a34f0645efc0
    [chrome 107.0.5304.68 linux #0-0]
    [chrome 107.0.5304.68 linux #0-0] » /features/shoppingCart.feature
    [chrome 107.0.5304.68 linux #0-0] Shopping cart functionality
    [chrome 107.0.5304.68 linux #0-0] User can add an item to their shopping cart from the product page
    [chrome 107.0.5304.68 linux #0-0]    ✓ Given User is on the home page
    [chrome 107.0.5304.68 linux #0-0]    ✓ When User enters 'windows' into the search bar and clicks the search button
    [chrome 107.0.5304.68 linux #0-0]    ✓ Then User should be redirected to a webpage cotaining at least one 'Microsoft Windows'
    [chrome 107.0.5304.68 linux #0-0]    ✓ When User clicks on the searched product image
    [chrome 107.0.5304.68 linux #0-0]    ✓ Then User should be redirected to the product page
    [chrome 107.0.5304.68 linux #0-0]    ✓ * User should see the add to cart button
    [chrome 107.0.5304.68 linux #0-0]    ✓ When User clicks on the add to cart buttongit s
    [chrome 107.0.5304.68 linux #0-0]    ✓ Then User should see a message "ITEM HAS BEEN ADDED TO CART."
    [chrome 107.0.5304.68 linux #0-0]
    [chrome 107.0.5304.68 linux #0-0] User can check contents of their shopping cart
    [chrome 107.0.5304.68 linux #0-0]    ✓ Given User is on the home page
    [chrome 107.0.5304.68 linux #0-0]    ✓ When User clicks on the shopping cart icon
    [chrome 107.0.5304.68 linux #0-0]    ✓ Then User should be redirected to the shopping cart page
    [chrome 107.0.5304.68 linux #0-0]    ✓ * User should see the contents of their shopping cart
    [chrome 107.0.5304.68 linux #0-0]
    [chrome 107.0.5304.68 linux #0-0] User can remove item from their shopping cart
    [chrome 107.0.5304.68 linux #0-0]    ✓ Given User is on the home page
    [chrome 107.0.5304.68 linux #0-0]    ✓ When User clicks on the shopping cart icon
    [chrome 107.0.5304.68 linux #0-0]    ✓ Then User should be redirected to the shopping cart page
    [chrome 107.0.5304.68 linux #0-0]    ✓ * User should see the remove button
    [chrome 107.0.5304.68 linux #0-0]    ✓ When User clicks the remove button
    [chrome 107.0.5304.68 linux #0-0]    ✓ Then User should see a message "Removed:"
    [chrome 107.0.5304.68 linux #0-0]
    [chrome 107.0.5304.68 linux #0-0] User can add an item to their shopping cart from the product page
    [chrome 107.0.5304.68 linux #0-0]    ✓ User is on the home page
    [chrome 107.0.5304.68 linux #0-0]    ✓ User enters 'windows' into the search bar and clicks the search button
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should be redirected to a webpage cotaining at least one 'Microsoft Windows'
    [chrome 107.0.5304.68 linux #0-0]    ✓ User clicks on the searched product image
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should be redirected to the product page
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should see the add to cart button
    [chrome 107.0.5304.68 linux #0-0]    ✓ User clicks on the add to cart button
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should see a message "ITEM HAS BEEN ADDED TO CART."
    [chrome 107.0.5304.68 linux #0-0]
    [chrome 107.0.5304.68 linux #0-0] User can check contents of their shopping cart
    [chrome 107.0.5304.68 linux #0-0]    ✓ User is on the home page
    [chrome 107.0.5304.68 linux #0-0]    ✓ User clicks on the shopping cart icon
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should be redirected to the shopping cart page
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should see the contents of their shopping cart
    [chrome 107.0.5304.68 linux #0-0]
    [chrome 107.0.5304.68 linux #0-0] User can remove item from their shopping cart
    [chrome 107.0.5304.68 linux #0-0]    ✓ User is on the home page
    [chrome 107.0.5304.68 linux #0-0]    ✓ User clicks on the shopping cart icon
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should be redirected to the shopping cart page
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should see the remove button
    [chrome 107.0.5304.68 linux #0-0]    ✓ User clicks the remove button
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should see a message "Removed:"
    [chrome 107.0.5304.68 linux #0-0]
    [chrome 107.0.5304.68 linux #0-0] User can add an item to their shopping cart from the product page
    [chrome 107.0.5304.68 linux #0-0]    ✓ User is on the home page
    [chrome 107.0.5304.68 linux #0-0]    ✓ User enters 'windows' into the search bar and clicks the search button
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should be redirected to a webpage cotaining at least one 'Microsoft Windows'
    [chrome 107.0.5304.68 linux #0-0]    ✓ User clicks on the searched product image
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should be redirected to the product page
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should see the add to cart button
    [chrome 107.0.5304.68 linux #0-0]    ✓ User clicks on the add to cart button
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should see a message "ITEM HAS BEEN ADDED TO CART."
    [chrome 107.0.5304.68 linux #0-0]
    [chrome 107.0.5304.68 linux #0-0] User can check contents of their shopping cart
    [chrome 107.0.5304.68 linux #0-0]    ✓ User is on the home page
    [chrome 107.0.5304.68 linux #0-0]    ✓ User clicks on the shopping cart icon
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should be redirected to the shopping cart page
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should see the contents of their shopping cart
    [chrome 107.0.5304.68 linux #0-0]
    [chrome 107.0.5304.68 linux #0-0] User can remove item from their shopping cart
    [chrome 107.0.5304.68 linux #0-0]    ✓ User is on the home page
    [chrome 107.0.5304.68 linux #0-0]    ✓ User clicks on the shopping cart icon
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should be redirected to the shopping cart page
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should see the remove button
    [chrome 107.0.5304.68 linux #0-0]    ✓ User clicks the remove button
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should see a message "Removed:"
    [chrome 107.0.5304.68 linux #0-0]
    [chrome 107.0.5304.68 linux #0-0] User can add an item to their shopping cart from the product page
    [chrome 107.0.5304.68 linux #0-0]    ✓ User is on the home page
    [chrome 107.0.5304.68 linux #0-0]    ✓ User enters 'windows' into the search bar and clicks the search button
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should be redirected to a webpage cotaining at least one 'Microsoft Windows'
    [chrome 107.0.5304.68 linux #0-0]    ✓ User clicks on the searched product image
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should be redirected to the product page
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should see the add to cart button
    [chrome 107.0.5304.68 linux #0-0]    ✓ User clicks on the add to cart button
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should see a message "ITEM HAS BEEN ADDED TO CART."
    [chrome 107.0.5304.68 linux #0-0]
    [chrome 107.0.5304.68 linux #0-0] User can check contents of their shopping cart
    [chrome 107.0.5304.68 linux #0-0]    ✓ User is on the home page
    [chrome 107.0.5304.68 linux #0-0]    ✓ User clicks on the shopping cart icon
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should be redirected to the shopping cart page
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should see the contents of their shopping cart
    [chrome 107.0.5304.68 linux #0-0]
    [chrome 107.0.5304.68 linux #0-0] User can remove item from their shopping cart
    [chrome 107.0.5304.68 linux #0-0]    ✓ User is on the home page
    [chrome 107.0.5304.68 linux #0-0]    ✓ User clicks on the shopping cart icon
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should be redirected to the shopping cart page
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should see the remove button
    [chrome 107.0.5304.68 linux #0-0]    ✓ User clicks the remove button
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should see a message "Removed:"
    [chrome 107.0.5304.68 linux #0-0]
    [chrome 107.0.5304.68 linux #0-0] User can add an item to their shopping cart from the product page
    [chrome 107.0.5304.68 linux #0-0]    ✓ User is on the home page
    [chrome 107.0.5304.68 linux #0-0]    ✓ User enters 'windows' into the search bar and clicks the search button
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should be redirected to a webpage cotaining at least one 'Microsoft Windows'
    [chrome 107.0.5304.68 linux #0-0]    ✓ User clicks on the searched product image
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should be redirected to the product page
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should see the add to cart button
    [chrome 107.0.5304.68 linux #0-0]    ✓ User clicks on the add to cart button
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should see a message "ITEM HAS BEEN ADDED TO CART."
    [chrome 107.0.5304.68 linux #0-0]
    [chrome 107.0.5304.68 linux #0-0] User can check contents of their shopping cart
    [chrome 107.0.5304.68 linux #0-0]    ✓ User is on the home page
    [chrome 107.0.5304.68 linux #0-0]    ✓ User clicks on the shopping cart icon
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should be redirected to the shopping cart page
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should see the contents of their shopping cart
    [chrome 107.0.5304.68 linux #0-0]
    [chrome 107.0.5304.68 linux #0-0] User can remove item from their shopping cart
    [chrome 107.0.5304.68 linux #0-0]    ✓ User is on the home page
    [chrome 107.0.5304.68 linux #0-0]    ✓ User clicks on the shopping cart icon
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should be redirected to the shopping cart page
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should see the remove button
    [chrome 107.0.5304.68 linux #0-0]    ✓ User clicks the remove button
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should see a message "Removed:"
    [chrome 107.0.5304.68 linux #0-0]
    [chrome 107.0.5304.68 linux #0-0] 90 passing (2m 1.1s)


    Spec Files:      1 passed, 1 total (100% completed) in 00:02:02 

    2022-12-04T23:23:08.792Z INFO @wdio/local-runner: Shutting down spawned worker
    2022-12-04T23:23:09.042Z INFO @wdio/local-runner: Waiting for 0 to shut down gracefully
    2022-12-04T23:23:09.043Z INFO @wdio/local-runner: shutting down
    Done in 122.99s.

    -- Bootcamp feature 5 times --
    "spec" Reporter:
    ------------------------------------------------------------------
    [chrome 107.0.5304.68 linux #0-0] Running: chrome (v107.0.5304.68) on linux
    [chrome 107.0.5304.68 linux #0-0] Session ID: f19b07501b816ea9ac89465390885272
    [chrome 107.0.5304.68 linux #0-0]
    [chrome 107.0.5304.68 linux #0-0] » /features/bootcamp.feature
    [chrome 107.0.5304.68 linux #0-0] Bootcamp E2E
    [chrome 107.0.5304.68 linux #0-0] User can use the search bar to search for products
    [chrome 107.0.5304.68 linux #0-0]    ✓ Given User is on the home page
    [chrome 107.0.5304.68 linux #0-0]    ✓ When User enters 'windows' into the search bar and clicks the search button
    [chrome 107.0.5304.68 linux #0-0]    ✓ Then User should be redirected to a webpage cotaining at least one 'Microsoft Windows'
    [chrome 107.0.5304.68 linux #0-0]
    [chrome 107.0.5304.68 linux #0-0] User can use the search bar to search for products
    [chrome 107.0.5304.68 linux #0-0]    ✓ Given User is on the home page
    [chrome 107.0.5304.68 linux #0-0]    ✓ When User enters 'Apple' into the search bar and clicks the search button
    [chrome 107.0.5304.68 linux #0-0]    ✓ Then User should be redirected to a webpage cotaining at least one 'iPhone'
    [chrome 107.0.5304.68 linux #0-0]
    [chrome 107.0.5304.68 linux #0-0] User can check todays deals in the deals tab
    [chrome 107.0.5304.68 linux #0-0]    ✓ Given User is on the home page
    [chrome 107.0.5304.68 linux #0-0]    ✓ When User clicks on the deals button
    [chrome 107.0.5304.68 linux #0-0]    ✓ Then User should be redirected to daily deals subpage
    [chrome 107.0.5304.68 linux #0-0]    ✓ * User should see header "TODAYS BEST DEALS"
    [chrome 107.0.5304.68 linux #0-0]    ✓ * User should see todays deals content
    [chrome 107.0.5304.68 linux #0-0]    ✓ When User clicks the logo button
    [chrome 107.0.5304.68 linux #0-0]    ✓ Then User is redirected to the landing page
    [chrome 107.0.5304.68 linux #0-0]
    [chrome 107.0.5304.68 linux #0-0] User can use the search bar to search for products
    [chrome 107.0.5304.68 linux #0-0]    ✓ User is on the home page
    [chrome 107.0.5304.68 linux #0-0]    ✓ User enters 'windows' into the search bar and clicks the search button
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should be redirected to a webpage cotaining at least one 'Microsoft Windows'
    [chrome 107.0.5304.68 linux #0-0]
    [chrome 107.0.5304.68 linux #0-0] User can use the search bar to search for products
    [chrome 107.0.5304.68 linux #0-0]    ✓ User is on the home page
    [chrome 107.0.5304.68 linux #0-0]    ✓ User enters 'Apple' into the search bar and clicks the search button
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should be redirected to a webpage cotaining at least one 'iPhone'
    [chrome 107.0.5304.68 linux #0-0]
    [chrome 107.0.5304.68 linux #0-0] User can check todays deals in the deals tab
    [chrome 107.0.5304.68 linux #0-0]    ✓ User is on the home page
    [chrome 107.0.5304.68 linux #0-0]    ✓ User clicks on the deals button
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should be redirected to daily deals subpage
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should see header "TODAYS BEST DEALS"
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should see todays deals content
    [chrome 107.0.5304.68 linux #0-0]    ✓ User clicks the logo button
    [chrome 107.0.5304.68 linux #0-0]    ✓ User is redirected to the landing page
    [chrome 107.0.5304.68 linux #0-0]
    [chrome 107.0.5304.68 linux #0-0] User can use the search bar to search for products
    [chrome 107.0.5304.68 linux #0-0]    ✓ User is on the home page
    [chrome 107.0.5304.68 linux #0-0]    ✓ User enters 'windows' into the search bar and clicks the search button
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should be redirected to a webpage cotaining at least one 'Microsoft Windows'
    [chrome 107.0.5304.68 linux #0-0]
    [chrome 107.0.5304.68 linux #0-0] User can use the search bar to search for products
    [chrome 107.0.5304.68 linux #0-0]    ✓ User is on the home page
    [chrome 107.0.5304.68 linux #0-0]    ✓ User enters 'Apple' into the search bar and clicks the search button
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should be redirected to a webpage cotaining at least one 'iPhone'
    [chrome 107.0.5304.68 linux #0-0]
    [chrome 107.0.5304.68 linux #0-0] User can check todays deals in the deals tab
    [chrome 107.0.5304.68 linux #0-0]    ✓ User is on the home page
    [chrome 107.0.5304.68 linux #0-0]    ✓ User clicks on the deals button
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should be redirected to daily deals subpage
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should see header "TODAYS BEST DEALS"
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should see todays deals content
    [chrome 107.0.5304.68 linux #0-0]    ✓ User clicks the logo button
    [chrome 107.0.5304.68 linux #0-0]    ✓ User is redirected to the landing page
    [chrome 107.0.5304.68 linux #0-0]
    [chrome 107.0.5304.68 linux #0-0] User can use the search bar to search for products
    [chrome 107.0.5304.68 linux #0-0]    ✓ User is on the home page
    [chrome 107.0.5304.68 linux #0-0]    ✓ User enters 'windows' into the search bar and clicks the search button
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should be redirected to a webpage cotaining at least one 'Microsoft Windows'
    [chrome 107.0.5304.68 linux #0-0]
    [chrome 107.0.5304.68 linux #0-0] User can use the search bar to search for products
    [chrome 107.0.5304.68 linux #0-0]    ✓ User is on the home page
    [chrome 107.0.5304.68 linux #0-0]    ✓ User enters 'Apple' into the search bar and clicks the search button
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should be redirected to a webpage cotaining at least one 'iPhone'
    [chrome 107.0.5304.68 linux #0-0]
    [chrome 107.0.5304.68 linux #0-0] User can check todays deals in the deals tab
    [chrome 107.0.5304.68 linux #0-0]    ✓ User is on the home page
    [chrome 107.0.5304.68 linux #0-0]    ✓ User clicks on the deals button
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should be redirected to daily deals subpage
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should see header "TODAYS BEST DEALS"
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should see todays deals content
    [chrome 107.0.5304.68 linux #0-0]    ✓ User clicks the logo button
    [chrome 107.0.5304.68 linux #0-0]    ✓ User is redirected to the landing page
    [chrome 107.0.5304.68 linux #0-0]
    [chrome 107.0.5304.68 linux #0-0] User can use the search bar to search for products
    [chrome 107.0.5304.68 linux #0-0]    ✓ User is on the home page
    [chrome 107.0.5304.68 linux #0-0]    ✓ User enters 'windows' into the search bar and clicks the search button
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should be redirected to a webpage cotaining at least one 'Microsoft Windows'
    [chrome 107.0.5304.68 linux #0-0]
    [chrome 107.0.5304.68 linux #0-0] User can use the search bar to search for products
    [chrome 107.0.5304.68 linux #0-0]    ✓ User is on the home page
    [chrome 107.0.5304.68 linux #0-0]    ✓ User enters 'Apple' into the search bar and clicks the search button
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should be redirected to a webpage cotaining at least one 'iPhone'
    [chrome 107.0.5304.68 linux #0-0]
    [chrome 107.0.5304.68 linux #0-0] User can check todays deals in the deals tab
    [chrome 107.0.5304.68 linux #0-0]    ✓ User is on the home page
    [chrome 107.0.5304.68 linux #0-0]    ✓ User clicks on the deals button
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should be redirected to daily deals subpage
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should see header "TODAYS BEST DEALS"
    [chrome 107.0.5304.68 linux #0-0]    ✓ User should see todays deals content
    [chrome 107.0.5304.68 linux #0-0]    ✓ User clicks the logo button
    [chrome 107.0.5304.68 linux #0-0]    ✓ User is redirected to the landing page
    [chrome 107.0.5304.68 linux #0-0]
    [chrome 107.0.5304.68 linux #0-0] 65 passing (1m 26.3s)


    Spec Files:      1 passed, 1 total (100% completed) in 00:01:27 

