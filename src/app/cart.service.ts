import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:8080/api/cart'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }
  getCartItems(username: string): Observable<any[]> {
    const url = `${this.apiUrl}/${username}`;
    return this.http.get<any[]>(url);
  }

  addToCart(username: string, itemId: string): Observable<any> {
    const url = `${this.apiUrl}/${username}/${itemId}`;
    return this.http.post<any>(url, {});
  }

  removeFromCart(username: string, cartItemId: string): Observable<any> {
    const url = `${this.apiUrl}/${username}/${cartItemId}`;
    return this.http.delete<any>(url);
  }
  getTotalPrice(username: string): Observable<number> {
    const url = `${this.apiUrl}/total/${username}`; // Adjusted endpoint path
    return this.http.get<number>(url);
  }

}