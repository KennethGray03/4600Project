import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistService } from '../wishlist.service';
import { AuthService } from '../auth.service';
import { CartService } from '../cart.service';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent implements OnInit {
  wishlist: any[] = []; // Define an array to hold wishlist items
  username: string | undefined;

  constructor(private wishlistService: WishlistService, private authService: AuthService, private cartService: CartService) { }

  ngOnInit(): void {
    // Fetch the username from the authentication service
    this.username = this.authService.getLoggedInUsername();
    if (this.username) {
      this.fetchWishlist(); // Fetch wishlist items when the component initializes
    } else {
      console.error('Username not found');
    }
  }

  fetchWishlist() {
    // Fetch wishlist items using the username if it's defined
    if (this.username) {
      this.wishlistService.getWishlist(this.username).subscribe(
        (data: any[]) => {
          this.wishlist = data; // Assign the fetched wishlist items to the wishlist array
          console.log(this.wishlist);
        },
        (error: any) => {
          console.error('Error fetching wishlist:', error);
        }
      );
    } else {
      console.error('Username is undefined');
    }
  }


  removeFromWishlist(index: number) {
    console.log('Removing item from wishlist:', this.wishlist[index]);
    
    // Extract the wishlistItemId of the item to be removed
    const wishlistItemId = this.wishlist[index].wishlistItemId;
    
    // Call the service method to remove the item, passing the wishlistItemId and username
    if (this.username) {
      this.wishlistService.removeFromWishlist(this.username, wishlistItemId).subscribe(
        (response: any) => {
          this.wishlist.splice(index, 1);
          console.log('Item removed successfully from wishlist:', wishlistItemId);
        },
        (error: any) => {
          console.error('Error removing item from wishlist:', error);
        }
      );
    } else {
      console.error('Username is undefined');
    }
  }
  addToCart(index: number) {
    const item = this.wishlist[index];
    console.log('Adding item to cart:', item);
  
    // Call the wishlist service to remove the item from the wishlist
    if (this.username) {
      this.wishlistService.removeFromWishlist(this.username, item.wishlistItemId).subscribe(
        (response: any) => {
          console.log('Item removed successfully from wishlist:', response);
          this.wishlist.splice(index, 1); // Remove the item from the local wishlist array
        },
        (error: any) => {
          console.error('Error removing item from wishlist:', error);
        }
      );
  
      // Call the cart service to add the item to the cart
      this.cartService.addToCart(this.username, item.itemId).subscribe(
        () => {
          console.log('Item added to cart successfully:', item);
          // Optionally, you can perform any additional actions after adding to cart
        },
        (error: any) => {
          console.error('Error adding item to cart:', error);
        }
      );
    } else {
      console.error('Username is undefined');
    }
  }
}