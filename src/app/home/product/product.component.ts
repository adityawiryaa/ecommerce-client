import { Cart } from './../../Shared/Models/cart';
import { CartService } from './../../Shared/service/cart.service';
import { Product } from './../../Shared/Models/product';
import { Observable } from 'rxjs';
import { ProductService } from './../../Shared/service/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  imagePath : string
  product$ : Observable<Product[]>
  firstIndex = 0
  lastIndex = 9
  product : any
  cart : Cart

  constructor(private productService : ProductService,private cartService : CartService) { }
  ngOnInit(): void {
   this.product$ = this.productService.getProduct()
   this.imagePath = 'http://localhost:3000/'
  }
  addCart(product) {
    this.cartService.addCart({
      product,
      quantity: 1
    })
  }
  arrProduct(length) {
    return new Array(Math.ceil(length / 9))
  }
  paginationIndex(pageIndex) {
    this.firstIndex = pageIndex * 9
    this.lastIndex = this.firstIndex + 9
  }
}
