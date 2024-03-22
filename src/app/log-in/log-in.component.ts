import { Component} from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-log-in',
  standalone:true,
  imports: [FormsModule,CommonModule,NgIf],
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  username: string = '';
  password: string = '';
  errorMessage: string = '';
  welcomeMessage: string =''
  constructor(private authService: AuthService, private router: Router) {}
 login(event: Event){
  event.preventDefault();
    console.log('Hello');
    console.log(this.username, this.password);
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        this.welcomeMessage = `Welcome, ${this.username}!`; // Set welcome message
        setTimeout(() => {
          this.router.navigate(['/homepage']); // Redirect after 3 seconds
        }, 2500);
      },
      error: (error) => {
        console.error('Login failed', error);
        this.errorMessage = 'Login failed. Please check your credentials and try again.'; // Set the error message
        setTimeout(() => {
          this.errorMessage= ""; // Redirect after 3 seconds
        }, 1500);
      }
    });
   }
  
}
