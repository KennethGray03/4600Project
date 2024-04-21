import { Component, OnInit, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistService } from '../wishlist.service';
import { AuthService } from '../auth.service';
import { ItemService } from '../item.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-rental',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './rental.component.html',
  styleUrl: './rental.component.css'
})

export class RentalComponent implements OnInit {
  items: any[] = []; // Define an array to hold the fetched items

  constructor(private cartService: CartService, private itemService: ItemService, private authService: AuthService, private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.fetchItems(); // Fetch items when the component initializes
  }

  fetchItems() {
    this.itemService.getAllItems().subscribe(
      (data: any) => {
        this.items = data; // Assign the fetched items to the items array
      },
      (error: any) => {
        console.error('Error fetching items:', error);
      }
    );
  }
  addToCart(item: any) {
    const username = this.authService.getLoggedInUsername();
    if (username) {
      // Call the CartService method to add item to cart
      this.cartService.addToCart(username, item.id).subscribe(
        (response: any) => {
          console.log('Item added to cart:', item);
        },
        (error: any) => {
          console.error('Error adding item to cart:', error);
        }
      );
    } else {
      console.error('User is not logged in.'); // Handle the case where the user is not logged in
    }
  }
 

  addToWishlist(item: any) {
    const username = this.authService.getLoggedInUsername();
    console.log(item);
    if (username) {
      this.wishlistService.addToWishlist(username, item.id).subscribe(
        () => {
          console.log('Added to wishlist:', item);
        },
        (error: any) => {
          console.error('Error adding to wishlist:', error);
        }
      );
    } else {
      console.error('User is not logged in.'); // Handle the case where the user is not logged in
    }
  }
  highlightWord() {
    // Implement search functionality
    console.log('Search functionality');
  }
  getImageName(itemName: string): string {
    switch (itemName) {
      case 'Trekking Backpack':
        return 'Backpack.jpg';
      case 'Mountain Bike':
        return 'MountainBike.jpg';
      case 'Camping Tent':
        return 'tent3.jpg';
      default:
        return ''; // Handle unknown item names
    }
  }
}
