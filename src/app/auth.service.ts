import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    // Your login logic here
    // For demo purposes, return a mock value indicating successful login
    return of(true);
  }

  logout(): void {
    // Your logout logic here
  }
}