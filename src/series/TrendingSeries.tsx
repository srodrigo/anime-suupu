import React, { useEffect, useState } from "react";

import fetchTrendingSeriesList, { CollectionItem } from "./trendingSeries";

type ErrorMessageProperties = { message: string };

const ErrorMessage = ({ message }: ErrorMessageProperties): JSX.Element => (
  <p role="alert">{message}</p>
);

type SeriesListProperties = {
  series: CollectionItem[] | null;
};

const buildSeriesItem = (item: CollectionItem): JSX.Element => {
  const title = item.attributes.titles.en || item.attributes.titles.en_us;

  return (
    <li key={item.id}>
      <h2>{title}</h2>
      <img alt={title} src={item.attributes.posterImage.small} />
    </li>
  );
};

const SeriesList = ({ series }: SeriesListProperties): JSX.Element | null =>
  series && <ul data-testid="series-list">{series.map(buildSeriesItem)}</ul>;

const TrendingSeries = (): JSX.Element | null => {
  const [series, setSeries] = useState<CollectionItem[] | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    fetchTrendingSeriesList()
      .then(setSeries)
      .catch(() => setErrorMessage("Error retrieving series"));
  }, []);

  return errorMessage ? <ErrorMessage message={errorMessage} /> : <SeriesList series={series} />;
};

export default TrendingSeries;
