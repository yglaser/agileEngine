import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TOKEN_APP, TOKEN_HEADER } from '../constants/headers';
import { LocalstorageService } from './localstorage.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(private localStorageService: LocalstorageService) {}

  public intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.localStorageService.getItem(TOKEN_APP);
    let headers = request.headers;
    if (token) {
      headers = request.headers.append(TOKEN_HEADER, `Bearer ${token}`);
    }

    request = request.clone({ headers });
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }
}
