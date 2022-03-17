import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as testData from './testResponceData.json'


@Injectable({
  providedIn: 'root'
})
export class SearchDataService {
  data = testData

  constructor(private http: HttpClient) { }

  getData():any {
    return this.data
  }
}
