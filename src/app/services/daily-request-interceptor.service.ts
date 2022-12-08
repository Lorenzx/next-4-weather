import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DailyRequestInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          console.log(
            'Interceptor on API request success to implement once per day weather data request, request timestamp:',
            event
          );
          // if API request timestamp is minor than today's timestamp, we can make 1 request
          // then save "dailyRequestSuccess: Boolean = true" to state
          // if dailyRequestSuccess, then stop outgoing http requests
        }
      })
    );
  }
}
