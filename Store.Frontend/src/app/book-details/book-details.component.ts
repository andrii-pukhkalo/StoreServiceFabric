import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../books/books.service';
import { Book } from '../book/book.model';
import { MatDialog } from '@angular/material';
import { AddToCartDialogComponent } from './dialogs/add-to-cart-dialog.component';
import { CartService } from '../cart/cart.service';
import { CartItem, Cart } from '../cart/cart.model';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})

export class BookDetailsComponent implements OnInit {

  book: Book;
  count: number;
  cart: Cart;

  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService,
    private cartService: CartService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.getBook();
  }

  getBook() : void {
    const id = this.route.snapshot.paramMap.get('id');
    this.booksService.getBook(id)
      .subscribe(book => this.book = book);
  }

  addToCart() {

    const cartItem = new CartItem(this.book.id, this.count); 

    console.log(cartItem)
    this.cartService.addToCart(cartItem).subscribe(cart => this.cart = cart);    
    console.log(this.cart);
    this.openAddToCartDialog();
  }

  openAddToCartDialog(): void {
        
    const dialogRef = this.dialog.open(AddToCartDialogComponent, {
      width: '550px',
      data: {count: this.count, book: this.book}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.count = result;
    });
  }
}


