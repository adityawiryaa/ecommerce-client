import { userAuthorization } from './../Shared/interception/userAuthorization';
import { Category } from './../Shared/Models/product';
import { Observable } from 'rxjs';
import { ProductService } from './../Shared/service/product.service';
import { CartService } from './../Shared/service/cart.service';
import { UserService } from '../Shared/service/user.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public totalCart : number;
  category$ : Observable<Category[]>
  cart$ : any
  id : any
  constructor(public userService : UserService, private cartService : CartService,public productService : ProductService) { }

  ngOnInit(): void {
    this.category$ = this.productService.getCategory()
    if(this.userService.isLogin){
    this.cartService.getCart().subscribe(res =>{
      this.totalCart = res.length
    })
    }
  }
  logout() {
    this.userService.logout();
  }
  reload() {
    location.reload()
  }
}
