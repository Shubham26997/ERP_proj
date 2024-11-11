import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';  // To navigate to the dashboard

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usernameOrEmail: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  login() {
    const userData = {
      username_or_email: this.usernameOrEmail,
      password: this.password
    };

    this.loginService.login(userData).subscribe(
      (response) => {
        // Navigate to the dashboard upon successful login
        console.log('Login successful', response);
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.error('Error:', error);
        this.errorMessage = 'Invalid credentials. Please check your username/email and password.';
      }
    );
  }
}
