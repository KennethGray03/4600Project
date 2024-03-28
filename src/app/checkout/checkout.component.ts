import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cartService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit{
  items: any[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.calculateTotalPrice();
  }

  removeFromCart() {
    this.cartService.clearCart();
    this.items = []; // Update the items array in the component
    this.totalPrice = 0; // Reset total price
  }

  private calculateTotalPrice() {
    this.totalPrice = this.items.reduce((total, item) => total + item.price, 0);
  }
  
}
