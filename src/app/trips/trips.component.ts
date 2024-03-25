import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cartService';

@Component({
  selector: 'app-trips',
  standalone: true,
  imports: [],
  templateUrl: './trips.component.html',
  styleUrl: './trips.component.css'
})
export class TripsComponent {
  constructor(private router: Router, private cartService: CartService) { }

  addToCart(product: any) {
    this.cartService.addToCart(product); // Add the product to the cart
    this.router.navigate(['/cart']); // Navigate to the cart page
  }
}
