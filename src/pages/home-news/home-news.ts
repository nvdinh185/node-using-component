import { Component } from '@angular/core';
import { ApiAuthService } from '../../services/apiAuthService';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'page-home-news',
  templateUrl: 'home-news.html'
})
export class HomeNewsPage {

  constructor(private apiAuth: ApiAuthService,
    public inAppBrowser: InAppBrowser) { }

  ngOnInit() {
    this.apiAuth.getDynamicUrl('assets/data/url-info.json')
      .then(res => {
        this.dynamicCards.items = res
      })
      .catch(err => console.log(err))
  }

  dynamicCards = {
    title: ""
    , buttons: [
      { color: "primary", icon: "photos", next: "ADD" }
    ]
    , items: []
  }

  onClickImage(event) {
    console.log('image', event);
    //đọc các hình ở link callback, popup cửa sổ hình ảnh lên cho phép comment từng hình???

    // this.modalCtrl
    // .create(ssss, {images:event.original})
    // .present();
  }

  onClickOpenLink(event) {
    console.log('content', event);
    //popup inappBrowser link
    if (event.link) {
      var target = "_blank"; //mo trong inappbrowser
      var options = "hidden=no, toolbar=yes, location=yes, presentationstyle=fullscreen, clearcache=yes, clearsessioncache=yes";
      this.inAppBrowser.create(event.link, target, options);
    }
  }
}