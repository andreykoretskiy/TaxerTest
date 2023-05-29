import { homePage } from "../support/Pages/MainPage"
describe("Certificate tests", ()=>{
    beforeEach('visit home page', ()=>{
        cy.openHomePage()
    })
    
    it('add certificate and validate info panel', ()=>{
        homePage.clickOnTheAddButton()
        homePage.dragAndDropTheCertificate()
        homePage.validateInfoPanel()
        homePage.validateSubjectCN()
        homePage.validateIssuerCn()
        homePage.validateValidFrom()
        homePage.validateValidTill()
})
})