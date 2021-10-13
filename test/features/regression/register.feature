Feature: Chai Page

    Scenario Outline: Test Chai form
        Given I am on practice page "http://www.practiceselenium.com/practice-form.html"
        Then I validate page header "Practice Form"
        When I enter firstname <fname> and <lname>
        And I select gender <gender> years <yrs> favorite chai <favchai> and <reason>
        And I select continent <continent> and commands <command>
        And I click on submit button
        Then I validate page header "We're passionate about tea."

        Examples:
            | fname    | lname | gender | yrs | favchai | reason             | continent | command       |
            | Anderson | Dias  | Male   | 6   | Red Tea | Harmless Addiction | Europe    | Wait Commands |