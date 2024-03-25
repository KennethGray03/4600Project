import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cartService';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit{
  productName!: string;
  price!: number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.items$.subscribe(items => {
      const selectedItem = items[items.length - 1]; // Assuming you want to display the last added item
      this.productName = selectedItem.name;
      this.price = selectedItem.price;
    });
  }
}
