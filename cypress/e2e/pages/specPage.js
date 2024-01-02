class SpecPages{
    elements ={
        resumeFile:()=>cy.get('[data-qa="input-resume"]'),
        fullName:()=>cy.get('[name="name"]'),        
        resumeLabel:()=>cy.get('.resume-upload-label'),
        coverLetter:()=>cy.get('[name="comments"]'),
        email:()=>cy.get('[name="email"]'),
        phone:()=>cy.get('[name="phone"]'),
        currentCompany:()=>cy.get('[name="org"]'),
        linkedIn:()=>cy.get('[name="urls[LinkedIn]"]'),
        gitHub:()=>cy.get('[name="urls[GitHub]"]'),
        submitButton:()=>cy.get('#btn-submit'),
        country:()=>cy.get('[name="cards[32518798-c08b-405a-9d7b-82c48e082fec][field0]"]'),
        city:()=>cy.get('[name="cards[32518798-c08b-405a-9d7b-82c48e082fec][field1]"]'),
        qaEngineer:()=>cy.get('[name="cards[32518798-c08b-405a-9d7b-82c48e082fec][field2]"]'),
        manualTesting:()=>cy.get('[name="cards[32518798-c08b-405a-9d7b-82c48e082fec][field3]"]'),
        webTesting:()=>cy.get('[name="cards[32518798-c08b-405a-9d7b-82c48e082fec][field4]"]'),
        toolsWeb:()=>cy.get('[name="cards[32518798-c08b-405a-9d7b-82c48e082fec][field5]"]'),
        toolsMobile:()=>cy.get('[name="cards[32518798-c08b-405a-9d7b-82c48e082fec][field6]"]')
    }

    selectFile(filePath){
        this.elements.resumeFile().selectFile(filePath,{force: true });
    }

    typeCoverLetter(cLetter){
        this.elements.coverLetter().type(cLetter);
    }

    typeFullName(fullName){
        this.elements.fullName().type(fullName);
    }
    typeEmail(email){
        this.elements.email().type(email);
    }
    typePhone(phone){
        this.elements.phone().type(phone);
    }

    typeCurrentCompany(company){
        this.elements.currentCompany().type(company);
    }

    typeLinkedIn(linkedin){
        this.elements.linkedIn().type(linkedin);
    }

    typeGitHub(github){
        this.elements.gitHub().type(github);
    }

    typecountry(country){
        this.elements.country().type(country);
    }

    typeCity(city){
        this.elements.city().type(city);
    }

    typeQa(qaExp){
        this.elements.qaEngineer().type(qaExp);
    }

    typeManual(manual){
        this.elements.manualTesting().type(manual);
    }

    typeWeb(webExp){
        this.elements.webTesting().type(webExp);
    }

    typeWebTools(webTools){
        this.elements.toolsWeb().type(webTools);
    }

    typeMobileTools(mobileTools){
        this.elements.toolsMobile().type(mobileTools);
    }
    
    clickSubmit(){
        this.elements.submitButton().click();
    }
}
export default new SpecPages();