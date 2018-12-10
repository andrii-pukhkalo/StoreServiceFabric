import { Injectable } from '@angular/core';
import { Cart, CartItem } from './cart.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  private baseUrl = 'http://localhost:8514/api/cart';

  constructor(private http: HttpClient) { }

  getCart(): Observable<Cart> {
    return this.http.get<Cart>(this.baseUrl)
  }

  addToCart(cartItem: CartItem): Observable<Cart>  {

    const cartItemAsString = JSON.stringify(cartItem);

    console.log(cartItemAsString);



    return this.http.post<Cart>(this.baseUrl + "/add-item", 
                      cartItemAsString, httpOptions);
      //   .map((res: any) => {
      //     return res.json();
      // })
      // .catch(this.handleError);
  }
}
