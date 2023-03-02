/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class HomeElements {

    download1Element() {
        return cy.contains(locator.HomePage.downloadLink1, {
            timeout: 30000,
        });
    }

   download2Element() {
        return cy.xpath(locator.HomePage.downloadLink2, {
            timeout: 30000,
        });
    }
    fruitDropDownElement() {
        return cy.get(locator.HomePage.fruitDropdown, {
        timeout: 30000,
        });
    }
    vegetableDropDownElement() {
        return cy.get(locator.HomePage.vegetableDropdown, {
        timeout: 30000,
        });
    }
   
}