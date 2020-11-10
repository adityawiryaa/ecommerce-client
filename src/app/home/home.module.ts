import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeadCarouselComponent } from './head-carousel/head-carousel.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [HomeComponent, HeadCarouselComponent, ProductComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
