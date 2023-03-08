import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Portfolio } from 'src/app/interfaces/common/portfolio.interface';
import { Pagination } from 'src/app/interfaces/core/pagination';
import { FilterData } from 'src/app/interfaces/gallery/filter-data';
import { PortfolioService } from 'src/app/services/common/portfolio.service';
import {PortfolioCategory} from "../../interfaces/common/portfolio-category.interface";
import {PortfolioCategoryService} from "../../services/common/portfolio-category.service";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  // Store Data
  portfolio: Portfolio[] = [];
  storePortfolios: Portfolio[];
  portfolioCategory: PortfolioCategory[] = [];
  selectedCatButton = -1;

  // Query
  query: any = null;


    // Pagination
    currentPage = 1;
    totalPortfolio = 0;
    portfolioPerPage = 6;
    totalPortfolioStore = 0;

   // SUBSCRIPTION
   private subPortfolio ?: Subscription;
   private subAcRoute ?: Subscription;
   private subCat ?: Subscription;
  private subDataSeven: Subscription;
  private subDataEight: Subscription;

  constructor(
    private portfolioService: PortfolioService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private portfolioCategoryService: PortfolioCategoryService,
  ) { }

  ngOnInit(): void {
    this.getAllCategories();
        // GET PAGE FROM QUERY PARAM
        this.subAcRoute = this.activatedRoute.queryParams.subscribe(qParam => {
          if (qParam && qParam['page']) {
            this.currentPage = qParam['page'];
          } else {
            this.currentPage = 1;
          }
          this.getAllPortfolio(this.selectedCatButton);
        });

  }

    /**
   * HTTP REQ HANDLE
   * getAllPortfolio()
   */

    public getAllPortfolio(index) {
      this.selectedCatButton = index
      const pagination: Pagination = {
        pageSize: this.portfolioPerPage.toString(),
        currentPage: this.currentPage.toString()
      };

      const mQuery = {...{portfolioVisibility: true}, ...this.query};

      // Select
      const mSelect = {
        image: 1,
        name: 1,
        description: 1,
        projectHighlights: 1,
        websiteUrl: 1,
        solution: 1,
        impact: 1,
        features: 1,
        technologies: 1,
        slug:1,
        images:1,
        portfolioCategory:1
      }

      const filterData: FilterData = {
        pagination: null,
        filter: null,
        select: mSelect,
        sort: { createdAt: -1 }
      }

      this.subPortfolio = this.portfolioService.getAllPortfolios(filterData, null)
        .subscribe({
          next: res => {
            if (res.success) {
              this.totalPortfolio = res.count;
              this.totalPortfolioStore = res.count;

              if (this.currentPage > 1) {
                this.portfolio = [...this.portfolio, ...res.data];
                console.log('res.data', res.data);

              }
              else {
                this.portfolio = res.data;
                console.log('res.data', res.data);
              }
            }
          },
          error: error => {
            console.log(error);
          }
        });
    }


  public getProductByPortfolioCategory(portfolioCategoryName:string, index){

    this.selectedCatButton = index;
    // Select
    const mSelect = {
      name: 1,
      image: 1,
      client: 1,
      _id:1,
      slug: 1,
      portfolioCategory:1,
      description:1,
      websiteName:1,
      websiteUrl:1,
      createdAt:1,
    }
    const filterData: FilterData = {
      pagination: null,
      filter: {'portfolioCategory.name': portfolioCategoryName},
      select: mSelect,
      sort: {createdAt: -1}
    }


    this.subDataSeven = this.portfolioService.getAllPortfolios(filterData, null)

      .subscribe({
        next: res=> {
          if(res.success){
            this.portfolio = res.data
            console.log(' this.portfolioby portfolioCategory',  this.portfolio);
          }},
        error:error => {
          console.log(error)
        }
      })
  }
  private getAllCategories(){
    // Select
    const mSelect = {
      name: 1,
    }

    const filterData: FilterData = {
      pagination: null,
      filter: null,
      select: mSelect,
      sort: { createdAt: -1 }
    }

    this.subDataEight = this.portfolioCategoryService.getAllCategories(filterData, null)
      .subscribe({
        next: res => {
          if (res.success) {
            this.portfolioCategory = res.data;
            console.log('this.portfolioCategory', this.portfolioCategory);
          }
        },
        error: error => {
          console.log(error);
        }
      });
  }
  /**
   * PAGINATION CHANGE
   */
  public onPageChanged(event: any) {
    this.router.navigate([], {queryParams: {page: event}});
  }


  ngOnDestroy() {

    if (this.subAcRoute) {
      this.subAcRoute.unsubscribe();
    }
    if (this.subPortfolio) {
      this.subPortfolio.unsubscribe();
    }
    if (this.subCat) {
      this.subCat.unsubscribe();
    }
  }

  loadButtion() {
    this.currentPage += 1;
    this.getAllPortfolio(this.currentPage);
  }
}
