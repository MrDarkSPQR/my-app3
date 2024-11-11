import React from 'react';
import Login from './Login';

describe('<Login />', () => {
  it('renders correctly when isOpen is true', () => {
    // Мокаємо функцію onClose
    const onClose = cy.stub();

    // Монтуючи компонент з параметром isOpen
    cy.mount(<Login isOpen={true} onClose={onClose} />);
    
    // Перевірка, чи рендериться елемент
    cy.get('h2').contains('Авторизація');
    cy.get('input[type="text"]').should('be.visible');
    cy.get('input[type="password"]').should('be.visible');
    cy.get('button').contains('Увійти').should('be.visible');
  });

  it('handles login request correctly', () => {
    // Мокаємо функцію onClose
    const onClose = cy.stub();

    // Мокаємо запит до сервера
    cy.intercept('POST', 'http://localhost:5000/login', {
      statusCode: 200,
      body: { message: 'Успішно увійшли!' },
    }).as('loginRequest');

    // Монтуючи компонент з параметром isOpen
    cy.mount(<Login isOpen={true} onClose={onClose} />);

    // Заповнюємо поля форми
    cy.get('input[type="text"]').type('Login');
    cy.get('input[type="password"]').type('Password');

    // Клік по кнопці Увійти
    cy.get('button').contains('Увійти').click();

    // Перевірка запиту
    cy.wait('@loginRequest');

    // Перевірка виклику onClose після успішного входу
    cy.wrap(onClose).should('have.been.calledOnce');
  });
});
