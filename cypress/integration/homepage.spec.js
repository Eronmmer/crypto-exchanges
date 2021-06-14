beforeEach(() => {
	cy.visit('/');
});

describe("Renders expected texts on the homepage", () => {
	it("should render the navbar correctly", () => {
		cy.get("a>h1").eq(0).contains("Crypto Exchanges 🚀");
	});

	it("should render header texts for the list of exchanges", () => {
		cy.get("div").eq(1).contains("Name");
		cy.get("div").eq(1).contains("Country");
		cy.get("div").eq(1).contains("Trust Score Rank");
	});
});

describe("Renders a list of exchanges", function () {
	// binance is used here beause it's always returned as the first data from the API
	it("should render Binance in the first paginated list of exchanges", () => {
		cy.get('[href="/binance"]').contains("Binance");
	});
});

describe("Renders a list with clickable items", function () {
	it("should click on an item on the list of exchanges and lead to its own page.", () => {
		cy.get('[href="/binance"]').click();
		cy.location().should((location) => {
			expect(location.pathname).to.eq('/binance');
		});
	});
});