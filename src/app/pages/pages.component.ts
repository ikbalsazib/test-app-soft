import {Component, OnInit,HostListener} from '@angular/core';
import {UserService} from '../services/common/user.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  headerFixed= false;
  sideNav = true;
  userMenu=false;
  closeBtn=true;

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
  }


  @HostListener('window:scroll')
  headerFixedControl(){
    if(window.scrollY > 300){
      this.headerFixed=true;
    }
    else{
      this.headerFixed=false;
    }
  }
  /**
   * SideNavToggle()
   */
   ownUserProfile(){
    this.userMenu=!this.userMenu;
   }

   // close btn
ownCloseBtn(){
  this.userMenu=!this.closeBtn;
 
}

  onLogout() {
    this.userService.userLogOut();
  }


}
