import React from "react";
import { render, screen, within } from "@testing-library/react";
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

    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();

    const seriesItems = await screen.findAllByRole("listitem");
    expect(seriesItems).toHaveLength(2);

    const firstSeries = seriesItems[0];
    expect(within(firstSeries).getByRole("heading")).toHaveTextContent("Cowboy Bebop");
    const firstImage = within(firstSeries).getByRole("img");
    expect(firstImage).toHaveAttribute("alt", "Cowboy Bebop");
    expect(firstImage).toHaveAttribute(
      "src",
      "https://media.kitsu.io/anime/poster_images/1/small.jpg?1597604210"
    );

    const secondSeries = seriesItems[1];
    expect(within(secondSeries).getByRole("heading")).toHaveTextContent(
      "Cowboy Bebop: Knockin' on Heaven's Door"
    );
    const secondImage = within(secondSeries).getByRole("img");
    expect(secondImage).toHaveAttribute("alt", "Cowboy Bebop: Knockin' on Heaven's Door");
    expect(secondImage).toHaveAttribute(
      "src",
      "https://media.kitsu.io/anime/poster_images/2/small.jpg?1597696808"
    );

    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });
});
