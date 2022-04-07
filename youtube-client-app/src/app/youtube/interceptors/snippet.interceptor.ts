import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SnippetInterceptor implements HttpInterceptor {

  constructor() {}

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request.clone({
      params: request.params
        .set('part', 'snippet')
    }));
  }
}
