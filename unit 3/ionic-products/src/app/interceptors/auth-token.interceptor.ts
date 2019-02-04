import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler
} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Storage } from '@ionic/storage';
import { switchMap, catchError } from 'rxjs/operators';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  constructor(private storage: Storage) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return from(this.storage.get('fs-token')).pipe(
      switchMap(token => {
        if (!token) { throw new Error(); }

        const authReq = req.clone({
          headers: req.headers.set('Authorization', `bearer ${token}`)
        });
        // Pass on the cloned request instead of the original request.
        return next.handle(authReq);
      }),
      catchError(e => next.handle(req))
    );
  }
}
