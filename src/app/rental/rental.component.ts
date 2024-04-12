import { Component, ViewChild, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cartService';
import { WishlistService } from '../wishlist.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-rental',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rental.component.html',
  styleUrl: './rental.component.css'
})

export class RentalComponent {
 
  constructor(private router: Router, 
              private cartService: CartService,
              private wishlistService: WishlistService) { }

  addToCart(product: any) {
    this.cartService.addToCart(product); // Add the product to the cart
    this.router.navigate(['/checkout']); // Navigate to the cart page
  }

  addToWishlist(product: any){
    this.wishlistService.addToWishlist(product); 
    this.router.navigate(['/wishlist']); // Navigate to the cart page
  }

  highlightWord(): void {
    let searchText = (document.getElementById("searchBox") as HTMLInputElement)?.value;
    let elements = document.querySelectorAll("#content p, #content h2, #content span, #content button");

    if (searchText) {
        elements.forEach(element => {
            let originalText = element.textContent || '';
            let escapedSearchText = searchText.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); // Escape special characters
            let highlightedText = originalText.replace(new RegExp(escapedSearchText, "gi"), match => `<span style='background-color: yellow'>${match}</span>`);
            element.innerHTML = highlightedText;
        });
    } else {
        elements.forEach(element => {
            element.innerHTML = element.textContent || '';
        });
    }
}

ngOnInit() {
  document.getElementById("searchBox")?.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      this.highlightWord();
    }
  });
}
 
  
}
