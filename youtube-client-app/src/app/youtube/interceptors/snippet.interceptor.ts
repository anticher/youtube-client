import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SnippetInterceptor implements HttpInterceptor {
  private param: string = 'part';

  private value: string = 'snippet';

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request.clone({
      params: request.params
        .set(this.param, this.value),
    }));
  }
}
