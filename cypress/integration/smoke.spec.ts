context("Smoke tests", () => {
  it("accesses the website", () => {
    cy.visit("/");

    cy.get('[data-testid="app"]').should("be.visible");
  });
});
