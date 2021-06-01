import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../global-constants';

@Component({
  selector: 'app-body-replay',
  templateUrl: './body-replay.component.html',
  styleUrls: ['./body-replay.component.css']
})
export class BodyReplayComponent implements OnInit {
  feedList: any;

  constructor(
    private http: HttpClient) { }

  ngOnInit(): void {
    this.getKakaoReplay(1);
  }

  getKakaoReplay(page) {
    const requestOptions: object = {
      headers: new HttpHeaders(),
      responseType: 'json',
    };
  
    const url = GlobalConstants.URL + '/kakao/replay?page=' + page;
    const request = this.http.get<any>(url, requestOptions).subscribe(
      data => {
        this.feedList = data.data.contents;
        // console.log(data.data);
        for (const item of this.feedList) {
          item.broadcastTitle = item.title;
          item.broadcastStandByImage = item.thumbnailImageUrl;
          item.broadcastId = 1;
          item.onAirViewerCount = item.joinCount;
          item.likeTotalCount = -1;
          item.nickname = item.storeName;
          item.broadcasterEndUrl = item.productDetailUrl.split('/products')[0];
          item.profileImage = null;
          item.status = 'REPLAY';
          item.platform = 'KAKAO';

          // this.getNaverExtras(item.broadcastId).subscribe(
          //   data => {
          //     item.info = data[0];
          //   }
          // );
        }
        this.getNaverShoppingReplay();
      },
      error => {
        console.log(error);
      }
    );
  }

  
  getNaverShoppingReplay() {
    const requestOptions: object = {
      headers: new HttpHeaders(),
      responseType: 'json',
    };
  
    const url = GlobalConstants.URL + '/naver/replay';
    const request = this.http.get<any>(url, requestOptions).subscribe(
      data => {
        // console.log(data.list);
        for (const item of data.list) {
          this.getNaverExtras(item.broadcastId).subscribe(
            data => {
              item.info = data[0];
              item.platform = 'NAVER';
              item.status = 'REPLAY';
              item.broadcastStartAt = item.expectedStartDate.replaceAll('-', '').replaceAll('T', '').replaceAll(':', '').split('.')[0];
            }
          );
          // console.log(this.feedList);
          
        }
        
        this.feedList = this.feedList.concat(data.list);
        this.feedList.sort((a, b) => {
          if(a.broadcastStartAt > b.broadcastStartAt){
            return 1;
          }
        });

        console.log(this.feedList);
      },
      error => {
        console.log(error);
      }
    );
  }

  
  getNaverExtras(ids: number) {
    const requestOptions: object = {
      headers: new HttpHeaders(),
      responseType: 'json',
    };
  
    const url = GlobalConstants.URL + '/naver/extras?ids=' + ids;
    return this.http.get<any>(url, requestOptions)
  }

}
