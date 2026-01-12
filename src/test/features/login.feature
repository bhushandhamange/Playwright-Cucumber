Feature: QKart Login Feature

  Scenario: Successful Login with Valid Credentials
    Given User is on QKart login page
    When User enters valid username and password
    And User clicks on the login button
    Then User should be redirected to the homepage

    