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
  private token: string = 'AIzaSyDeGGm5RmDJe9UcjRJu8q6Ky2ytesJ_irw';

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request.clone({
      params: request.params
        .set('key', this.token),
    }));
  }
}
