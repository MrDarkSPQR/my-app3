import React from 'react';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom'; // Додайте імпорт BrowserRouter

describe('<Header />', () => {
  it('renders', () => {
    // Обгортаємо Header в Router
    cy.mount(
      <Router>
        <Header />
      </Router>
    );
  });
});
