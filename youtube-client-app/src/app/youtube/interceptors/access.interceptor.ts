import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AccessInterceptor implements HttpInterceptor {

  constructor() { }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = 'AIzaSyBPdJUu1x58aVSiKN-mMypDuwZDnvhzAxQ';
    return next.handle(request.clone({
      params: request.params
        .set('key', token)
    }));
  }

}
