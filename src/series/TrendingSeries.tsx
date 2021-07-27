import React, { useEffect, useState } from "react";

import { CollectionItem, Series, apiToDomain } from "./series";
import fetchTrendingSeriesList from "./trendingSeries";
import SeriesList from "./SeriesList";
import ErrorMessage from "./ErrorMessage";

const toDomainSeries = (apiSeries: CollectionItem[]): Series[] => apiSeries.map(apiToDomain);

const TrendingSeries = (): JSX.Element | null => {
  const [series, setSeries] = useState<Series[] | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    fetchTrendingSeriesList()
      .then(toDomainSeries)
      .then(setSeries)
      .catch(() => setErrorMessage("Error retrieving series"));
  }, []);

  return errorMessage ? <ErrorMessage message={errorMessage} /> : <SeriesList series={series} />;
};

export default TrendingSeries;
