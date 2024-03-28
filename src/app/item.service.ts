import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor() {}

  getItems() {
    return [
      { productName: 'Product 1', price: 10 },
      { productName: 'Product 2', price: 20 },
      // Add more items as needed
    ];
  }
}