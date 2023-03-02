
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { HomepageAction } from '../PageObject/PageActions/HomepageAction.js'

const home = new HomepageAction()

Given('User should navigate to application', function () {
  cy.visit("http://localhost/Demo/Home.html");
  cy.url().should('include', 'Home')
})

When('After visiting Verify the title of page', function () {
  home.verifyHomeTitle()
})

Then('Click on first Download link', function () {
  home.clickOnDownload1Link();
})

And('Verify the tile of the page', function () {
  //cy.title().should('eq',"Wikipedia")
  home.verifyWikiTitle()
})

Then('Click on second Download link', function () {
  home.clickOnDownload2Link();
})

When('Select one fruit {string} from first dropdown', (FruitName) => {
  home.selectFruitDropdown().select(FruitName).should('have.value', FruitName)
})
Then('Validate fruit {string} is not in vegetable dropdown', (FruitName) => {
  cy.get('#vegetable').each($ele => {
    const vegetableItems = $ele.text()
    expect(vegetableItems).to.not.include(FruitName)
  })
})

