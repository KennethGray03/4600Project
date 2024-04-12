import { Component } from '@angular/core';
import { CartService } from '../cartService';
import { CommonModule } from '@angular/common';
import { WishlistService } from '../wishlist.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {
  wishlist: any[] = [];

  constructor(private wishlistService: WishlistService, 
    private router: Router, 
    private cartService: CartService,) { }

  ngOnInit(): void {
    this.wishlist = this.wishlistService.getWishlist();
  }

  removeFromWishlist(index: number) {
    this.wishlistService.removeFromWishlist(index);
    this.wishlist = this.wishlistService.getWishlist(); // Update the wishlist after removing item
  }
  addToCart(product: any) {
    this.cartService.addToCart(product); // Add the product to the cart
    this.removeFromWishlist(this.wishlist.indexOf(product)); // Remove the product from the wishlist
    this.router.navigate(['/checkout']); // Navigate to the cart page
  }
}
