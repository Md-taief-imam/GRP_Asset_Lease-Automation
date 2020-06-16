class LeaseAttributeMapping
{
    getAddAttributesButton()  //Add Attribute Plus Button
    {
        return cy.get('.card-header button')
    }
    getDropDownItem()   //Select Drop-down item
    {
        return  cy.get('mat-option > span.mat-option-text')
    }
    getSelectLeaseType()
    {
        return cy.get('.card-body mat-form-field mat-select[aria-label="ইজারার ধরন"]')
    }
    getSelectAttributeType()
    {
        return cy.get('.card-body mat-select[formcontrolname="leaseAttributeOid"]')
    }
    getSelectMandatoryField()
    {
        return cy.get('mat-checkbox .mat-checkbox-inner-container ')
    }
    getAttMappingSubmit()
    {
        return cy.get('div button[type="button"]:eq(3)')
    }

    


}export default LeaseAttributeMapping