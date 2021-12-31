import React from "react";

import { Series } from "./series";

type SeriesCardProperties = { title: string; imageText: string; imageUrl: string };

const SeriesCard = ({ title, imageText, imageUrl }: SeriesCardProperties): JSX.Element => (
  <article className="series-card">
    <h2 className="title">{title}</h2>
    <img className="image" alt={imageText} src={imageUrl} width="100%" height="100%" />
  </article>
);

const buildSeriesItem = (item: Series): JSX.Element => (
  <li className="series-item" key={item.id}>
    <SeriesCard title={item.title} imageText={item.title} imageUrl={item.image} />
  </li>
);

type SeriesListProperties = {
  series: Series[] | null;
};

const SeriesList = ({ series }: SeriesListProperties): JSX.Element | null =>
  series && (
    <ul className="series-list" data-testid="series-list">
      {series.map(buildSeriesItem)}
    </ul>
  );

export default SeriesList;
