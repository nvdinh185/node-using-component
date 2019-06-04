import { Component } from '@angular/core';
import { HomePage } from '../pages/home/home';
import { HomeNewsPage } from '../pages/home-news/home-news';
import { UsercardPage } from '../pages/usercard/usercard';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = UsercardPage //HomeNewsPage;//HomePage;

  constructor() {}
}

