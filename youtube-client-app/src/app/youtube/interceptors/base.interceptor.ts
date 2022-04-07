import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BaseInterceptor implements HttpInterceptor {

  constructor() {}

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // return next.handle(request.clone({
    //   params: request.params
    //     .set('part', 'snippet')
    // }));
    const apiReq = request.clone({ url: `https://www.googleapis.com/youtube/v3/${request.url}` });
    return next.handle(apiReq);
  }
}

