import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-checkout',
  standalone: true,

  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
calculateSubtotal() {
throw new Error('Method not implemented.');
}
hidePaymentForm() {
throw new Error('Method not implemented.');
}
showPaymentForm() {
  this.showSplashScreen = true;
}
processPayment() {
throw new Error('Method not implemented.');
}
  showSplashScreen: boolean = false;
  cartItems: any[] = []; // Define an array to hold cart items
  username: string | undefined;
  totalPrice: number = 0;

  constructor(private cartService: CartService, private authService: AuthService, private router: Router) { }
  backToCart(): void {
    // Navigate back to the cart page
    this.showSplashScreen = false;
  }

  ngOnInit(): void {
    // Fetch the username from the authentication service
    this.username = this.authService.getLoggedInUsername();
    if (this.username) {
      this.loadCartItems(); // Fetch cart items when the component initializes
      this.loadTotalPrice(); // Fetch total price when the component initializes
    } else {
      console.error('Username not found');
    }
  }
  checkout(): void {
    // Show splash screen form
    this.showSplashScreen = true;
  }

  loadTotalPrice(): void {
    if (this.username) {
      this.cartService.getTotalPrice(this.username).subscribe(
        (totalPrice: number) => {
          this.totalPrice = totalPrice;
        },
        (error: any) => {
          console.error('Error loading total price:', error);
        }
      );
    } else {
      console.error('Username is undefined');
    }
  }
  loadCartItems(): void {
    // Fetch cart items using the username if it's defined
    if (this.username) {
      this.cartService.getCartItems(this.username).subscribe(
        (data: any[]) => {
          this.cartItems = data; // Assign the fetched cart items to the cartItems array
          this.calculateTotalPrice(); // Calculate total price after fetching cart items
          console.log(this.cartItems);
        },
        (error: any) => {
          console.error('Error loading cart items:', error);
        }
      );
    } else {
      console.error('Username is undefined');
    }
  }

  removeFromCart(index: number): void {
    console.log('Removing item from cart:', this.cartItems[index]);
    
    // Extract the cartItemId of the item to be removed
    const cartItemId = this.cartItems[index].cartItemId;
    
    // Call the service method to remove the item, passing the cartItemId and username
    if (this.username) {
      this.cartService.removeFromCart(this.username, cartItemId).subscribe(
        (response: any) => {
          this.cartItems.splice(index, 1);
          console.log('Item removed successfully from cart:', response);
          
          // Recalculate total price after removing the item
          this.calculateTotalPrice();
        },
        (error: any) => {
          console.error('Error removing item from cart:', error);
        }
      );
    } else {
      console.error('Username is undefined');
    }
  }
  calculateTotalPrice(): void {
    // Calculate total price by summing up the prices of all items in the cart
    this.totalPrice = this.cartItems.reduce((total, item) => total + item.price, 0);
  }
}