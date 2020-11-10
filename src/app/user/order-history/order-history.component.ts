import { CartService } from './../../Shared/service/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  data$ : any
  constructor( private cartService : CartService) { }
  ngOnInit(): void {
    this.data$ = this.cartService.orderHistory()
  }

}
