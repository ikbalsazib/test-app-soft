import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDetailsComponent } from './portfolio-details.component';
import { PortfolioDetailRoutingModule } from './portfolio-details-routing.module';



@NgModule({
  declarations: [
    PortfolioDetailsComponent
  ],
  imports: [
    CommonModule,
    PortfolioDetailRoutingModule
  ]
})
export class PortfolioDetailsModule { }
