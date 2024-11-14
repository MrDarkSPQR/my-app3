import React from 'react';
import Register from './Register';

describe('<Register />', () => {
  it('renders correctly when isOpen is true', () => {
    const onClose = cy.stub();

    cy.mount(<Register isOpen={true} onClose={onClose} />);
    
    cy.get('h2').contains('Реєстрація');
    cy.get('input[type="email"]').should('be.visible');
    cy.get('input[type="text"]').should('be.visible');
    cy.get('input[type="password"]').should('be.visible');
    cy.get('button').contains('Зареєструватися').should('be.visible');
  });

  it('handles register request correctly', () => {
    const onClose = cy.stub();

    cy.intercept('POST', 'http://localhost:5000/register', {
      statusCode: 200,
      body: { message: 'Реєстрація успішна!' },
    }).as('registerRequest');

    cy.mount(<Register isOpen={true} onClose={onClose} />);

    cy.get('input[type="email"]').type('test@gmail.com');
    cy.get('input[type="text"]').type('Login');
    cy.get('input[type="password"]').type('Password');
    cy.get('button').contains('Зареєструватися').click();
    cy.wait('@registerRequest');
    cy.wrap(onClose).should('have.been.calledOnce');
  });
});
