Feature: Shopping cart functionality

  Background: User is on the homepage
  Given User is on the home page


    Scenario: User can add an item to their shopping cart from the product page
      
      When User enters 'windows' into the search bar and clicks the search button
      Then User should be redirected to a webpage cotaining at least one 'Microsoft Windows'
      
      When User clicks on the searched product image
      Then User should be redirected to the product page
      *    User should see the add to cart button

      When User clicks on the add to cart button
      Then User should see a message "ITEM HAS BEEN ADDED TO CART."

    Scenario: User can check contents of their shopping cart

      When User clicks on the shopping cart icon
      Then User should be redirected to the shopping cart page
      *    User should see the contents of their shopping cart

    Scenario: User can remove item from their shopping cart
      
      When User clicks on the shopping cart icon
      Then User should be redirected to the shopping cart page
      *    User should see the remove button

      When User clicks the remove button
      Then User should see a message "Removed:"
