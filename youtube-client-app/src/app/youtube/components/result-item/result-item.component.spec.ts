import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultItemBorderColorDirective } from '../../directives/result-item-border-color.directive';
import { DetailsItem } from '../../models/details-item.model';
import { SetColorByDatePipe } from '../../pipes/set-color-by-date.pipe';

import { ResultItemComponent } from './result-item.component';

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

describe('ResultItemComponent', () => {
  let component: ResultItemComponent;
  let fixture: ComponentFixture<ResultItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultItemComponent, SetColorByDatePipe, ResultItemBorderColorDirective],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.item = mockDetailsItem1
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set item info', () => {
    const titleElement: HTMLElement = fixture.debugElement.nativeElement
    .querySelector('.result-item__title')
    expect(component.channelTitle).toBeTruthy
    fixture.detectChanges();
    expect(component.channelTitle).toBe(titleElement.textContent!)
  });
});
