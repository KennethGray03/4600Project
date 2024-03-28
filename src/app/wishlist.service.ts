import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlist: any[] = [];

  constructor() { }

  addToWishlist(item: any) {
    this.wishlist.push(item);
  }

  removeFromWishlist(index: number) {
    this.wishlist.splice(index, 1);
  }

  getWishlist() {
    return this.wishlist;
  }

  clearWishlist() {
    this.wishlist = [];
  }
}