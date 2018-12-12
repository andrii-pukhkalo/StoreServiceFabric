import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Cart } from '../cart/cart.model';

@Component({
  selector: 'app-total-in-cart',
  templateUrl: './total-in-cart.component.html',
  styleUrls: ['./total-in-cart.component.scss']
})
export class TotalInCartComponent implements OnInit {

  total: number;

  constructor(private cartService: CartService) 
  {
    cartService.missionConfirmed$.subscribe(
      astronaut => {
        this.total+=astronaut;
      });
  }

  ngOnInit() {
    this.getTotalInCart();   
  }

  getTotalInCart(): void {
    this.cartService.getCart()
      .subscribe(cart => this.total = cart.items.length);
  }
}
