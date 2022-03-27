import { SearchItem } from './search-item.model';

export interface SearchResponse {
  kind: string,
  etag: string,
  nextPageToken: string,
  regionCode: string,
  pageInfo: {
    totalResults: number,
    resultsPerPage: number
  },
  items: SearchItem[];
}
