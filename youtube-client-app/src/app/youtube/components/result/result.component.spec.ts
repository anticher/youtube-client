import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { FilterSearchResultsPipe } from '../../pipes/filter-search-results.pipe';
import { SearchDataService } from '../../services/search-data.service';

import { ResultComponent } from './result.component';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;
  let mockSearchDataService: any;

  beforeEach(async () => {
    mockSearchDataService = jasmine.createSpyObj(['searchData$', 'filterString$'])

    await TestBed.configureTestingModule({
      declarations: [ResultComponent, FilterSearchResultsPipe],
      providers: [{ provide: SearchDataService, useValue: mockSearchDataService }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    mockSearchDataService.searchData$ = new BehaviorSubject([])
    mockSearchDataService.filterString$ = new BehaviorSubject('test')
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
