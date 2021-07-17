context("Smoke tests", () => {
  it("accesses the website", () => {
    cy.visit("/");

    cy.get('[data-testid="app"]').should("be.visible");
    cy.contains(/Version \d+\.\d+\.\d+/);
  });

  it("shows a list of anime series", () => {
    cy.visit("/");

    cy.get('[data-testid="series-list"]').should("be.visible");
  });
});
