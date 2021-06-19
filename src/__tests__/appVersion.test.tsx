import React from "react";
import { render, screen } from "@testing-library/react";

import App from "../App";

test("renders app version", () => {
  render(<App version="2.9.7" />);

  expect(screen.getByText("Version 2.9.7")).toBeVisible();
});
