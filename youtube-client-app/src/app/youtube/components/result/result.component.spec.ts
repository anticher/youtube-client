import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { DetailsItem } from '../../models/details-item.model';
import { FilterSearchResultsPipe } from '../../pipes/filter-search-results.pipe';
import { SearchDataService } from '../../services/search-data.service';

import { ResultComponent } from './result.component';

const mockDetailsItem1: DetailsItem = {
  kind: "youtube#video",
  etag: "1",
  id: "KnumAWWWgUE",
  snippet: {
    publishedAt: "2021-04-02T18:00:14Z",
    channelId: "UC652oRUvX1onwrrZ8ADJRPw",
    title: "Playboi Carti - Sky [Official Video]",
    description: "Directed by Nick Walker",
    thumbnails: {
      default: {
        url: "https://i.ytimg.com/vi/KnumAWWWgUE/default.jpg",
        width: 120,
        height: 90
      },
      medium: {
        url: "https://i.ytimg.com/vi/KnumAWWWgUE/mqdefault.jpg",
        width: 320,
        height: 180
      },
      high: {
        url: "https://i.ytimg.com/vi/KnumAWWWgUE/hqdefault.jpg",
        width: 480,
        height: 360
      },
    },
    channelTitle: "Playboi Carti",
    categoryId: "10",
    tags: ["test"],
    liveBroadcastContent: "none",
    localized: {
      title: "Playboi Carti - Sky [Official Video]",
      description: "Directed by Nick Walker",
    },
    defaultAudioLanguage: "none",
  },
  statistics: {
    viewCount: "39322063",
    likeCount: "1009432",
    favoriteCount: "0",
    commentCount: "45859"
  }
}

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;
  let mockSearchDataService: any;

  beforeEach(async () => {
    mockSearchDataService = jasmine.createSpyObj(['searchData$', 'filterString$'])

    await TestBed.configureTestingModule({
      declarations: [ResultComponent, FilterSearchResultsPipe],
      providers: [{ provide: SearchDataService, useValue: mockSearchDataService }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    mockSearchDataService.searchData$ = new BehaviorSubject([])
    mockSearchDataService.filterString$ = new BehaviorSubject('')
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create item', () => {
    mockSearchDataService.searchData$.next([mockDetailsItem1])
    fixture.detectChanges();
    const itemElement: HTMLElement = fixture.debugElement.nativeElement.querySelector('.result__item')
    expect(itemElement).toBeTruthy();
  });
});
