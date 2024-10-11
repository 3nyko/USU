describe('wikipedia search test', () => {

  it('passes', () => {
    // Open Wikipedia
    cy.visit('https://en.wikipedia.org/wiki/Main_Page')

    // Click on the search button (useful when the page's width is reduced)
    cy.get('a.cdx-button--fake-button[title="Search Wikipedia [alt-shift-f]"]').click();

    // Type into search box at Wikipedia string „Schwarzenegger“
    cy.get('input.cdx-text-input__input').type('Schwarzenegger');

    // Submit the search
    //cy.get('form#searchform').submit();
    cy.get('button.cdx-search-input__end-button.cdx-button').click();

    // Verify that the returned search result is Wikipedia page about Arnold Schwarzenegger
    cy.url().should('include', 'wikipedia'); // Check the URL
    cy.url().should('include', 'Arnold_Schwarzenegger'); // Check the URL
    cy.get('h1').should('contain', 'Arnold Schwarzenegger'); // Check the page title
  })
})