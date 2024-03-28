import { Component } from '@angular/core';
import { CartService } from '../cartService';
import { CommonModule } from '@angular/common';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {
  wishlist: any[] = [];

  constructor(private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.wishlist = this.wishlistService.getWishlist();
  }

  removeFromWishlist(index: number) {
    this.wishlistService.removeFromWishlist(index);
    this.wishlist = this.wishlistService.getWishlist(); // Update the wishlist after removing item
  }
}
