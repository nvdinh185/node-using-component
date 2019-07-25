import { Component } from '@angular/core';
import { ImageCardPage } from '../pages/imagecard/imagecard';
import { ContentCardPage } from '../pages/contentcard/contentcard';
import { UserCardPage } from '../pages/usercard/usercard';
import { SocialCardPage } from '../pages/socialcard/socialcard';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = ImageCardPage;

  constructor() {}
}