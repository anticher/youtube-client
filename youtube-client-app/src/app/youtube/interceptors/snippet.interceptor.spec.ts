import { TestBed } from '@angular/core/testing';

import { SnippetInterceptor } from './snippet.interceptor';

describe('SnippetInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SnippetInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SnippetInterceptor = TestBed.inject(SnippetInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
