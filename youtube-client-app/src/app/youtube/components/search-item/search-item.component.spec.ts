import { not } from '@angular/compiler/src/output/output_ast';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SearchDataService } from '../../services/search-data.service';

import { SearchItemComponent } from './search-item.component';

describe('SearchItemComponent', () => {
  let component: SearchItemComponent;
  let fixture: ComponentFixture<SearchItemComponent>;
  let mockRouter: any
  let mockActivatedRoute: any
  let mockAuthService: AuthService
  let mockSearchDataService: SearchDataService

  beforeEach(async () => {
    mockAuthService = jasmine.createSpyObj(['isUserAuth'])
    mockSearchDataService = jasmine.createSpyObj(['searchString$'])
    mockRouter = jasmine.createSpyObj(['navigate', 'url'])
    mockRouter.url = '/'

    await TestBed.configureTestingModule({
      declarations: [SearchItemComponent],
      imports: [FormsModule],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: AuthService, useValue: mockAuthService },
        { provide: SearchDataService, useValue: mockSearchDataService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchItemComponent);
    component = fixture.componentInstance;
    mockAuthService.isUserAuth$ = new BehaviorSubject<boolean>(false);
    mockSearchDataService.searchString$ = new Subject()
    mockSearchDataService.searchString$.next = jasmine.createSpy()
    mockRouter.navigate = jasmine.createSpy()
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle sorting', () => {
    const event = spyOn(component.toggleDisplay, 'emit')
    component.toggleSettings()
    expect(event).toHaveBeenCalled();
  });

  describe('check search input', () => {
    function emitSearch(): void {
        const searchInputdebug = fixture.debugElement.query(By.css('.search-item__input'));
        const searchInputElement = searchInputdebug.nativeElement
        searchInputElement.value = 'he'
        searchInputdebug.triggerEventHandler('input', { target: searchInputElement});
    }
    it('should change search string', () => {
        emitSearch()
        expect(mockSearchDataService.searchString$.next).toHaveBeenCalledOnceWith('he')
        expect(mockRouter.navigate).not.toHaveBeenCalled()
      });
    
      it('should redirect', () => {
        mockRouter.url = 'test'
        emitSearch()
        expect(mockRouter.navigate).toHaveBeenCalledOnceWith([''])
        expect(mockSearchDataService.searchString$.next).toHaveBeenCalled()
      });
  });
});
