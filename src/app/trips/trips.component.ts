import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cartService';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-trips',
  standalone: true,
  imports: [],
  templateUrl: './trips.component.html',
  styleUrl: './trips.component.css'
})
export class TripsComponent {
  constructor(private router: Router, 
    private cartService: CartService,
    private wishlistService: WishlistService) { }

ngOnInit(): void {
}

addToCart(product: any) {
this.cartService.addToCart(product); // Add the product to the cart
this.router.navigate(['/checkout']); // Navigate to the cart page
}

addToWishlist(product: any){
this.wishlistService.addToWishlist(product); 
this.router.navigate(['/wishlist']); // Navigate to the cart page

}
}
