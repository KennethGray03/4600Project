import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private apiUrl = 'http://localhost:8080/api/wishlist'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }
  getWishlist(username: string): Observable<any[]> {
    const url = `${this.apiUrl}/${username}`; // Append the username to the URL
    return this.http.get<any[]>(url);
  }
  addToWishlist(username: string, itemId: string): Observable<any> {
    console.log(itemId,username);
    return this.http.post<any>(`${this.apiUrl}/${username}/${itemId}`, {});
    
  }
  removeFromWishlist(username: string, wishlistItemId: string): Observable<any> {
    console.log(wishlistItemId);
    const url = `${this.apiUrl}/${username}/${wishlistItemId}`;
    return this.http.delete<any>(url);
  }
}