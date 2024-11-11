import React from 'react';
import Register from './Register';

describe('<Register />', () => {
  it('renders correctly when isOpen is true', () => {
    // Мокаємо функцію onClose
    const onClose = cy.stub();

    // Монтуючи компонент з параметром isOpen
    cy.mount(<Register isOpen={true} onClose={onClose} />);
    
    // Перевірка, чи рендериться елемент
    cy.get('h2').contains('Реєстрація');
    cy.get('input[type="email"]').should('be.visible');
    cy.get('input[type="text"]').should('be.visible');
    cy.get('input[type="password"]').should('be.visible');
    cy.get('button').contains('Зареєструватися').should('be.visible');
  });

  it('handles register request correctly', () => {
    // Мокаємо функцію onClose
    const onClose = cy.stub();

    // Мокаємо запит до сервера
    cy.intercept('POST', 'http://localhost:5000/register', {
      statusCode: 200,
      body: { message: 'Реєстрація успішна!' },
    }).as('registerRequest');

    // Монтуючи компонент з параметром isOpen
    cy.mount(<Register isOpen={true} onClose={onClose} />);

    // Заповнюємо поля форми
    cy.get('input[type="email"]').type('test@gmail.com');
    cy.get('input[type="text"]').type('Login');
    cy.get('input[type="password"]').type('Password');

    // Клік по кнопці Зареєструватися
    cy.get('button').contains('Зареєструватися').click();

    // Перевірка запиту
    cy.wait('@registerRequest');

    // Перевірка виклику onClose після успішної реєстрації
    cy.wrap(onClose).should('have.been.calledOnce');
  });
});
