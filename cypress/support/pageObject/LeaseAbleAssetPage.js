class LeaseAbleAssetPage

{
    getArea()
    {
        return cy.get('.card-body .mat-select-value:eq(0)')
    }
    getType()
    {
        return cy.get('.card-body .mat-select-value:eq(1)')
    }
    getParent()
    {
        return cy.get('.card-body .mat-select-value:eq(2)')
    }
    getOldRefNo()
    {
        return cy.get('.mat-form-field-infix input[formcontrolname="oldReferenceNo"]')
    }

    getOverAllComment()
    {
        return cy.get('.mat-form-field-infix textarea[formcontrolname="overallComment"]')
    }
     //// বৈশিষ্টসমূহ  

    getJLNoEn()   //জেএল নং *
    {
        return cy.get('.card-body input[type="text"]:eq(0)')
    }
    getJLNoBn()
    {
        return cy.get('.card-body input[type="text"]:eq(1)')
    }
    getMoujaEn()    //মৌজা *
    {
        return cy.get('.card-body input[type="text"]:eq(2)')
    }
    getMoujaBn()
    {
        return cy.get('.card-body input[type="text"]:eq(3)')
    }
    getKhotiyanNoEn()   //খতিয়ান নং *
    {
        return cy.get('.card-body input[type="text"]:eq(4)')
    }
    getKhotiyanNoBn()
    {
        return cy.get('.card-body input[type="text"]:eq(5)')
    }
    getJomirPorimanEn()  //জমির পরিমান *
    {
        return cy.get('.card-body input[type="text"]:eq(6)')
    }
    getJomirPorimanBn()
    {
        return cy.get('.card-body input[type="text"]:eq(7)')
    }
    getJomirSreniEn()  //জমির শ্রেনি *
    {
        return cy.get('.card-body input[type="text"]:eq(8)')
    }
    getJomirSreniBn()
    {
        return cy.get('.card-body input[type="text"]:eq(9)')
    }
    getDaagNoEn()  //দাগ নম্বর *
    {
        return cy.get('.card-body input[type="text"]:eq(10)')
    }
    getDaagNoBn()
    {
        return cy.get('.card-body input[type="text"]:eq(11)')
    }
    getDecimalEn()
    {
        return cy.get('.card-body input[type="text"]:eq(14)')
    }
    getDecimalBn()
    {
        return cy.get('.card-body input[type="text"]:eq(15)')
    }

}export default LeaseAbleAssetPage