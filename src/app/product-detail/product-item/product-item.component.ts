import { CartService } from './../../Shared/service/cart.service';
import { ProductService } from './../../Shared/service/product.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  id : any;
  data :any;
  imagePath : string;

  constructor(private route : ActivatedRoute, private productService : ProductService,private cartService : CartService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['_id']
    this.getDetailProduct()
  }
  getDetailProduct(){
    this.productService.getDetailProduct(this.id).subscribe(data => {
    this.imagePath = 'http://localhost:3000/'
      this.data = data.product
    })
  }
  addCart(product) {
    this.cartService.addCart({
      product,
      quantity : 1
    })
  }

}
