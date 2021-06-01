import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorage } from 'angular-web-storage';
import { DataSharingService } from './data-sharing-service.service';
import { GlobalConstants } from './global-constants'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'showu';
  @SessionStorage() sessionValue;

  menuOn = false;

  selectedMenu = 0;

  userLevel: number;

  constructor(
    private router: Router,
    private http: HttpClient
  ){

  }
  
  onClickMenuBtn(event) {
    if(this.menuOn) this.menuOn = false;
    else this.menuOn = true;
  }

  onClickCategory(event) {
    this.onChangeSelectedMenu(event);
  }

  ngOnInit() {
    // this.getUserLevel();
    // this.getNaverShoppingLive();
  }

  onChangeSelectedMenu(event) {
    this.selectedMenu = event;
    if(this.selectedMenu == 1) {
      this.router.navigate(['/replay'], {});
    } else if(this.selectedMenu == 2) {
      this.router.navigate(['/onlive'], {});
    } else if(this.selectedMenu == 3) {
      this.router.navigate(['/reserved'], {});
    }
  }

}
