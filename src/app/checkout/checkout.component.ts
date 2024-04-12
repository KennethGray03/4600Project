import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cartService';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-checkout',
  standalone: true,

  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit { 
  items: any[] = [];
  totalPrice: number = 0;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.calculateTotalPrice();
    console.log(this.items);
  }

  private calculateTotalPrice() {
    this.totalPrice = this.items.reduce((total, item) => total + item.price, 0);
  }

  removeFromCheckout(index: number) {
    this.cartService.removeFromCart(index);
    this.items = this.cartService.getItems(); // Update the items after removing an item
    this.calculateTotalPrice(); // Recalculate total price after item removal
  }

  openStripeCheckout() {
    const itemsQueryParam = this.items.map((item, index) => {
      return `items[${index}][name]=${encodeURIComponent(item.name)}&items[${index}][price]=${item.price}&items[${index}][quantity]=1`;
    }).join('&');
    const stripeCheckoutUrl = `https://buy.stripe.com/test_fZe5mo8iZfwT8q4aEE?${itemsQueryParam}`;
    window.open(stripeCheckoutUrl, '_blank');
  }
 
}
