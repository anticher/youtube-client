import { DetailsResponse } from '../youtube/models/details-response.model';
import { mockDetailsItem1 } from './mock-details-items';

export const mockDetailsResponse: DetailsResponse = {
  kind: 'youtube#videoListResponse',
  etag: 'test',
  pageInfo: {
    totalResults: 1,
    resultsPerPage: 1,
  },
  items: [mockDetailsItem1],
};
