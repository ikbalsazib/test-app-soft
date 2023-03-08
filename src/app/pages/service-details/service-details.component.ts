import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { OurService } from 'src/app/interfaces/common/our-service.interface';
import { OurServiceService } from 'src/app/services/common/our-service.service';
// import Swiper core and required modules
import SwiperCore, { A11y, Autoplay, EffectFade, FreeMode, Navigation, Scrollbar } from 'swiper';
// install Swiper modules
SwiperCore.use([Navigation, Scrollbar, A11y, EffectFade, Autoplay, FreeMode]);

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss']
})
export class ServiceDetailsComponent implements OnInit {

    // Store Data
    slug?: string;
    ourService?: OurService;

  // Subscriptions
  private subDataOne: Subscription;
  private subRouteOne: Subscription;
  constructor(
    private activatedRoute: ActivatedRoute,
    private ourServiceService: OurServiceService,
    private spinnerService: NgxSpinnerService,

  ) { }

  ngOnInit(): void {
        // GET ID FORM PARAM
        this.subRouteOne = this.activatedRoute.paramMap.subscribe((param) => {
          this.slug = param.get('slug');
          if (this.slug) {
            this.getOurServicesBySlug(this.slug);
          }
        });

  }
  getOurServicesBySlug(slug:string){
    this.spinnerService.show();
    this.subDataOne = this.ourServiceService.getOurServicesBySlug(slug)
      .subscribe({
        next: (res => {
          this.ourService = res.data;
          console.log('this.ourService by slug',this.ourService);

        }),
        error: (error => {
          this.spinnerService.hide();
          console.log(error);
        })
      });
  }

}
