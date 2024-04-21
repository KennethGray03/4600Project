import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'http://localhost:8080/api/items'; // Adjust the URL as per your backend API endpoint

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getItemById(itemId: string): Observable<any> {
    const url = `${this.apiUrl}/${itemId}`;
    return this.http.get<any>(url);
  }
  // Add other methods as needed, such as adding items to cart or wishlist
}