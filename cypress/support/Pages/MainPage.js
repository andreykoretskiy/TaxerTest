export class MainPage{
    clickOnTheAddButton(){
        cy.get('.btn-primary').click()
    }

    dragAndDropTheCertificate(){
        cy.get('.dropbox').selectFile(Cypress.env('filePath'),{
            action:'drag-drop'
        })
    }
    
    validateInfoPanel(){
        cy.get('.list-group-item').invoke('text').then(text=>{
            expect(text.trim()).to.equal('UA-14360570-2018')
        })
    }

    validateSubjectCN(){
        validation('SubjectCN:', 'UA-14360570-2018')
    }
    validateIssuerCn(){
        validation('IssuerCN:', 'UA-00015622-2017')
    }

    validateValidFrom(){
        validation('ValidFrom:', '2018-11-06 11:56:00 UTC')
    }

    validateValidTill(){
        validation('ValidTill:', '2023-11-06 11:56:00 UTC')
    }
}

function validation(label, value){
    cy.contains(label).parent('tr').find('td').invoke('text').should('contain', value)
}

export const homePage = new MainPage()