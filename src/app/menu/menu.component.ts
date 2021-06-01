import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SessionStorage } from 'angular-web-storage';
import { DataSharingService } from '../data-sharing-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output() selectedMenu = new EventEmitter<number>();
  @Input() userLevel: number;
  @SessionStorage() sessionValue;
  didLogin : boolean;
  
  constructor(private dataSharingService: DataSharingService) {
    this.dataSharingService.isUserLoggedIn.subscribe(value => {
      this.didLogin = value;
      this.ngOnInit();
    }); 
  }

  ngOnInit(): void {
  }

}
