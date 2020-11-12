import { map } from 'rxjs/operators';
import { ListCart, Checkout, OrderHistory } from './../Models/cart';
import { environment } from './../../../environments/environment';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Cart } from '../Models/cart';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http : HttpClient, private router : Router) { }

  addCart = (cart : Cart) => {
    return this.http.post<any>(`${environment.baseUrl}/order`,cart).subscribe((res : any) => {
      console.log(res.data)
      Swal.fire('Thanks','Add Product Success!!','success').then(result => {window.location.reload()})
    },
    err => {
      Swal.fire('Sorry',err.error.message,'error')
    });
  }
  public getCart() : Observable<ListCart[]>{
    return this.http.get<ListCart[]>(`${environment.baseUrl}/order/list`).pipe(map(this.getCartData))
  }
  public addQuantityOrder(_id) {
    return this.http.get<any>(`${environment.baseUrl}/order/add/${_id}`).subscribe(res => {
      Swal.fire('Thanks','Success add product','success').then(res=> location.reload())
    })
  }
  public deleteQuantityOrder(_id) {
    return this.http.delete<any>(`${environment.baseUrl}/order/delete/${_id}`).subscribe(res => {
      Swal.fire('Thanks','Success delete product','success').then(res=> location.reload())
    })
  }

  private getCartData(response) {
    return response.data
  }
  public deleteCart(_id) {
    return this.http.delete(`${environment.baseUrl}/order/${_id}`)
  }
  public checkout(checkout : Checkout) {
    return this.http.post(`${environment.baseUrl}/checkout`,checkout)
  }
  public orderHistory() : Observable<OrderHistory[]>{
    return this.http.get(`${environment.baseUrl}/checkout/list`).pipe(map(this.getCartData))
  }

  handleError(error: HttpErrorResponse) {
    let message = '';

    if (error.error instanceof ErrorEvent) message = error.error.message;
    else message = `Error code : ${error.status} \n Message Error : ${error.message}`
    return throwError(message);
  }
}
