import { Component, ViewChild, ElementRef} from '@angular/core';
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
  @ViewChild('searchBox') searchBox!: ElementRef;
  constructor(private router: Router, 
    private cartService: CartService,
    private wishlistService: WishlistService,
    ) { }


addToCart(product: any) {
this.cartService.addToCart(product); // Add the product to the cart
this.router.navigate(['/checkout']); // Navigate to the cart page
}

addToWishlist(product: any){
this.wishlistService.addToWishlist(product); 
this.router.navigate(['/wishlist']); // Navigate to the cart page

}
highlightWord(): void {
  let searchText = (this.searchBox.nativeElement as HTMLInputElement)?.value;
  let elements = document.querySelectorAll("#content p, #content h2, #content span, #content button");

  if (searchText) {
      elements.forEach(element => {
          let originalText = element.textContent  || '';
          let escapedSearchText = searchText.replace(/[-/^$*+?.()|[]{}]/g, '$&'); // Escape special characters
          let highlightedText = originalText.replace(new RegExp(escapedSearchText, "gi"), match => `<span style='background-color: yellow'>${match}</span>`);
          element.innerHTML = highlightedText;
      });
  } else {
      elements.forEach(element => {
          element.innerHTML = element.textContent  ||'';
      });
  }
 }
 ngAfterViewInit() {
  this.searchBox.nativeElement.addEventListener('keypress', (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      this.highlightWord();
    }
  });
}
}

