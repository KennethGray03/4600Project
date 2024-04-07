import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080';
  private isAuthenticated = false; // Track authentication state

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { username, password }).pipe(
      map(response => {
        this.isAuthenticated = true;
        return response;
      }),
      catchError(this.handleError)
    );
  }
  // Log out user
  logout(): void {
    // Clear authentication state upon logout
    this.isAuthenticated = false;
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

  signup(username: string, password: string): Observable<any> {
    // Send HTTP POST request to backend sign-up endpoint
    return this.http.post(`${this.baseUrl}/signup`, { username, password }).pipe(
      catchError(this.handleError)
    );
  }
}