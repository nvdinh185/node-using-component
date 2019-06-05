import { Component } from '@angular/core';
import { HomePage } from '../pages/home/home';
import { HomeNewsPage } from '../pages/home-news/home-news';
import { UsercardPage } from '../pages/usercard/usercard';
import { SocialcardPage } from '../pages/socialcard/socialcard';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SocialcardPage;//UsercardPage //HomeNewsPage;//HomePage;

  constructor() {}
}

