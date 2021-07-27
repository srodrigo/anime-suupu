import axios, { AxiosResponse } from "axios";
import { CollectionResponse, CollectionItem } from "./series";

const fetchTrendingSeriesList = async (): Promise<CollectionItem[]> => {
  const response: AxiosResponse<CollectionResponse> = await axios.get(
    "https://kitsu.io/api/edge/trending/anime"
  );

  return response.data.data;
};

export default fetchTrendingSeriesList;
