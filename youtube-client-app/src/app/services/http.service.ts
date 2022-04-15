import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailsResponse } from '../youtube/models/details-response.model';
import { SearchResponse } from '../youtube/models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) { }

  getYoutubeIds(url: string): Observable<SearchResponse> {
    return this.http.get<SearchResponse>(url);
  }

  getYoutubeItems(url: string): Observable<DetailsResponse> {
    return this.http.get<DetailsResponse>(url);
  }
}
