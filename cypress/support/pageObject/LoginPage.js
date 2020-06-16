class LoginPage{
    getUserNameField()  //User name field
    {
        return cy.get('input[name="username"]')
    }
    getPasswordField()
    {
        return cy.get('input[placeholder="পাসওয়ার্ড"]')
    }
    getEnterButton()
    {
        return cy.get('button[type="button"]:eq(0)')
    }
}export default LoginPage;