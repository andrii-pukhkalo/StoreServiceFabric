import { Injectable } from '@angular/core';
import { Book } from '../book/book.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private booksUrl = 'http://localhost:8514/api/values';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl)
  }

  getBook(id: string) : Observable<Book> {
    return this.http.get<Book>(this.booksUrl + "/" + id)
  }
}
