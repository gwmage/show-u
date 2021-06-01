import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../global-constants';

@Component({
  selector: 'app-body-reserved',
  templateUrl: './body-reserved.component.html',
  styleUrls: ['./body-reserved.component.css']
})
export class BodyReservedComponent implements OnInit {
  feedList: any;

  constructor(
    private http: HttpClient) { }

  ngOnInit(): void {
    this.getNaverShoppingReserved();
  }

  getNaverShoppingReserved() {
    const requestOptions: object = {
      headers: new HttpHeaders(),
      responseType: 'json',
    };
  
    const url = GlobalConstants.URL + '/naver/reserved';
    const request = this.http.get<any>(url, requestOptions).subscribe(
      data => {
        this.feedList = data.list;
        for (const item of this.feedList) {
          this.getNaverExtras(item.broadcastId).subscribe(
            data => {
              item.info = data[0];
              item.platform = 'NAVER';
              item.broadcastStartAt = item.expectedStartDate.replaceAll('-', '').replaceAll('T', '').replaceAll(':', '').split('.')[0];
            }
          );
        }
        console.log(this.feedList);
        this.getKakaoReserved();
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

  
  getKakaoReserved() {
    const requestOptions: object = {
      headers: new HttpHeaders(),
      responseType: 'json',
    };
  
    const url = GlobalConstants.URL + '/kakao/both';
    const request = this.http.get<any>(url, requestOptions).subscribe(
      data => {
        const feedListTmp = data.data.scheduleViewList;
        console.log(data.data.scheduleViewList);
        for (const item of feedListTmp) {
          item.broadcastTitle = item.title;
          item.broadcastStandByImage = item.thumbnailImageUrl;
          item.broadcastId = 1;
          item.onAirViewerCount = item.joinCount;
          item.likeTotalCount = -1;
          item.nickname = item.storeName;
          item.broadcasterEndUrl = item.productDetailUrl.split('/products')[0];
          item.profileImage = null;
          item.status = 'NONE';
          item.platform = 'KAKAO';
        }

        this.feedList = this.feedList.concat(feedListTmp);
        this.feedList.sort((a, b) => {
          if(a.broadcastStartAt > b.broadcastStartAt){
            return 1;
          }
        });
      },
      error => {
        console.log(error);
      }
    );
  }

}
