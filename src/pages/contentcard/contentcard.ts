import { Component } from '@angular/core';
import { ApiAuthService } from '../../services/apiAuthService';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'page-contentcard',
  templateUrl: 'contentcard.html'
})
export class ContentCardPage {

  constructor(private apiAuth: ApiAuthService,
    public inAppBrowser: InAppBrowser) { }

  ngOnInit() {
    setTimeout(() => {
      console.log(this.dynamicCards.items)
    }, 2000);
    this.apiAuth.getDynamicUrl('assets/data/url-info.json')
      .then(res => {
        this.dynamicCards.items = res
      })
      .catch(err => console.log(err))
  }

  dynamicCards = {
    items: []
  }

  /**
   * Nhận giá trị của component trả về và log ra xem
   * @param event 
   */
  onClickImage(event) {
    console.log('image', event);
  }

  /**
   * Nhận url của component trả về và mở trình duyệt để truy cập web
   * @param event 
   */
  onClickOpenLink(event) {
    console.log('content', event);
    if (event.link) {
      var target = "_blank";
      var options = "hidden=no, toolbar=yes, location=yes, presentationstyle=fullscreen, clearcache=yes, clearsessioncache=yes";
      this.inAppBrowser.create(event.link, target, options);
    }
  }
}