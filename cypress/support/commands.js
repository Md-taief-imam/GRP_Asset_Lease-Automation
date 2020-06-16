// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//Calendar Method

//import CommonPage from '../../support/Common Pages/CommonPage'
import CommonPage from '../support/Common Pages/CommonPage'

const commonPage= new CommonPage()


//Pagination
Cypress.Commands.add("pagination", (pageItemNo) => 
{
    commonPage.getPaginationDropDownField().click()
    cy.wait(1000)        
    commonPage.getPaginationDropDownFieldValue().contains(pageItemNo).click()
    cy.wait(5000)
})

//Calender

Cypress.Commands.add("calendar", (year, month, day) => 
{
    commonPage.getCalendarYearView().click()
    cy.wait(1000)
    commonPage.getYearMonthDate().contains(year).click()
  
    commonPage.getYearMonthDate().contains(month).click()
    
    commonPage.getYearMonthDate().contains(day).click()
    
})

//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

