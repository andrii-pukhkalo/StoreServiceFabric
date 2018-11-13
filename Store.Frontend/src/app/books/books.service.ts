import { Injectable } from '@angular/core';
import { Book } from '../book/book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  

  constructor() { }

  getBooks(): Book[] {
    return [
      {
        Id: "1",
        Name: "DDD Von Vernon"
      },
      {
        Id: "1",
        Name: "DDD Von Vernon"
      },
      {
        Id: "1",
        Name: "DDD Von Vernon"
      },
      {
        Id: "1",
        Name: "DDD Von Vernon"
      },
      
      {
        Id: "1",
        Name: "DDD Von Vernon"
      },
      
      {
        Id: "1",
        Name: "DDD Von Vernon"
      },
      
      {
        Id: "1",
        Name: "DDD Von Vernon"
      },
      
      {
        Id: "1",
        Name: "DDD Von Vernon"
      },
      
      {
        Id: "1",
        Name: "DDD Von Vernon"
      },
      {
        Id: "2",
        Name: "DDD Eric Evans"
      }
    ];
  }
}
