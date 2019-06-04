import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  images;
  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    this.images = [
      {
        alt: "Tướng Mỹ: Ông Tập đã bội hứa về quân sự hóa Biển Đông",
        src: "https://cdn.tuoitre.vn/zoom/504_315/2019/5/30/xi-jin-ping-1559170103420282059851-crop-1559170108147453943080.jpg"
      },
      {
        alt: "Gian lận thi cử: gia đình bị can nộp lại tiền, gia đình thí sinh chối",
        src: "https://cdn.tuoitre.vn/thumb_w/586/2019/5/30/gian-lan-thi-cu-son-la-ong-yen-15592075121131686156044.png"
      }
    ]
  }

  onClickMedia(event) {
    console.log(event)
  }
}
