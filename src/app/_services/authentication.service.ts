import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Auth} from '../_models/auth';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:53974/';
  isLoggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }
  login(auth: Auth) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    const params = new URLSearchParams();
    params.set('grant_type', 'password');
    params.set('username', auth.Username);
    params.set('password', auth.Password);

    return this.http.post(this.baseUrl + 'token', params.toString(), {headers}).pipe(
      map((token: any) => {
        if (token) {
          console.log(token);
          localStorage.setItem('token', token);
        }
      })
    );
  }
  logout() {
    localStorage.removeItem('token');
    console.log('logged out');
  }
}
