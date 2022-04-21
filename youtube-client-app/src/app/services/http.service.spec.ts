import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { DetailsItem } from '../youtube/models/details-item.model';
import { DetailsResponse } from '../youtube/models/details-response.model';
import { SearchResponse } from '../youtube/models/search-response.model';

import { HttpService } from './http.service';

const mockDetailsResponse: DetailsResponse = {
    kind: "youtube#searchListResponse",
    etag: "Y5q7VyiIaO2jC798W8K7546ahEg",
    pageInfo: {
      totalResults: 1,
      resultsPerPage: 1
    },
    items: []
  }

const mockSearchResponse: SearchResponse = {
    kind: "youtube#searchListResponse",
    etag: "Y5q7VyiIaO2jC798W8K7546ahEg",
    pageInfo: {
        totalResults: 1000000,
        resultsPerPage: 5
    },
    items: []
}

describe('HttpService', () => {
  let service: HttpService;
  let mockHttpClient: any;

  beforeEach(() => {
    mockHttpClient = jasmine.createSpyObj(['get'])

    TestBed.configureTestingModule({
        providers: [
            { provide: HttpClient, useValue: mockHttpClient },
        ],
    });
    service = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return Ids', () => {
    mockHttpClient.get.and.returnValue(of(mockSearchResponse))
    service.getYoutubeIds('').subscribe(value => expect(value).toEqual(mockSearchResponse))
  });

  it('should return Items', () => {
    mockHttpClient.get.and.returnValue(of(mockDetailsResponse))
    service.getYoutubeItems('').subscribe(value => expect(value).toEqual(mockDetailsResponse))
  });
});
