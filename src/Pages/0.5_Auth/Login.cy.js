import React from 'react';
import Login from './Login';

describe('<Login />', () => {
  it('renders correctly when isOpen is true', () => {
    
    const onClose = cy.stub();

    cy.mount(<Login isOpen={true} onClose={onClose} />);

    cy.get('h2').contains('Авторизація');
    cy.get('input[type="text"]').should('be.visible');
    cy.get('input[type="password"]').should('be.visible');
    cy.get('button').contains('Увійти').should('be.visible');
  });

  it('handles login request correctly', () => {
    const onClose = cy.stub();

    // Мокаємо запит до сервера
    cy.intercept('POST', 'http://localhost:5000/login', {
      statusCode: 200,
      body: { message: 'Успішно увійшли!' },
    }).as('loginRequest');

    cy.mount(<Login isOpen={true} onClose={onClose} />);

    cy.get('input[type="text"]').type('Login');
    cy.get('input[type="password"]').type('Password');
    cy.get('button').contains('Увійти').click();
    cy.wait('@loginRequest');
    cy.wrap(onClose).should('have.been.calledOnce');
  });
});
