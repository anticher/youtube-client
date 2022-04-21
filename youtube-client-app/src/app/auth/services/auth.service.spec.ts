import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { SearchDataService } from 'src/app/youtube/services/search-data.service';

import { AuthService } from './auth.service';

let mockSearchDataService: any;
let mockRouter: any;

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    mockSearchDataService = jasmine.createSpyObj(['clearSearchDataSubject'])
    mockRouter = jasmine.createSpyObj(['navigate'])
    TestBed.configureTestingModule({
        providers: [
            { provide: SearchDataService, useValue: mockSearchDataService },
            { provide: Router, useValue: mockRouter },
        ],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should check is user Auth', (done) => {
    localStorage.removeItem('login');
    service.isUserAuth$.next(false)
    service.checkIsAuth()
    expect(mockRouter.navigate).toHaveBeenCalledTimes(1)
    localStorage.setItem('login', 'test');
    service.checkIsAuth()
    expect(service.isUserAuth$.value).toBe(true)
    localStorage.removeItem('login');
    done();
  });

  it('should login', (done) => {
    service.login();
    expect(service.isUserAuth$.value).toBe(true)
    expect(localStorage.getItem('login')).toBeTruthy
    expect(mockRouter.navigate).toHaveBeenCalledTimes(1)
    done();
  });

  it('should logout', (done) => {
    service.logout();
    expect(service.isUserAuth$.value).toBeFalsy
    expect(localStorage.getItem('login')).toBeFalsy
    expect(mockRouter.navigate).toHaveBeenCalledTimes(1)
    done();
  });
});
