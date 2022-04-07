import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BaseInterceptor implements HttpInterceptor {
  private baseUrl: string = 'https://www.googleapis.com/youtube/v3/';

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiReq = request.clone({ url: this.baseUrl + request.url });
    return next.handle(apiReq);
  }
}
