import { Component } from '@angular/core';
import { ApiAuthService } from '../../services/apiAuthService';

@Component({
  selector: 'page-usercard',
  templateUrl: 'usercard.html',
})
export class UserCardPage {
  contacts;
  userInfo;
  constructor(private apiAuth: ApiAuthService) {
  }

  dynamicCards = {
    items: []
  }

  /**
   * Lấy danh sách tin trong file news_info.json
   * Đối tượng contacts là danh sách danh bạ
   * Đối tượng userInfo là thông tin của user đăng nhập
   */
  ngOnInit() {
    setTimeout(() => {
      console.log(this.dynamicCards.items)
    }, 2000);

    this.apiAuth.getDynamicUrl('assets/data/news-info.json')
      .then(res => {
        this.dynamicCards.items = res
      })
      .catch(err => console.log(err))
      
    this.contacts = { 903500888: { fullname: "Cuong Test", avatar: "http://img.fica.vn/fica/images/2019/10/01/co-hay-khong-chuyen-doi-banh-keo-lay-may-bay-boeing-727-o-noi-bai-20191001142615277.jpg" } }
    this.userInfo = { username: "766777123", data: { fullname: "Nguyen Van Dinh", image: "https://icdn.dantri.com.vn/thumb_w/640/2019/10/01/pt-tg-kiem-tra-1569903101446.jpg" } }
  }

  onClickMore(ev, id) {
    console.log(id, ev)
  }
}
