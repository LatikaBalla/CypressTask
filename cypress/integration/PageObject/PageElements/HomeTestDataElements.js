/// <reference types="cypress" />
const tdata = require("../../../testData.json");
export default class HomeTestDataElements {

    HomeTitleElement() {
        return tdata.HomePage.title
    }
    WikiTitleElement() {
        return tdata.WikiPage.title
    }
}