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
  private token: string = 'AIzaSyBPdJUu1x58aVSiKN-mMypDuwZDnvhzAxQ';

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request.clone({
      params: request.params
        .set('key', this.token),
    }));
  }
}
