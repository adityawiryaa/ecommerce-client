import { OrderHistoryComponent } from './order-history/order-history.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { CartComponent } from './cart/cart.component';
import { userAuthorization } from './../Shared/interception/userAuthorization';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path : 'signup' , component : RegisterComponent },
  { path : 'profile/detail' ,canActivate:[userAuthorization]  ,component : ProfileDetailComponent,},
  { path : 'profile' ,canActivate:[userAuthorization]  ,component : ProfileComponent,},
  { path : 'cart',canActivate:[userAuthorization], component: CartComponent},
  { path : 'order/history',component:OrderHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
