import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../global-constants';

@Component({
  selector: 'app-body-onlive',
  templateUrl: './body-onlive.component.html',
  styleUrls: ['./body-onlive.component.css']
})
export class BodyOnliveComponent implements OnInit {
  feedList: any;

  constructor(
    private http: HttpClient) { }

  ngOnInit(): void {
    this.getNaverShoppingLive();
  }

  
  getNaverShoppingLive() {
    const requestOptions: object = {
      headers: new HttpHeaders(),
      responseType: 'json',
    };
  
    const url = GlobalConstants.URL + '/naver/onlive';
    const request = this.http.get<any>(url, requestOptions).subscribe(
      data => {
        this.feedList = data.list;
        // console.log(data.list);
        for (const item of this.feedList) {
          this.getNaverExtras(item.broadcastId).subscribe(
            data => {
              item.info = data[0];
              item.platform = 'NAVER';
            }
          );
        }
        this.getKakaoOnLive();
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
  
  getKakaoOnLive() {
    const requestOptions: object = {
      headers: new HttpHeaders(),
      responseType: 'json',
    };
  
    const url = GlobalConstants.URL + '/kakao/both?';
    const request = this.http.get<any>(url, requestOptions).subscribe(
      data => {
        const feedListTmp = data.data.banner;
        // console.log(data.data);
        feedListTmp.broadcastTitle = feedListTmp.name;
        feedListTmp.broadcastStandByImage = feedListTmp.firstImageUrl;
        feedListTmp.broadcastId = feedListTmp.id;
        feedListTmp.onAirViewerCount = -1
        feedListTmp.likeTotalCount = -1;
        feedListTmp.nickname = '';
        feedListTmp.broadcasterEndUrl = feedListTmp.broadcasterEndUrl;
        feedListTmp.profileImage = null;
        feedListTmp.status = 'ONAIR';
        feedListTmp.platform = 'KAKAO';
        
        this.feedList.unshift(feedListTmp);
      },
      error => {
        console.log(error);
      }
    );
  }

}
