import React from 'react';
import HomePages from './Home';
import { BrowserRouter as Router } from 'react-router-dom'; 

describe('<HomePages />', () => {
  it('renders', () => {
    cy.mount(
      <Router>
        <HomePages />
      </Router>
    );
  });
});
