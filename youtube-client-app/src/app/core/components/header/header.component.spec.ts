import {
  ComponentFixture, TestBed,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import {
  BehaviorSubject, Subject, Subscription,
} from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SearchDataService } from 'src/app/youtube/services/search-data.service';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let mockAuthService: AuthService;
  let mockSearchDataService: SearchDataService;
  let mockRouter: Router;

  beforeEach(async () => {
    mockAuthService = jasmine.createSpyObj(['login', 'logout', 'isUserAuth']);
    mockSearchDataService = jasmine.createSpyObj(['searchString$']);
    mockRouter = jasmine.createSpyObj(['navigate']);

    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],
      imports: [RouterTestingModule.withRoutes([])],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: SearchDataService, useValue: mockSearchDataService },
        { provide: Router, useValue: mockRouter },
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    mockAuthService.isUserAuth$ = new BehaviorSubject<boolean>(false);
    mockSearchDataService.searchString$ = new Subject<string>();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has <header> with "header" class', () => {
    const HeaderElement: HTMLElement = fixture.debugElement.nativeElement.querySelector('header.header');
    expect(HeaderElement).toBeTruthy();
  });

  it('should hide buttons', () => {
    const buttonElements: NodeListOf<HTMLElement> = fixture.debugElement.nativeElement.querySelectorAll('button');
    const LogoButtonElements: NodeListOf<HTMLElement> = fixture.debugElement.nativeElement.querySelectorAll('.header__logo');
    expect(buttonElements.length).toBe(0);
    expect(LogoButtonElements.length).toBe(1);
  });

  it('sorting block should be hidden', () => {
    const SortingBlockElements: NodeListOf<HTMLElement> = fixture.debugElement.nativeElement.querySelectorAll('.header__sort');
    expect(SortingBlockElements.length).toBe(0);
  });

  it('sorting block should be visible', () => {
    component.isSortingBlockVisible = true;
    fixture.detectChanges();
    const SortingBlockElements: NodeListOf<HTMLElement> = fixture.debugElement.nativeElement.querySelectorAll('.header__sort');
    expect(SortingBlockElements.length).toBe(1);
  });

  it('should react to userAuth changes', () => {
    mockAuthService.isUserAuth$.next(true);
    expect(component.isUserAuth).toBe(true);
    mockAuthService.isUserAuth$.next(false);
    expect(component.isUserAuth).toBe(false);
  });

  it('should toggle sorting block', () => {
    component.toggleDisplay();
    expect(component.isSortingBlockVisible).toBe(true);
    component.toggleDisplay();
    expect(component.isSortingBlockVisible).toBe(false);
  });

  it('should toggle search block', () => {
    component.isSearchBlockVisible = true;
    component.toggleSearchBlock();
    fixture.detectChanges();
    expect(component.isSearchBlockVisible).toBe(false);
    expect(component.isSortingBlockVisible).toBe(false);
    component.toggleSearchBlock();
    fixture.detectChanges();
    expect(component.isSearchBlockVisible).toBe(true);
  });

  it('should login', () => {
    component.login();
    expect(mockAuthService.login).toHaveBeenCalled();
  });

  it('should logout', () => {
    component.logout();
    expect(mockAuthService.logout).toHaveBeenCalled();
  });

  it('should routeToMain', () => {
    const subscription: Subscription = mockSearchDataService.searchString$.subscribe((value) => {
      expect(value).toBe('');
    });
    component.routeToMain();
    subscription.unsubscribe();
    expect(mockRouter.navigate).toHaveBeenCalledOnceWith(['']);
  });
});
