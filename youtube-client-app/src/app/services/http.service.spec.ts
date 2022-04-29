import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { mockDetailsResponse } from '../mock/mock-details-response';
import { mockSearchResponse } from '../mock/mock-search-response';

import { HttpService } from './http.service';

describe('HttpService', () => {
  let service: HttpService;
  let mockHttpClient: HttpClient;

  beforeEach(() => {
    mockHttpClient = jasmine.createSpyObj(['get']);

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
    mockHttpClient.get = jasmine.createSpy().and.returnValue(of(mockSearchResponse));
    mockHttpClient.get('test');
    service.getYoutubeIds('').subscribe((value) => expect(value).toEqual(mockSearchResponse)).unsubscribe();
  });

  it('should return Items', () => {
    mockHttpClient.get = jasmine.createSpy().and.returnValue(of(mockDetailsResponse));
    mockHttpClient.get('test');
    service.getYoutubeItems('').subscribe((value) => expect(value).toEqual(mockDetailsResponse)).unsubscribe();
  });
});
