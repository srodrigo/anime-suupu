import React from "react";
import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer, SetupServerApi } from "msw/node";

import TrendingSeries from "../series";

const server: SetupServerApi = setupServer(
  rest.get("https://kitsu.io/api/edge/trending/anime", (request, response, context) =>
    response(context.status(500))
  )
);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe("When the trending anime API returns an error response", () => {
  test("renders an error message", async () => {
    render(<TrendingSeries />);

    expect(await screen.findByRole("alert")).toBeInTheDocument();

    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
  });
});
