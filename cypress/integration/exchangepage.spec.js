beforeEach(() => {
  cy.visit('/');
	// binance is used here beause it's always returned as the first data from the API
  cy.get('[href="/binance"]').click();
});

describe("Renders an exchange correctly", function () {
	it("Should include the correct name and a valid link to its website.", () => {
		cy.get('h2 > a').contains('Binance');
		cy.get('h2 > a').should('have.attr', 'href', 'https://www.binance.com/');
	});
	
	it("Should render a logo.", () => {
		cy.wait(500)
		cy.get('img').eq(1).should('have.attr', 'src').then(src => {
    	expect(src.startsWith("https://assets.coingecko.com")).to.be.true;
  	});
	});
});