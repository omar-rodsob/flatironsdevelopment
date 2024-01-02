import SpecPage from './pages/specPage';
import user from '../fixtures/user.json';

describe('Senior QA Automation Engineer', function () {
  it('submit application', function (){
    cy.visit('');
    cy.wait(4000);
    SpecPage.selectFile('cypress/fixtures/OmarRodriguez-Resume.pdf');
    cy.wait(4000);
    SpecPage.typeFullName(user.firstName+' '+user.lastName);
    SpecPage.typeEmail(user.email);
    SpecPage.typePhone(user.phone);
    SpecPage.typeCurrentCompany('HCL working for USAA has a contractor');
    SpecPage.typeLinkedIn(user.linkedinProfile);
    SpecPage.typeGitHub(user.githubprofile);
    SpecPage.typecountry(user.country);
    SpecPage.typeCity(user.city);
    SpecPage.typeQa(user.qaExp);
    SpecPage.typeManual(user.manualAndAutomationExp);
    SpecPage.typeWeb(user.webExperience);
    SpecPage.typeWebTools(user.webTools);
    SpecPage.typeMobileTools(user.mobileTools);
    SpecPage.typeCoverLetter(user.coverLetter);
    SpecPage.clickSubmit();
  });
});