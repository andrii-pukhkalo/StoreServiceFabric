import { Injectable } from '@angular/core';
import { Cart, CartItem } from './cart.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Subject }    from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CartService {
    
  private baseUrl = 'http://localhost:8514/api/cart';
  private missionConfirmedSource = new Subject<number>();

  missionConfirmed$ = this.missionConfirmedSource.asObservable();

  constructor(private http: HttpClient) { }

  getCart(): Observable<Cart> {
    return this.http.get<Cart>(this.baseUrl + '/get-cart')
  }

  addToCart(cartItem: CartItem): Observable<Cart>  {

    const cartItemAsString = JSON.stringify(cartItem);

    return this.http.post<Cart>(this.baseUrl + "/add-item", 
                      cartItemAsString, httpOptions);
      //   .map((res: any) => {
      //     return res.json();
      // })
      // .catch(this.handleError);
  }

  confirmMission(astronaut: number) {
    this.missionConfirmedSource.next(astronaut);
  }

  checkout(): Observable<any> {
    return this.http.post(this.baseUrl + "/checkout", null, httpOptions);
  }
}
