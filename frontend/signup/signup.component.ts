import { Component } from '@angular/core';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';

  constructor(private signupService: SignupService) {}

  signup() {
    const userData = {
      username: this.username,
      email: this.email,
      password: this.password,
      first_name: this.firstName,
      last_name: this.lastName
    };

    this.signupService.signup(userData).subscribe(
      (response) => {
        console.log('User created successfully:', response);
        alert('Signup successful!');
      },
      (error) => {
        console.error('Error creating user:', error);
        alert('Error during signup');
      }
    );
  }
}
