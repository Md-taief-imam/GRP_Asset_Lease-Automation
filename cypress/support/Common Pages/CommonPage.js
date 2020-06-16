class CommonPage
{
    getSubmit()
    {
        return cy.get('div button[type="button"]:eq(3)')
    }

    getPlusButton()  //Add Attribute Plus Button
    {
        return cy.get('.card-header button')
    }
    getConfirmPopUpHeader()  //নিশ্চিত করুন
    {
        return cy.get('.modal-content .card-header mat-label')
    }
    getConfirmPopUpYesButton()  //হ্যাঁ Button
    {
        return cy.get('.modal-content .card-footer button:eq(1)')
    }
    getDropDownItem()   //Select Drop-down item
    {
       return  cy.get('mat-option > span.mat-option-text')
    }
   /* getDropDownItem()
    {
        return cy.get('.mat-select-value span.mat-select-value-text')
    }
*/

    getSearchButton()  //   অনুসন্ধান করুন  
    {
        return cy.get('.row button.btn-success')
    }



    getNameFieldEn()  //
    {
        return cy.get('div input[formcontrolname="nameEn"]')
    }
    getNameFieldBn()  //
    {
        return cy.get('div input[formcontrolname="nameBn"]')
        //return cy.xpath('//ul[@class="todo-list"]')
    }




/*    getWholeCalender()
    {
        return cy.get('.mat-calendar:eq(3)')
    }
*/ 
   getStartcalenderIcon()
   {
       return cy.get('.mat-datepicker-toggle button:eq(0)')
   }
   getEndcalenderIcon()
   {
       return cy.get('.mat-datepicker-toggle button:eq(1)')
   }

       //Calendar, Pagination  & Few commom locators
    getCalendarYearView()   // Year View on the Calendar
    {
           return cy.get('button > span > div.mat-calendar-arrow')
    }
   getYearMonthDate()   //Pick Year Month and Date on the Calendar
   {
           return cy.get('td > div.mat-calendar-body-cell-content')
   }
   
   //Pagination

   getPaginationDropDownField()   //Pagination drop-down field
   {
       return cy.get('.card-body .e-pagesizes .e-pagerdropdown > span')
   }
   getPaginationDropDownFieldValue()   //Pagination drop-down value
   {
       return cy.get('div > ul > li')
   }


}export default CommonPage