import React from 'react'
import Updates from './Updates'

describe('<Updates />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Updates />)
  })
})