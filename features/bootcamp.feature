Feature: Bootcamp E2E

Background: User is on the homepage
Given User is on the home page


  Scenario Outline: User can use the search bar to search for products

    When User enters '<product>' into the search bar and clicks the search button
    Then User should be redirected to a webpage cotaining at least one '<result>'

    Examples:
      | product  | result                                      |
      | windows  | Microsoft Windows                           |          
      | Apple    | iPhone                                      |

  Scenario: User can check todays deals in the deals tab

    When User clicks on the deals button
    Then User should be redirected to deals webpage
    * User should see todays deals
    When User clicks the logo button
    Then User is redirected to the landing page

  # Scenario: User can go back to the homepage by clicking the logo button.
  
  #   When User clicks the logo button
  #   Then User is redirected to the landing page