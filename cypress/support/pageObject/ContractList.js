class ContractList
{
  getIjararPoriman()
  {
      return cy.get('.mat-form-field-infix input[placeholder="ইজারা হার"]')
  }
  getIjaraDhoron()
  {
      return cy.get('.mat-form-field-infix input[placeholder="ইজারার ধরন"]')
  }
  getIjaraUddeshho()
  {
      return cy.get('.mat-form-field-infix input[placeholder="উদ্দেশ্য"]')
  }
  getAddProperty()
  {
      return cy.get('div button[type="button"]:eq(4)')
  }
  getContractArea()
  {
      return cy.get('.card-body .mat-select-value:eq(2)')
  }
  getContactProperty()
  {
      return cy.get('.card-body .mat-select-value:eq(3)')
  }
  getRightArrow()
  {
      return cy.get('div button[type="button"]:eq(8)')
  }
  getContractPlusButton()
  {
      return cy.get('div button[type="button"]:eq(9)')
  }
  getContractAddButton()
  {
      return cy.get('div button[type="button"]:eq(11)')
  }
  getContractSaveButton()
  {
      return cy.get('div button[type="button"]:eq(6)')
  }


}export default ContractList