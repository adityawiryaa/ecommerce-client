import { CategoryComponent } from './category/category.component'
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((route) => route.UserModule),
  },
  {
    path : 'category/:_id', component: CategoryComponent
  },
  {
    path: '/home',
    component: HomeComponent,
    loadChildren: () => import('./home/home.module').then((route) => route.HomeModule),
  },
  {
    path: 'detail',
    loadChildren: () => import('./product-detail/product-detail.module').then((route) => route.ProductDetailModule)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
