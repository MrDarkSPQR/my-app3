import React from 'react';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom'; 

describe('<Header />', () => {
  it('renders', () => {
    
    cy.mount(
      <Router>
        <Header />
      </Router>
    );
  });
});
