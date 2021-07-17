import React from "react";
import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer, SetupServerApi } from "msw/node";

import animesListSuccessResponse from "./fixtures/animesListSuccessResponse.json";

import TrendingSeries from "../series";

const server: SetupServerApi = setupServer(
  rest.get("https://kitsu.io/api/edge/trending/anime", (request, response, context) =>
    response(context.json(animesListSuccessResponse))
  )
);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe("When the trending anime API returns an success response", () => {
  test("renders list of trending series", async () => {
    render(<TrendingSeries />);

    const initialSeriesItems = screen.queryByRole("listitem");
    expect(initialSeriesItems).not.toBeInTheDocument();

    const seriesItems = await screen.findAllByRole("listitem");

    expect(seriesItems).toHaveLength(2);
    expect(seriesItems[0]).toHaveTextContent("Cowboy Bebop");
    expect(seriesItems[1]).toHaveTextContent("Cowboy Bebop: Knockin' on Heaven's Door");

    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });
});
