import 'cypress-file-upload';

describe('Auth spec', () => {
  it('Correct registration', () => {
      cy.visit('/');
      
      cy.contains('Зареєструватись').click();
      cy.get('[type="email"]').type("qwerty@gmail.com");
      cy.get('[type="text"]').type("user1");
      cy.get('[type="password"]').type("1234");
      
      cy.get('.register-button').click();
      cy.reload();
  });

  it('Correct login', () => {
      cy.visit('/');
      
      cy.contains('Увійти').click();
      cy.get('[type="text"]').type("user1");
      cy.get('[type="password"]').type("1234");
    
      cy.get('.login-button').click();
      cy.reload();
  });
  it('EditorPages test', () => {
    cy.visit('/');
  

    cy.contains('Редактор').click();
  
    
    cy.get('.file-input').attachFile('converted_image.jpg');
  

    cy.get('.image-display img').should('be.visible');
    const expectedFormats = ['JPG', 'PNG', 'GIF', 'BMP', 'WEBP', 'TIFF'];
    cy.get('.format-select').children('option').should('have.length', expectedFormats.length)
        .each((option, index) => {
            expect(option).to.contain(expectedFormats[index]);
        });
    cy.get('.format-select').select('WEBP').should('have.value', 'WEBP');

    cy.contains('Конвертувати').click();

    cy.get('.info-details').should('not.contain', '0 x 0 | 0 Кб | WEBP'); 
    cy.get('.info-details').should('contain', 'WEBP'); 
    cy.get('.info-details').invoke('text').then((text) => {
        expect(text).to.match(/\d+ x \d+ \| \d+ Кб \| WEBP/); 
    });
  });
  it('UpdatesPage test', () => {
    cy.visit('/');
    cy.contains('Оновлення').click();
    cy.contains('Розгорнути').click();

    cy.url().should('include', '/updates')
    cy.contains('Згорнути').click();
  })
  it('AboutPage test', () => {
      cy.visit('/');
      cy.contains('Про нас').click();
      cy.url().should('include', '/about')

})
})
