import { Portfolio } from 'src/app/interfaces/common/portfolio.interface';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PortfolioService } from 'src/app/services/common/portfolio.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.scss']
})
export class PortfolioDetailsComponent implements OnInit {
    // Store Data
    slug?: string;
    portfolio?: Portfolio;
      // Subscriptions
  private subDataOne: Subscription;
  private subRouteOne: Subscription;
  constructor(
    private activatedRoute: ActivatedRoute,
    private portfolioService: PortfolioService,
    private spinnerService: NgxSpinnerService,
  ) {
   }

  ngOnInit(): void {
            // GET ID FORM PARAM
            this.subRouteOne = this.activatedRoute.paramMap.subscribe((param) => {
              this.slug = param.get('slug');
              if (this.slug) {
                this.getPortfolioBySlug(this.slug);
              }
            });

  }
  getPortfolioBySlug(slug:string){
    this.spinnerService.show();
    this.subDataOne = this.portfolioService.getPortfoliosBySlug(slug)
      .subscribe({
        next: (res => {
          this.portfolio = res.data;
          console.log('this.portfolio by slug',this.portfolio);

        }),
        error: (error => {
          this.spinnerService.hide();
          console.log(error);
        })
      });
  }
}
