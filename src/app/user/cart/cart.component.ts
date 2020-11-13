import { Router } from '@angular/router';
import { UserService } from './../../Shared/service/user.service';
import { Observable } from 'rxjs';
import { ListCart } from './../../Shared/Models/cart';
import { CartService } from './../../Shared/service/cart.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  product$: Observable<ListCart[]>;
  imagePath: string;
  total = 0;
  price: number;
  constructor(
    private cartService: CartService,
    private userService: UserService,
    private route: Router
  ) {}
  id;

  ngOnInit(): void {
    this.cartService.getCart().subscribe((item) => {
      for (let i = 0; i < item.length; i++) {
        this.total += item[i].quantity * item[i].product.price;
      }
    });
    this.product$ = this.cartService.getCart()
    this.imagePath = 'https://backends-adit.herokuapp.com/';
  }
  deleteCart(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Your product will delete!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.cartService.deleteCart(id).subscribe((res) => {});
        Swal.fire(
          'Deleted!',
          'Your wishlist has been deleted.',
          'success'
        ).then((result) => {
          location.reload();
        });
      }
    });
  }
  checkout(item) {
    this.userService.getAddressUser().subscribe((res) => {
      if (res.data == null) {
        Swal.fire('Sorry', 'Please Complete Your Address Data', 'error');
        this.route.navigate(['profile/detail']);
      } else if (
        res.data.country &&
        res.data.district &&
        res.data.phone &&
        res.data.province &&
        res.data.village &&
        res.data.zip &&
        res.data.city
      ) {
        this.cartService.checkout(item).subscribe(
          (res) => {
            this.route.navigate(['order/history'])
            Swal.fire('Thanks!', 'Checkout Success!', 'success').then((res) =>
              location.reload()
            );
          },
          (err) => {
            Swal.fire('Sorry', err.error.message, 'error');
          }
        );
      }
      else {
        Swal.fire('Sorry', 'Please Complete Your Address Data', 'error');
        this.route.navigate(['profile/detail']);
      }
    });
  }
  addQuantityOrder(product) {
    this.cartService.addQuantityOrder(product);
  }
  deleteQuantityOrder(product) {
    this.cartService.deleteQuantityOrder(product);
  }
}
