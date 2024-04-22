import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { RentalService } from '../rentalservice.service';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-checkout',
  standalone: true,

  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  showSplashScreen: boolean = false;
  cartItems: any[] = [];
  totalPrice: number = 0;
  taxRate: number = 0.095; // 9.5%
  tax: number = 0;
  finalTotal: number = 0;
  username: string | undefined;
  paymentSuccessful: boolean = false;
  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private router: Router,
    private rentalService: RentalService
  ) {}

  ngOnInit(): void {
    const loggedInUsername = this.authService.getLoggedInUsername();
    if (loggedInUsername) {
      this.username = loggedInUsername;
      this.loadCartItems();
    } else {
      console.error('Username not found');
      // Handle scenario where username is not available
    }
  }
  removeFromCart(index: number): void {
    // Implementation of the removeFromCart method
  }


  loadCartItems(): void {
  const username: string = this.username!;
  if (username) {
    this.cartService.getCartItems(username).subscribe(
      (data: any[]) => {
        this.cartItems = data;
        this.calculateTotalPrice();
      },
      (error: any) => {
        console.error('Error loading cart items:', error);
      }
    );
  } else {
    console.error('Username is undefined');
  }
}

  calculateTotalPrice(): void {
    this.totalPrice = this.cartItems.reduce((total, item) => total + item.price, 0);
    this.calculateTaxAndFinalTotal();
  }

  calculateTaxAndFinalTotal(): void {
    this.tax = this.totalPrice * this.taxRate;
    this.finalTotal = this.totalPrice + this.tax;
  }

  showPaymentForm(): void {
    this.showSplashScreen = true;
  }

  hidePaymentForm(): void {
    this.showSplashScreen = false;
  }

  processPayment(): void {
    const username = this.authService.getLoggedInUsername();
    this.router.navigateByUrl('/homepage');
    if (username) {
      this.cartService.clearCart(username).subscribe(
        () => {
          this.paymentSuccessful = true;
          // Loop through each cart item and process it
          this.cartItems.forEach(item => {
            const itemIds = [item.itemId]; // Pass the itemId of the current item
            const rentalItem = item.itemName; // Pass the itemName of the current item
            this.rentalService.createRentals(username, itemIds, rentalItem).subscribe(
              () => {
                console.log(`Rental for item ${item.itemId} created successfully`);
              },
              error => {
                console.error(`Error creating rental for item ${item.itemId}:`, error);
              }
            );
          });
        },
        error => {
          console.error('Error clearing cart:', error);
        }
      );
    } else {
      console.error('Username not found');
    }
  }
  
  dismissAlert(): void {
    this.paymentSuccessful = false;
  }

  backToCart(): void {
    this.showSplashScreen = false;
  }

}



