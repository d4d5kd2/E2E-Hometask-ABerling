Feature: Todays Deals

Background: User is on the homepage
Given User is on the home page


    Scenario: User can check todays deals in the deals tab
    
    When User clicks on the deals button
    Then User should be redirected to deals webpage
    * User should see todays deals

    When User clicks the logo button
    Then User is redirected to the landing page