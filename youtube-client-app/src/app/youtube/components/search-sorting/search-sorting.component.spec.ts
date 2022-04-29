import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { DetailsItem } from '../../models/details-item.model';
import { SearchDataService } from '../../services/search-data.service';

import { SearchSortingComponent } from './search-sorting.component';

describe('SearchSortingComponent', () => {
  let component: SearchSortingComponent;
  let fixture: ComponentFixture<SearchSortingComponent>;
  let mockAuthService: AuthService;
  let mockSearchDataService: SearchDataService;

  beforeEach(async () => {
    mockAuthService = jasmine.createSpyObj(['isUserAuth']);
    mockSearchDataService = jasmine.createSpyObj(['searchData$', 'changeSearchTag', 'sortResultByViews', 'sortResultByDate']);
    await TestBed.configureTestingModule({
      declarations: [SearchSortingComponent],
      imports: [FormsModule],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: SearchDataService, useValue: mockSearchDataService },
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSortingComponent);
    component = fixture.componentInstance;
    mockAuthService.isUserAuth$ = new BehaviorSubject<boolean>(false);
    mockSearchDataService.searchData$ = new BehaviorSubject<DetailsItem[]>([]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sort by date', () => {
    component.dateSort();
    expect(mockSearchDataService.sortResultByDate).toHaveBeenCalled();
  });

  it('should sort by views', () => {
    component.viewsSort();
    expect(mockSearchDataService.sortResultByViews).toHaveBeenCalled();
  });

  it('should sort by date', () => {
    component.viewsSort();
    expect(mockSearchDataService.sortResultByViews).toHaveBeenCalled();
  });

  it('should filter by tag', () => {
    const tagInputdebug = fixture.debugElement.query(By.css('.search-sorting__input'));
    const tagInputElement = tagInputdebug.nativeElement;
    tagInputElement.value = 'he';
    mockSearchDataService.changeSearchTag = jasmine.createSpy();
    tagInputdebug.triggerEventHandler('input', { target: tagInputElement });
    expect(mockSearchDataService.changeSearchTag).toHaveBeenCalledOnceWith('he');
  });
});
