import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsSubject = new BehaviorSubject<any[]>([]);
  items$ = this.itemsSubject.asObservable();

  constructor() { }

  addToCart(product: any) {
    const currentItems = this.itemsSubject.getValue();
    const updatedItems = [...currentItems, product];
    this.itemsSubject.next(updatedItems);
  }

  addToWishlist(product: any){
    const currentItems = this.itemsSubject.getValue();
    const updatedItems = [...currentItems,product];
    this.itemsSubject.next(updatedItems);
  }

  getItems() {
    return this.itemsSubject.getValue();
  }

  clearCart() {
    this.itemsSubject.next([]);
  }

  removeFromCart(index: number) {
    const currentItems = this.itemsSubject.getValue();
    currentItems.splice(index, 1);
    this.itemsSubject.next(currentItems);
  }  
  
}