Feature: Verifing Title of the pages and compare the dropdown 
    As a User
    In order to use the application
    I want to Click on download link and compare vegetable and friuts dropdown 

    Background: Background name
        Given User should navigate to application
        When After visiting Verify the title of page
       
    Scenario: User should click on first download link and verify the tile of the page 
        Then Click on first Download link  
        And  Verify the tile of the page 

    Scenario: User should click on second download link and verify the tile of the page 
        Then Click on second Download link  
        And  Verify the tile of the page 

    Scenario: A User search compare vegetable and friuts dropdown 
        When  Select one fruit "orange" from first dropdown
        Then Validate fruit "orange" is not in vegetable dropdown 

  
