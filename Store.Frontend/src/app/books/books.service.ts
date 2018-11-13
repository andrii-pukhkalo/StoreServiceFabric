import { Injectable } from '@angular/core';
import { Book } from '../book/book.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private heroesUrl = 'http://localhost:8514/api/values';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.heroesUrl)
    // return [
    //   {
    //     Id: "1",
    //     Name: "DDD Von Vernon"
    //   },
    //   {
    //     Id: "1",
    //     Name: "DDD Von Vernon"
    //   },
    //   {
    //     Id: "1",
    //     Name: "DDD Von Vernon"
    //   },
    //   {
    //     Id: "1",
    //     Name: "DDD Von Vernon"
    //   },
      
    //   {
    //     Id: "1",
    //     Name: "DDD Von Vernon"
    //   },
      
    //   {
    //     Id: "1",
    //     Name: "DDD Von Vernon"
    //   },
      
    //   {
    //     Id: "1",
    //     Name: "DDD Von Vernon"
    //   },
      
    //   {
    //     Id: "1",
    //     Name: "DDD Von Vernon"
    //   },
      
    //   {
    //     Id: "1",
    //     Name: "DDD Von Vernon"
    //   },
    //   {
    //     Id: "2",
    //     Name: "DDD Eric Evans"
    //   }
    // ];
  }
}
