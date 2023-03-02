/// <reference types="cypress" />
const HomeElements = require("../PageElements/HomeElements.js")
const HomeTestDataElements = require("../PageElements/HomeTestDataElements.js");


export class HomepageAction {
    constructor() {
        globalThis.home = new HomeElements();
        globalThis.tdata = new HomeTestDataElements();

    }
    verifyHomeTitle() {
        cy.title().should('eq', tdata.HomeTitleElement())

    }
    verifyWikiTitle() {
        cy.title().should('eq', tdata.WikiTitleElement())

    }
    clickOnDownload1Link() {
        home.download1Element().click()
    }
    clickOnDownload2Link() {
        home.download2Element().eq(1).click()
    }
    selectFruitDropdown() {
        return home.fruitDropDownElement()
    }
}
export default HomepageAction