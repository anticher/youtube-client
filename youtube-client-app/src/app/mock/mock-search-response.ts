import { SearchResponse } from '../youtube/models/search-response.model';

export const mockSearchResponse: SearchResponse = {
  kind: 'youtube#searchListResponse',
  etag: 'Y5q7VyiIaO2jC798W8K7546ahEg',
  pageInfo: {
    totalResults: 1000000,
    resultsPerPage: 5,
  },
  items: [],
};
