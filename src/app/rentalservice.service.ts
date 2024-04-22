import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RentalService {
  private apiUrl = 'http://localhost:8080/api/rentals'; // Update with your actual backend API URL

  constructor(private http: HttpClient) { }

  createRentals(username: string, itemIds: string[], rentalItem: string): Observable<any> {
    const requestBody = { username, itemIds, rentalItem };
    return this.http.post<any>(`${this.apiUrl}/create`, requestBody);
  }

  getRentalsByUsername(username: string): Observable<any[]> {
    const url = `${this.apiUrl}/${username}`;
    return this.http.get<any[]>(url);
  }

<<<<<<< HEAD
  // Method to fetch rental item strings
  getRentalItemStrings(): Observable<string[]> {
    const url = `${this.apiUrl}/items`; // Assuming endpoint to fetch rental item strings
    return this.http.get<string[]>(url);
  }
=======
  searchRentalItems(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?q=${query}`);
  }

  // Add methods for fetching, updating, and deleting rentals as needed
>>>>>>> 935bac776a58f6f13fbecf3dab304bdf22811d25
}