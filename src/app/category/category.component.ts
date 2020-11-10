import { CartService } from './../Shared/service/cart.service';
import { ActivatedRoute} from '@angular/router';
import { ProductService } from './../Shared/service/product.service';
import { Product } from './../Shared/Models/product';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  
  product$ : Observable<Product[]>
  imagePath = 'http://localhost:3000/'
  firstIndex = 0
  lastIndex = 9

  constructor(private productService : ProductService,private cartService : CartService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('_id')
   this.product$ = this.productService.getProductCategory(id)
  }
  
  addCart(product) {  
    this.cartService.addCart({
      product,
      quantity : 1
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
