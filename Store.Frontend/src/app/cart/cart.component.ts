import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Cart, CartItem } from './cart.model';
import { Book, Price } from '../book/book.model';
import { BooksService } from '../books/books.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


export interface PeriodicElement {
  name: string;
  // position: number;
  // weight: number;
  // symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

export class CartDetail {
  book: Book;
  count: number;

  constructor(book: Book, count: number) {
    this.book = book;
    this.count = count;
  }
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {

  cart: Cart;
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns1: string[] = ['name'];
  dataSource1 : PeriodicElement[] = [];
  dataSource = ELEMENT_DATA;
  cartDetails: CartDetail[] = [];  
  
  constructor(
    private cartService: CartService,
    private booksService: BooksService, 
    ) { }

  ngOnInit() {
    this.getCart();
  }

  getCart(): void {
    this.cartService.getCart()
      .subscribe(cart => this.func(cart));
  }

  func(cart: Cart) {
    this.cart = cart;

    for (let element of cart.items) {
      this.booksService.getBook(element.bookId)
        .subscribe(book => this.func1(book, element.count));
    }
  }

  func1(book: Book, count: number) {
    this.cartDetails.push(new CartDetail(book, count));
    this.dataSource1.push({name: book ? book.name : null});
  }

  viewPrice(price: Price) {
    if (price) {
      return price.currency + price.amount.toString(); 
    }

    return null;
  }

  calcAmount(amount: number, count: number) {
    return amount * count;
  }

  checkout() {
    console.log(123);
    this.cartService.checkout().subscribe();
  }
}
 