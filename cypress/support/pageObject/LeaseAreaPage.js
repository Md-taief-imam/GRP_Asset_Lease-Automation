class LeaseAreaPage
{
    getLeaseNameAddButton()  //Add Attribute Plus Button
    {
        return cy.get('.card-header button')
    }
    getLeaseNameFieldEn()  //
    {
        return cy.get('div input[formcontrolname="nameEn"]')
    }
    getLeaseNameFieldBn()  //
    {
        return cy.get('div input[formcontrolname="nameBn"]')
        //return cy.xpath('//ul[@class="todo-list"]')
    }
    getLeaseNameDescription()
    {
        return cy.get('div input[formcontrolname="description"]')
    }
    getLeaseAreaSubmit()
    {
        return cy.get('div button[type="button"]:eq(3)')
    }


}export default LeaseAreaPage;