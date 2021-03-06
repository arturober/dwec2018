import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logged = false;
  loginChange$ = new EventEmitter<boolean>();

  constructor(private storage: Storage, private http: HttpClient) { }

  private setLogged(logged: boolean) {
    this.logged = logged;
    this.loginChange$.emit(logged);
  }

  login(email: string, password: string, firebaseToken: string): Observable<void> {
    return this.http.post<{accessToken: string}>('auth/login', {email, password, firebaseToken}).pipe(
      switchMap(async r => { // switchMap must return a Promise or observable (a Promise in this case)
        try {
          await this.storage.set('fs-token', r.accessToken);
          this.setLogged(true);
        } catch (e) {
          throw new Error('Can\'t save authentication token in storage!');
        }
      })
    );
  }

  register(user): Observable<void> {
    return this.http.post('auth/register', user).pipe(
      map(() => null)
    );
  }

  async logout(): Promise<void> {
    await this.storage.remove('fs-token');
    this.setLogged(false);
  }

  isLogged(): Observable<boolean> {
    if (this.logged) { return of(true); }
    return from(this.storage.get('fs-token')).pipe(
      switchMap(v => {
        if (!v) { throw new Error(); }
        return this.http.get('auth/validate').pipe(
          map(() => {
            this.setLogged(true);
            return true;
          }), catchError(error => of(false))
        );
      }),
      catchError(e => of(false))
    );
  }
}
