import { Component, OnInit } from '@angular/core';
import { Book } from '../book/book.model';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books: Book[];

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.getBooks();
  }
  // getBooks(): void {
  //   this.books = this.booksService.getBooks();
  // }
  getBooks(): void {
    this.booksService.getBooks()
    .subscribe(books => this.books = books);
  }
  
}
