import {Component, OnInit, ViewChild} from '@angular/core';
import {Auth} from '../_models/auth';
import {AuthenticationService} from '../_services/authentication.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: boolean = null;
  errorDescription: string = null;
  auth: Auth = { Username: '', Password: '' };
  @ViewChild('loginForm') loginForm: NgForm;

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    if (this.authenticationService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }

  login() {
    this.error = null;
    if (this.loginForm.invalid) {
      this.error = true;
      return;
    }
    this.authenticationService.login(this.auth).subscribe((token) => {
      this.error = false;
      console.log('logged in', token);
    }, (response) => {
      this.error = true;
      this.errorDescription = response.error.error_description;
    }, () => {
      this.router.navigate(['/dashboard']);
    });
  }
}
