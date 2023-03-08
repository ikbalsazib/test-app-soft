import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {UserService} from './services/common/user.service';
import {Meta} from '@angular/platform-browser';
import {registerLocaleData} from '@angular/common';
import localeBn from '@angular/common/locales/bn';
import { FooterControllService } from './services/core/footer-controll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('scroll') scroll: ElementRef;

  constructor(
    private userService: UserService,
    private meta: Meta,
    public footerControl: FooterControllService,
  ) {
    this.googleNoIndex();
    registerLocaleData(localeBn, 'bn');
    this.userService.autoUserLoggedIn();
  }


  
  /**
   * scrollTop();
   */
  scrollTop() {
    window.scrollTo(0, 0);
  }

  @HostListener('window:scroll')
  hideShowScrollBtn() {
    if (window.scrollY > 400) {
      this.scroll.nativeElement.style.display = 'flex';
    } else {
      this.scroll.nativeElement.style.display = 'none';
    }
  }

  /**
   * SEO TITLE
   * SEO META TAGS
   */

  private googleNoIndex() {
    this.meta.updateTag({name: 'robots', content: 'noindex'});
    this.meta.updateTag({name: 'googlebot', content: 'noindex'});
  }
}
