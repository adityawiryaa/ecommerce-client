import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { OrderHistoryComponent } from './order-history/order-history.component';

@NgModule({
  declarations: [RegisterComponent, ProfileComponent, CartComponent, ProfileDetailComponent, OrderHistoryComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
