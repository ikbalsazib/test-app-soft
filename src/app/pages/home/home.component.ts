import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Client } from 'src/app/interfaces/common/client.interface';
import { Review } from 'src/app/interfaces/common/review.interface';
import { FilterData } from 'src/app/interfaces/gallery/filter-data';
import { ClientService } from 'src/app/services/common/client.service';
import { ReviewService } from 'src/app/services/common/review.service';
// import Swiper core and required modules
import SwiperCore, { A11y, Autoplay, EffectFade, FreeMode, Navigation, Scrollbar } from 'swiper';
import { Showcase } from 'src/app/interfaces/common/showcase.interface';
import { WhyService } from 'src/app/services/common/why.service';
import { Why } from 'src/app/interfaces/common/why.interface';
import { Tag } from 'src/app/interfaces/common/tag.interface';
import { OurServiceService } from 'src/app/services/common/our-service.service';
import { OurService } from '../../interfaces/common/our-service.interface';
import { TagService } from '../../services/common/tag.service';
import { ShowcaseService } from '../../services/common/showcase.service';
import { Seo } from 'src/app/interfaces/common/seo.interface';
import { SeoService } from 'src/app/services/common/seo.service';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/services/common/canonical.service';

// install Swiper modules
SwiperCore.use([Navigation, Scrollbar, A11y, EffectFade, Autoplay, FreeMode]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  companies = [
    {
      img: 'https://quiety-wp.themetags.com/wp-content/uploads/2021/11/client-logo-1.png'
    },
    {
      img: 'https://quiety-wp.themetags.com/wp-content/uploads/2021/10/client-logo-4.png'
    },
    {
      img: 'https://quiety-wp.themetags.com/wp-content/uploads/2021/11/client-logo-3.png'
    },
    {
      img: 'https://quiety-wp.themetags.com/wp-content/uploads/2021/11/client-logo-4.png'
    },
    {
      img: 'https://quiety-wp.themetags.com/wp-content/uploads/2021/11/client-logo-5.png'
    },
    {
      img: 'https://quiety-wp.themetags.com/wp-content/uploads/2021/11/client-logo-6.png'
    },
    {
      img: 'https://quiety-wp.themetags.com/wp-content/uploads/2021/11/client-logo-7.png'
    },
    {
      img: 'https://quiety-wp.themetags.com/wp-content/uploads/2021/11/client-logo-8.png'
    },
  ]
  brands = [
    {
      name: 'Brand1',
      img: 'https://quiety-wp.themetags.com/wp-content/plugins/quiety-core/elementor//assets/images/logo1.png'
    },
    {
      name: 'Brand2',
      img: 'https://quiety-wp.themetags.com/wp-content/plugins/quiety-core/elementor//assets/images/logo2.png'
    },
    {
      name: 'Brand3',
      img: 'https://quiety-wp.themetags.com/wp-content/plugins/quiety-core/elementor//assets/images/logo3.png'
    },
    {
      name: 'Brand4',
      img: 'https://quiety-wp.themetags.com/wp-content/plugins/quiety-core/elementor//assets/images/logo4.png'
    },
    {
      name: 'Brand5',
      img: 'https://quiety-wp.themetags.com/wp-content/plugins/quiety-core/elementor//assets/images/logo5.png'
    },
    {
      name: 'Brand1',
      img: 'https://quiety-wp.themetags.com/wp-content/plugins/quiety-core/elementor//assets/images/logo5.png'
    },
    {
      name: 'Brand1',
      img: 'https://quiety-wp.themetags.com/wp-content/plugins/quiety-core/elementor//assets/images/logo6.png'
    },
    {
      name: 'Brand1',
      img: 'https://quiety-wp.themetags.com/wp-content/uploads/2021/10/logo7.png'
    },
    {
      name: 'Brand1',
      img: 'https://quiety-wp.themetags.com/wp-content/uploads/2021/10/logo8.png'
    },
    {
      name: 'Brand1',
      img: 'https://quiety-wp.themetags.com/wp-content/uploads/2021/10/logo9.png'
    },
    {
      name: 'Brand1',
      img: 'https://quiety-wp.themetags.com/wp-content/uploads/2021/10/logo10.png'
    },
    {
      name: 'Brand1',
      img: 'https://quiety-wp.themetags.com/wp-content/uploads/2021/10/logo11.png'
    },
    {
      name: 'Brand1',
      img: 'https://quiety-wp.themetags.com/wp-content/uploads/2021/10/logo12.png'
    },
    {
      name: 'Brand1',
      img: 'https://quiety-wp.themetags.com/wp-content/uploads/2021/10/logo13.png'
    },
    {
      name: 'Brand1',
      img: 'https://quiety-wp.themetags.com/wp-content/uploads/2021/10/logo14.png'
    },
    {
      name: 'Brand1',
      img: 'https://quiety-wp.themetags.com/wp-content/uploads/2021/10/logo15.png'
    },
    {
      name: 'Brand1',
      img: 'https://quiety-wp.themetags.com/wp-content/uploads/2021/10/logo17.png'
    },
    {
      name: 'Brand1',
      img: 'https://quiety-wp.themetags.com/wp-content/uploads/2021/10/logo18.png'
    },
    {
      name: 'Brand1',
      img: 'https://quiety-wp.themetags.com/wp-content/uploads/2021/10/logo19.png'
    }
  ]
  testimonials = [
    {
      img: '../../../assets/images/static/289638271_365884618792592_7183701951799162298_n.jpg',
      name: 'Saiful Alam',
      designation: 'Founder and CEO at Amaara Herbs',
      review: 'Pellentesque nec nam aliquam sem. Ultricies lacus sed turpis tincidunt id aliquet risus. Consequat nisl vel pretium lectus quam id. Velit scelerisque in dictum non of the ntconsectetur.'
    },
    {
      img: '../../../assets/images/static/312114582_3110327892591915_3421138598618503373_n (1).jpg',
      name: 'Niloy Khan',
      designation: 'Founder and CEO at Telikon Herbs',
      review: 'Pellentesque nec nam aliquam sem. Ultricies lacus sed turpis tincidunt id aliquet risus. Consequat nisl vel pretium lectus quam id. Velit scelerisque in dictum non of the ntconsectetur.'
    },
    {
      img: '../../../assets/images/static/289638271_365884618792592_7183701951799162298_n.jpg',
      name: 'Saiful Alam',
      designation: 'Founder and CEO at Amaara Herbs',
      review: 'Pellentesque nec nam aliquam sem. Ultricies lacus sed turpis tincidunt id aliquet risus. Consequat nisl vel pretium lectus quam id. Velit scelerisque in dictum non of the ntconsectetur.'
    }
  ]


  // Store Data
  clients: Client[] = [];
  reviews: Review[] = [];
  showcase: Showcase[] = [];
  tag: Tag[] = [];
  why: Why[] = [];
  ourService: OurService[] = [];
  seoByPageName: Seo;

  // Subscriptions
  private subDataOne: Subscription;
  private subDataTwo: Subscription;
  private subDataThree: Subscription;
  private subDataFour: Subscription;
  private subDataFive: Subscription;
  private subDataSix: Subscription;

  constructor(
    private clientService: ClientService,
    private reviewService: ReviewService,
    private showcaseService: ShowcaseService,
    private whyService: WhyService,
    private tagService: TagService,
    private ourServiceService: OurServiceService,
    private seoService: SeoService,
    private title: Title,
    private meta: Meta,
    private canonicalService: CanonicalService,
  ) {
  }

  ngOnInit(): void {
    this.getSeoByPageName();
    this.getAllShowcase();
    this.getAllTag();
    this.getAllWhy();
    this.getAllOurService();
    this.getAllClients();
    this.getAllReviews();
  }


  /**
   * HTTP REQ HANDLE
   * getAllClients()
   * getAllReviews()
   * getAllShowcase()
   * getAllWhy()
   * getAllTag()
   * getAllOurService()
   */

  private getAllClients() {
    // Select
    const mSelect = {
      image: 1,
      name: 1,
      url: 1,
    }

    const filterData: FilterData = {
      pagination: null,
      filter: null,
      select: mSelect,
      sort: { createdAt: -1 }
    }

    this.subDataOne = this.clientService.getAllClients(filterData, null)
      .subscribe({
        next: res => {
          if (res.success) {
            this.clients = res.data;
            console.log('this.clients', this.clients);
          }
        },
        error: error => {
          console.log(error);
        }
      });
  }

  private getAllReviews() {
    // Select
    const mSelect = {
      image: 1,
      name: 1,
      title: 1,
      description: 1
    }

    const filterData: FilterData = {
      pagination: null,
      filter: null,
      select: mSelect,
      sort: { createdAt: -1 }
    }

    this.subDataOne = this.reviewService.getAllReviews(filterData, null)

      .subscribe({
        next: res => {
          if (res.success) {
            this.reviews = res.data;
            console.log('this.reviews', this.reviews);
          }
        },
        error: error => {
          console.log(error);
        }
      });
  }

  private getAllShowcase() {
    // Select
    const mSelect = {
      image: 1,
      title: 1,
      description: 1
    }

    const filterData: FilterData = {
      pagination: null,
      filter: null,
      select: mSelect,
      sort: { createdAt: -1 }
    }

    this.subDataThree = this.showcaseService.getAllShowcases(filterData, null)
      .subscribe({
        next: res => {
          if (res.success) {
            this.showcase = res.data;
            console.log('this.showcase', this.showcase);
          }
        },
        error: error => {
          console.log(error);
        }
      });
  }

  private getAllWhy() {
    // Select
    const mSelect = {
      title: 1,
      subTitle: 1,
      description: 1
    }

    const filterData: FilterData = {
      pagination: null,
      filter: null,
      select: mSelect,
      sort: { createdAt: -1 }
    }

    this.subDataFour = this.whyService.getAllWhys(filterData, null)
      .subscribe({
        next: res => {
          if (res.success) {
            this.why = res.data;
            console.log('this.why', this.why);
          }
        },
        error: error => {
          console.log(error);
        }
      });
  }

  private getAllTag() {
    // Select
    const mSelect = {
      name: 1,
      image: 1
    }

    const filterData: FilterData = {
      pagination: null,
      filter: null,
      select: mSelect,
      sort: { createdAt: -1 }
    }

    this.subDataFive = this.tagService.getAllTags(filterData, null)
      .subscribe({
        next: res => {
          if (res.success) {
          this.tag = res.data;
          console.log('this.tag', this.tag);
          }
        },
        error: error => {
          console.log(error);
        }
      });
  }

  private getAllOurService() {
    // Select
    const mSelect = {
      name: 1,
      image: 1,
      shortDescription: 1,
      _id:1,
      slug: 1,
    }

    const filterData: FilterData = {
      pagination: null,
      filter: null,
      select: mSelect,
      sort: { createdAt: -1 }
    }

    this.subDataSix = this.ourServiceService.getAllOurServices(filterData, null)

    .subscribe({
      next: res=> {
        if(res.success){
          this.ourService = res.data
          console.log(' this.ourService',  this.ourService);
        }},
        error:error => {
          console.log(error)
        }
    })
  }


  private getSeoByPageName() {

    this.seoService.getSeoByPageName('home')
      .subscribe(res => {
        this.seoByPageName = res.data;
        console.log(' this.seoByPageName', this.seoByPageName);
        if (this.seoByPageName) {
          this.updateMetaData();
        }

      }, error => {
        console.log(error);
      });
  }


  
  /**
   * SEO TITLE
   * SEO META TAGS
   */

  private updateMetaData() {
    // Title
    this.title.setTitle(`${this.seoByPageName?.seoTitle}`);
    // Meta
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'description', content: `${this.seoByPageName?.seoDescription}` });
    this.meta.updateTag({ name: 'keywords', content:`${this.seoByPageName?.seoKeywords}` });
    // Facebook
    this.meta.updateTag({ name: 'og:title', content: 'Softlab IT & Software | Best Software Firm in BD' });
    this.meta.updateTag({ name: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'og:url', content: 'https://course.softlabit.com/' });
    this.meta.updateTag({ name: 'og:image', content: `${this.seoByPageName?.image}` });
    this.meta.updateTag({ name: 'og:description', content: `${this.seoByPageName?.seoDescription}` });
    // Twitter
    this.meta.updateTag({ name: 'twitter:title', content: `${this.seoByPageName?.seoTitle}` });
    this.meta.updateTag({ name: 'twitter:image', content: `${this.seoByPageName?.image}` });
    this.meta.updateTag({ name: 'twitter:description', content: `${this.seoByPageName?.seoTitle}` });

    // Canonical
    this.canonicalService.setCanonicalURL();

  }

  /**
   * ON DESTROY
   */
  ngOnDestroy() {
    if (this.subDataOne) {
      this.subDataOne.unsubscribe();
    }
    if (this.subDataTwo) {
      this.subDataTwo.unsubscribe();
    }
    if (this.subDataThree) {
      this.subDataThree.unsubscribe();
    }
    if (this.subDataFour) {
      this.subDataFour.unsubscribe();
    }
    if (this.subDataFive) {
      this.subDataFive.unsubscribe();
    }
    if (this.subDataSix) {
      this.subDataSix.unsubscribe();
    }
  }
}
