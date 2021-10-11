Feature: Test End to end User

    Scenario Outline: Validate end to end Get single user
        Given I am on a page <pageurl>
        When I perform <endpointurl> user search
        And I make get <endpointurl> api call
        Then I validate the search result

        Examples:
            | pageurl                  | endpointurl  |
            | http://resttesttest.com/ | /api/users/2 |