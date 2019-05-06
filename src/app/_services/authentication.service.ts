import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Auth} from '../_models/auth';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseUrl = 'http://localhost:53974/';
  constructor(private http: HttpClient) { }
  getAuth() {
    return true;
  }
  login(auth: Auth) {
    console.log('here');

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    const params = new URLSearchParams();
    params.set('grant_type', 'password');
    params.set('username', auth.Username);
    params.set('password', auth.Password);

    return this.http.post(this.baseUrl + 'token', params.toString(), {headers}).pipe(
      map((token: any) => {
        if (token) {
          localStorage.setItem('token', token);
        }
      })
    );
  }
}
