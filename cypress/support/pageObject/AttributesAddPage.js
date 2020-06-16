class AttributesAddPage
{
    getAddAttributesButton()  //Add Attribute Plus Button
    {
        return cy.get('.card-header button')
    }
    getAttNameFieldEn()  //
    {
        return cy.get('div input[formcontrolname="nameEn"]')
    }
    getAttNameFieldBn()  //
    {
        return cy.get('div input[formcontrolname="nameBn"]')
        //return cy.xpath('//ul[@class="todo-list"]')
    }
    getAttDescription()
    {
        return cy.get('div input[formcontrolname="description"]')
    }
    getAttSubmit()
    {
        return cy.get('div button[type="button"]:eq(3)')
    }
}export default AttributesAddPage;