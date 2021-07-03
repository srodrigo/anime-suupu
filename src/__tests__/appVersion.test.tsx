import React from "react";
import { render, screen } from "@testing-library/react";

import { AppContext, AppContextProperties } from "../App";
import Root from "../Root";

const renderWithContext = (component: JSX.Element, properties: AppContextProperties) =>
  render(<AppContext.Provider value={properties}>{component}</AppContext.Provider>);

test("renders app version", () => {
  renderWithContext(<Root />, { version: "2.9.7" });

  expect(screen.getByText("Version 2.9.7")).toBeVisible();
});
