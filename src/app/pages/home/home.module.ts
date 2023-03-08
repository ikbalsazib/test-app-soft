import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BrandCardModule } from 'src/app/shared/lazy/brand-card/brand-card.module';
import { ReviewCardModule } from 'src/app/shared/lazy/review-card/review-card.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SwiperModule,
    BrandCardModule,
    ReviewCardModule,
    RouterModule
  ]
})
export class HomeModule { }
