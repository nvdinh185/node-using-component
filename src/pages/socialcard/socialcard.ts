import { Component } from '@angular/core';
import { ApiAuthService } from '../../services/apiAuthService';

@Component({
  selector: 'page-socialcard',
  templateUrl: 'socialcard.html',
})
export class SocialCardPage {

  userInfo = { username: 766777123 }
  constructor(private apiAuth: ApiAuthService) {
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
    console.log(id, ev)
  }

}
