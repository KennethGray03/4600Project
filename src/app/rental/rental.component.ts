import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cartService';
@Component({
  selector: 'app-rental',
  standalone: true,
  imports: [],
  templateUrl: './rental.component.html',
  styleUrl: './rental.component.css'
})
export class RentalComponent  {
  constructor(private router: Router, private cartService: CartService) { }

  addToCart(product: any) {
    this.cartService.addToCart(product); // Add the product to the cart
    this.router.navigate(['/cart']); // Navigate to the cart page
  }
}
