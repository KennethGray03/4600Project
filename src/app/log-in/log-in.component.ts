import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-log-in',
  standalone:true,
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = "";

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    this.authService.login(username, password).subscribe(
      () => {
        // Navigate to the home page or any other page upon successful login
        this.router.navigate(['/home']);
      },
      error => {
        this.errorMessage = 'Invalid username or password';
        console.error('Login error:', error);
      }
    );
  }
}