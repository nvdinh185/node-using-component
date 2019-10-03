import { Component } from '@angular/core';
import { UserCardPage } from '../pages/usercard/usercard';
import { ContentCardPage } from '../pages/contentcard/contentcard';
import { ImageCardPage } from '../pages/imagecard/imagecard';
import { SocialCardPage } from '../pages/socialcard/socialcard';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SocialCardPage;

  constructor() {}
}