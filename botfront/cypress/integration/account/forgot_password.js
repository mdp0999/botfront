/* eslint-disable no-undef */
describe('Forgot password', function() {
    it('Open lost password', function() {
        cy.visit('http://localhost:3000');
        cy.contains('Forgot your password?').click();
        cy.url().should('be', '/forgot-password');
    });

    it('Non existing email returns ambiguous message', function() {
        cy.visit('http://localhost:3000/forgot-password');
        cy.get('#uniforms-0000-0000')
            .type('nathan@mrbot.ai')
            .should('have.value', 'nathan@mrbot.ai');
        cy.contains('Continue').click();
        cy.wait(500);
        cy.get('.ui.positive.message .header').should('contain', 'Check your email inbox');
        cy.get('.ui.message .header+p ').should('contain', 'If you have an account with us, you will find the instructions to reset your password in your inbox');
    });

    it('Go back to login', function() {
        cy.visit('http://localhost:3000/forgot-password');
        cy.contains('Back to Sign in').click();
        cy.url().should('be', '/login');
    });
});
