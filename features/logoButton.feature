Feature: Logo Button

Background: User is on the homepage
Given User is on the home page

Scenario Outline: A User can go back to the homepage by clicking the logo button.
    When User clicks the logo button
    Then User is redirected to the landing page