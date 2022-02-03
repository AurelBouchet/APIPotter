import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LogInterceptor implements HttpInterceptor {
  start: number = new Date().getTime();
  intercept(
    res: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(res);
    return next.handle(res).pipe(
      tap((response) => {
        if (response instanceof HttpResponse) {
          const elapsed = new Date().getTime() - this.start;
          console.log('la requête a pris ' + elapsed + 'ms');
        }
      })
    );
  }
}
