import React from 'react';
import HomePages from './Home';
import { BrowserRouter as Router } from 'react-router-dom'; // Додайте імпорт BrowserRouter

describe('<HomePages />', () => {
  it('renders', () => {
    // Обгортаємо HomePages в Router
    cy.mount(
      <Router>
        <HomePages />
      </Router>
    );
  });
});
