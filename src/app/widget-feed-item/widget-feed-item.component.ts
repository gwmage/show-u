import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-feed-item',
  templateUrl: './widget-feed-item.component.html',
  styleUrls: ['./widget-feed-item.component.css']
})
export class WidgetFeedItemComponent implements OnInit {
  @Input() item: any;
  @Input() status: string[];

  constructor() { }

  ngOnInit(): void {
    // console.log(this.status);
  }

  openLink(url){
    window.open(url, '_blank');
  }

  checkStatus(item) {
    if(this.status) {
      for(const s of this.status) {
        if(item.status === s) {
          return true;
        }
      }
    } else return false;
  }

  getVideoLink() {
    let videoLink = '#';
    if(this.item.platform === 'NAVER') {
      videoLink = 'https://shoppinglive.naver.com/lives/' + this.item.broadcastId;
    } else if (this.item.platform === 'KAKAO') {
      if(this.item.landingUrl) {
        videoLink = this.item.landingUrl;
      } else {
        videoLink = 'https://kakaotv.daum.net/embed/player/cliplink/' + this.item.videoId + '?service=kakao_shopping&showinfo=0&coverprofile=0&profile=HIGH&extensions=0&showconfirm=0&rel=0&branding=0'
      }
    }
    return videoLink;
  }

}

