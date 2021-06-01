import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() onClickMenuBtnOut = new EventEmitter<any>();
  @Output() onClickCategoryOut = new EventEmitter<number>();
  target: number;

  constructor() {
  }

  ngOnInit(): void {
    this.onClickCategoryBtn(2);
  }

  onClickMenuBtn() {
    this.onClickMenuBtnOut.emit(true);
  }

  onClickCategoryBtn(target){
    this.onClickCategoryOut.emit(target);
    this.target = target;
  }
}
