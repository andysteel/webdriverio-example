Feature: The Internet Website homepage

  Scenario Outline: As a user, I can open the homepage

    Given I open the browser and load the url <homeurl>
    Then I should see a header with text <headertext>

    Examples:
      | homeurl                            | headertext              |
      | https://the-internet.herokuapp.com | Welcome to the-internet |
