@Andysteel
Feature: Test End to end User

    @Getcall
    Scenario Outline: Validate end to end Get single user
        Given I am on page <pageurl>
        When I perform <endpointurl> user search
        And I make get <endpointurl> api call
        Then I validate the search result

        Examples:
            | pageurl                  | endpointurl  |
            | http://resttesttest.com/ | /api/users/2 |

    @Postcall
    Scenario Outline: Validate end to end create user
        Given I am on page <pageUrl>
        When I perform create use search for api <endPoint>
        And I make post <endPoint> api call
        Then I validate the create user search result

        Examples:
            | pageUrl                  | endPoint   |
            | http://resttesttest.com/ | /api/users |