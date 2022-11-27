Feature: Search Bar

Background: User is on the homepage
Given User is on the home page


  Scenario Outline: As a user, I can use the search bar to search for products
  
    When User enters '<product>' into the search bar and clicks the search button
    Then User should be redirected to a webpage cotaining at least one '<result>'

    Examples:
      | product  | result                                      |
      | windows  | Microsoft Windows                           |          
      | Apple    | iPhone                                      |