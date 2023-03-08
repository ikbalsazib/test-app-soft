import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription, pluck, debounceTime, distinctUntilChanged, switchMap, EMPTY } from 'rxjs';
import { Certificate } from 'src/app/interfaces/common/certificate.interface';
import { FilterData } from 'src/app/interfaces/gallery/filter-data';
import { Pagination } from 'src/app/interfaces/core/pagination';
import { CertificateService } from 'src/app/services/common/certificate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificate-validation',
  templateUrl: './certificate-validation.component.html',
  styleUrls: ['./certificate-validation.component.scss']
})
export class CertificateValidationComponent implements OnInit {
  @ViewChild('services') services!: ElementRef;
  @ViewChild('why') whyUs!: ElementRef;
  // Test
  searchProducts: Certificate[] = [];
  slide = false;
  searchBar = false;
  searchQuery = null;
  private subForm: Subscription;
  // SEARCH AREA
  overlay = false;
  isOpen = false;
  isFocused = false;
  isLoading = false;
  isSelect = false;
  query = null;
  @ViewChild('searchInput') searchInput: ElementRef;
  @ViewChild('searchForm') searchForm: NgForm;
  constructor(
    private certificateService: CertificateService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.searchAnim();
    const formValue = this.searchForm.valueChanges;

    this.subForm = formValue
      .pipe(
        // map(t => t.searchTerm)
        // filter(() => this.searchForm.valid),
        pluck('searchTerm'),
        debounceTime(150),
        distinctUntilChanged(),
        switchMap((data) => {
          this.searchQuery = data.trim();
          if (this.searchQuery === '' || this.searchQuery === null) {
            this.overlay = false;
            this.searchProducts = [];
            this.searchQuery = null;
            return EMPTY;
          }
          this.isLoading = true;
          const pagination: Pagination = {
            pageSize: 10,
            currentPage: 0,
          };
          // Select
          const mSelect = {
            certificateNumber:1,
            name:1
//here the data you select will gooooooooooooooo
          };

          const filterData: FilterData = {
            pagination: null,
            filter: null,
            select: mSelect,
            sort: {createdAt: -1},
          };
          return this.certificateService.getAllCertificates(
            filterData,
            this.searchQuery
          );
        })
      )
      .subscribe({
        next: ((res) => {
          this.isLoading = false;
          this.searchProducts = res.data;
        console.log( res.data);

          if (this.searchProducts.length > 0) {
            this.isOpen = true;
            this.overlay = true;
          }
        }),
        error: ((error) => {
          this.isLoading = false;
          console.log(error);
        })
      });
  }


  onClickSearchArea(event: MouseEvent): void {
    console.log('onClickSearchArea')
    event.stopPropagation();
  }
  /**
 * SEARCH PLACEHOLDER ANIMATION
 */
  private searchAnim() {
    const target = this.searchInput.nativeElement as HTMLInputElement;
    target.placeholder = '|';
    this.typeIt(target);
  }

  private typeIt(target: HTMLInputElement) {
    const humanize = Math.round(Math.random() * (300 - 30)) + 30;
    this.timeOutOngoing = setTimeout(() => {
      this.char++;
      const type = this.txt.substring(0, this.char);
      target.placeholder = type + '|';
      this.typeIt(target);

      if (this.char === this.txt.length) {
        // target.placeholder = txt.slice(0, -1);
        target.placeholder = '|';
        this.char = 0;
        // clearTimeout(timeOut);
      }

    }, humanize);
  }
  handleOverlay(): void {
    console.log('handleOverlay')
    this.overlay = false;
    this.isOpen = false;
    this.isFocused = false;
  }
  // Placeholder Animation
  timeOutOngoing: any;
  char = 0;
  txt = 'Search certificate info...';


  handleFocus(event: FocusEvent): void {
    console.log('handleFocus')
    this.searchInput.nativeElement.focus();

    if (this.isFocused) {
      return;
    }
    if (this.searchProducts.length > 0) {
      this.setPanelState(event);
    }
    this.isFocused = true;
  }

  private setPanelState(event: FocusEvent): void {
    console.log('setPanelState')
    if (event) {
      event.stopPropagation();
    }
    this.isOpen = false;
    this.handleOpen();
  }

  handleOpen(): void {
    console.log('handleOpen')
    if (this.isOpen || this.isOpen && !this.isLoading) {
      return;
    }
    if (this.searchProducts.length > 0) {
      this.isOpen = true;
      this.overlay = true;
    }
  }

  handleOutsideClick(): void {
    console.log('handleOutsideClick')
    if (!this.isOpen) {
      // this.isFocused = false;
      return;
    }
    this.isOpen = false;
    this.overlay = false;
    this.isFocused = false;
  }

  handleCloseOnly(): void {
    console.log('handleCloseOnly')
    if (!this.isOpen) {
      this.isFocused = false;
      return;
    }
    this.isOpen = false;
    this.overlay = false;
    this.isFocused = false;
  }

  searchBoxShow() {
    this.searchBar = true;
    if (window.innerWidth <= 600) {
      this.slide = !this.slide;
      this.searchBar = false;
    } else {
      this.slide = false;
      this.searchBar = true;
    }
  }

  searchClick() {
    console.log("-------------------",this.searchQuery)
    this.searchBar = false;
    this.router.navigate(['certificate-validation-detail', this.searchQuery ]);
  }
  handleCloseAndClear(): void {
    console.log('handleCloseAndClear')
    if (!this.isOpen) {
      this.isFocused = false;
      return;
    }
    this.isOpen = false;
    this.overlay = false;
    this.searchProducts = [];
    this.isFocused = false;
  }
  onSelectItem(data: Certificate): void {
    console.log('onSelectItem', data)
    this.handleCloseAndClear();
    // this.router.navigate(['/product-details', data?.productSlug]);
    this.router.navigate(['certificate-validation-detail', data?._id]);
  }

}
