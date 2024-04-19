import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080';
  private isAuthenticated = false; // Track authentication state
  private loggedInUsername: string | undefined; // Store the username of the logged-in user
  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { username, password }).pipe(
      map(response => {
        this.isAuthenticated = true;
        this.loggedInUsername = username;
        return response;
      }),
      catchError(this.handleError)
    );
  }
  // Log out user
  logout(): void {
    // Clear authentication state upon logout
    this.isAuthenticated = false;
    this.loggedInUsername = undefined;
    this.router.navigate(['/login']);
 
  }
  getLoggedInUsername(): string | undefined {
    return this.loggedInUsername;
  }
    // Check if user is authenticated
    isAuthenticatedUser(): boolean {
      return this.isAuthenticated;
    }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Something bad happened; please try again later.';
    if (error.status === 401) {
      // Assuming the error body is in the expected format
      errorMessage = error.error.message;
    } else if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError(errorMessage);
  }
  signup(firstName: string, lastName: string, username: string, password: string): Observable<any> {
    // Send HTTP POST request to backend sign-up endpoint
    return this.http.post(`${this.baseUrl}/signup`, { firstName, lastName, username, password }).pipe(
      catchError(this.handleError)
    );
}

 
}