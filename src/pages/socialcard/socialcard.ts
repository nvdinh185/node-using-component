import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiAuthService } from '../../services/apiAuthService';

@Component({
  selector: 'page-socialcard',
  templateUrl: 'socialcard.html',
})
export class SocialcardPage {

  userInfo = { username: 766777123 }
  constructor(private apiAuth: ApiAuthService, public navCtrl: NavController, public navParams: NavParams) {
  }

  dynamicCards = {
    items: []
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
  }

  onClickAction(ev, id) {
    console.log(ev)
  }

}
