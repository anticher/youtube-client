// import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { Router } from '@angular/router';
// import { BehaviorSubject, of, Subject } from 'rxjs';
// import { HeaderComponent } from './header.component';
// import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
// import { AuthService } from 'src/app/auth/services/auth.service';
// import { SearchDataService } from 'src/app/youtube/services/search-data.service';
// import { By } from '@angular/platform-browser';

// describe('HeaderComponent', () => {
//   let component: HeaderComponent;
//   let fixture: ComponentFixture<HeaderComponent>;
//   let mockAuthService: any;
//   let mockSearchDataService: any;
    
//   beforeEach(async () => {
//     mockAuthService = {
//         login: jasmine.createSpy('login').and.returnValue(undefined),
//         logout: jasmine.createSpy('logout').and.returnValue(undefined),
//     },
//     mockSearchDataService = {},


//     await TestBed.configureTestingModule({
//       declarations: [HeaderComponent],
//       schemas: [
//         CUSTOM_ELEMENTS_SCHEMA
//       ],
//       imports: [RouterTestingModule.withRoutes([])],
//       providers: [
//         { provide: AuthService, useValue: mockAuthService },
//         { provide: SearchDataService, useValue: mockSearchDataService },
//       ]
//     })
//       .compileComponents();

//       mockAuthService.isUserAuth$ = new BehaviorSubject(false)
//       mockSearchDataService.searchString$ = new BehaviorSubject('')
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(HeaderComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should has <header> with "header" class', () => {
//     const HeaderElement: HTMLElement = fixture.debugElement.nativeElement.querySelector('header.header');
//     expect(HeaderElement).toBeTruthy();
//   });

//   it('should has 3 buttons, one of them - login', () => {
//     const buttonElements: NodeListOf<HTMLElement> = fixture.debugElement.nativeElement.querySelectorAll('button');
//     const LogoButtonElement: HTMLElement = fixture.debugElement.nativeElement.querySelector('app-logo-button');
//     expect(buttonElements.length).toBe(2);
//     expect(LogoButtonElement).toBeTruthy;
//     expect(buttonElements[1].textContent).toBe('login')
//   });

//   it('sorting block should be hidden', waitForAsync(() => {
//     const SortingBlockDebugElement: DebugElement = fixture.debugElement.query(By.css('.header__sort'))
//     fixture.whenStable().then(() => {
//       expect(SortingBlockDebugElement).toBeNull;
//   })
    
//   }));

//   it('sorting block should be visible', () => {
//     component.isSortingVisible = true
//     fixture.detectChanges();
//     const SortingBlockElement: HTMLElement = fixture.debugElement.query(By.css('.header__sort')).nativeElement
//     expect(SortingBlockElement).not.toBeNull;
//   });

//   it('should has 3 buttons, one of them - logout', waitForAsync(() => {
//     const buttonElements: NodeListOf<HTMLElement> = fixture.debugElement.nativeElement.querySelectorAll('button');
//     const LogoButtonElement: HTMLElement = fixture.debugElement.nativeElement.querySelector('app-logo-button');
//     expect(buttonElements.length).toBe(2);
//     expect(LogoButtonElement).toBeTruthy;
//     mockAuthService.isUserAuth$.next(true)
//     fixture.autoDetectChanges();
//     fixture.whenStable().then(() => {
//         const buttonElements: NodeListOf<HTMLElement> = fixture.debugElement.nativeElement.querySelectorAll('button');
//         expect(buttonElements[1].textContent).toBe('logout')
//     })
//   }));

// });
