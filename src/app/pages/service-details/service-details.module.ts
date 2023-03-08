import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceDetailsComponent } from './service-details.component';
import { ServiceDetailsRoutingModule } from './service-details-routing.module';
import { SwiperModule } from 'swiper/angular';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';



@NgModule({
  declarations: [
    ServiceDetailsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    ServiceDetailsRoutingModule,
    RouterModule,
    SwiperModule,
    PipesModule
  ]
})
export class ServiceDetailsModule { }
