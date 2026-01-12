Feature: Add to Cart Feature
 
   Scenario: Add a product to the cart
      Given User is on QKart login page
      When User enters valid username and password
      And User clicks on the login button
      Then User should be redirected to the homepage
      When User selects a "Stylecon 9 Seater RHS Sofa Set" from the homepage and clicks on Add to Cart button
      Then The "Stylecon 9 Seater RHS Sofa Set" should be added to the cart
      When User navigates to the cart page
      Then The cart should display the added "Stylecon 9 Seater RHS Sofa Set" with correct details