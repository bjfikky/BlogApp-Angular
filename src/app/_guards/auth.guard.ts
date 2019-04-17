import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthenticationService} from '../_services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthenticationService, private router: Router) {}
  canActivate(): boolean {
    if (this.auth.getAuth()) {
      return  true;
    }
    this.router.navigate(['/']);
  }
}
