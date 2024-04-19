import { Component, importProvidersFrom } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,CommonModule,FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  username: string = '';
  password: string = '';
  
  errorMessage: string = '';
  signupSuccess: boolean = false;
firstName: string = '';
lastName: string = '';
 

  constructor(private authService: AuthService, private router: Router) {}

 signup(event: Event) {
    this.authService.signup(this.firstName,this.lastName, this.username, this.password, ).subscribe({
      next: (response) => {
        console.log('Signup successful', response);
        this.errorMessage = 'Account Created!';
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000); // Timeout for 2 seconds before redirecting to login
      },
      error: (error) => {
        console.error('Signup failed', error);
        if (error.status == 409) {
          this.errorMessage = 'Username is already taken. Please choose a different one.';
        } else {
          this.errorMessage = 'This username is taken!';
        }
      }
    });
  }
}
