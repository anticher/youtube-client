import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { mockDetailsItem1 } from 'src/app/mock/mock-details-items';
import { DetailsItem } from '../../models/details-item.model';
import { FilterSearchResultsPipe } from '../../pipes/filter-search-results.pipe';
import { SearchDataService } from '../../services/search-data.service';

import { ResultComponent } from './result.component';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;
  let mockSearchDataService: SearchDataService;

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
    mockSearchDataService.searchData$ = new BehaviorSubject<DetailsItem[]>([])
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
