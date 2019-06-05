import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiAuthService } from '../../services/apiAuthService';

@Component({
  selector: 'page-usercard',
  templateUrl: 'usercard.html',
})
export class UsercardPage {
  contacts;
  userInfo;
  constructor(private apiAuth: ApiAuthService, public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    setTimeout(() => {
      console.log(this.dynamicCards.items)
    }, 2000);
    this.apiAuth.getDynamicUrl('assets/data/news-info.json')
      .then(res => {
        this.dynamicCards.items = res
      })
      .catch(err => console.log(err))
    this.contacts = { 123456789: {} }
    this.userInfo = { username: "766777123", data: { fullname: "Nguyen Van Dinh" } }
  }

  dynamicCards = {
    items: []
  }

}
