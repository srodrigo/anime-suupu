type Locale = "en" | "en_us" | "en_jp" | "ja_jp";

export type Series = {
  id: string;
  title: string;
  image: string;
};

export type CollectionItem = {
  id: string;
  attributes: {
    titles: {
      [locale in Locale]?: string;
    };
    posterImage: {
      small: string;
    };
  };
};

export type CollectionResponse = {
  data: CollectionItem[];
};

export const apiToDomain = (apiSeries: CollectionItem): Series => {
  const {
    id,
    attributes: { titles, posterImage },
  } = apiSeries;

  return {
    id,
    title: titles.en ?? titles.en_us ?? titles.en_jp ?? titles.ja_jp ?? "",
    image: posterImage.small,
  };
};
