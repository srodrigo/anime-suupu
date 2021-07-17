import React, { useEffect, useState } from "react";

import fetchTrendingSeriesList, { CollectionItem } from "./trendingSeries";

type ErrorMessageProperties = { message: string };

const ErrorMessage = ({ message }: ErrorMessageProperties): JSX.Element => (
  <p role="alert">{message}</p>
);

type SeriesListProperties = {
  series: CollectionItem[] | null;
};

const SeriesList = ({ series }: SeriesListProperties): JSX.Element | null =>
  series && (
    <ul data-testid="series-list">
      {series.map((item) => (
        <li key={item.id}>{item.attributes.titles.en || item.attributes.titles.en_us}</li>
      ))}
    </ul>
  );

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
