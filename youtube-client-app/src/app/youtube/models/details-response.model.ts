import { DetailsItem } from './details-item.model';

export interface DetailsResponse {
  kind: string,
  etag: string,
  pageInfo: {
    totalResults: number,
    resultsPerPage: number
  },
  items: DetailsItem[];
}
