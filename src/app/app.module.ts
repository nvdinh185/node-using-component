import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TimeAgoPipe} from 'time-ago-pipe';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { RequestInterceptor } from '../interceptors/requestInterceptor';
import { ContentCard } from '../components/content-card/content-card';
import { ImageCard } from '../components/image-card/image-card';
import { UserCard } from '../components/user-card/user-card';
import { PopoverCard } from '../components/popover-card/popover-card';
import { SocialCard } from '../components/social-card/social-card';
import { ImageCardPage } from '../pages/imagecard/imagecard';
import { ContentCardPage } from '../pages/contentcard/contentcard';
import { UserCardPage } from '../pages/usercard/usercard';
import { SocialCardPage } from '../pages/socialcard/socialcard';
import { LinkifyPipe } from '../pipes/linkify';
import { NewlinePipe } from '../pipes/new-line';
import { ApiAuthService } from '../services/apiAuthService';

@NgModule({
  declarations: [
    MyApp,
    ImageCardPage,
    ContentCardPage,
    NewlinePipe,
    LinkifyPipe,
    ContentCard,
    ImageCard,
    UserCard,
    UserCardPage,
    SocialCardPage,
    PopoverCard,
    SocialCard,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ImageCardPage,
    ContentCardPage,
    UserCardPage,
    SocialCardPage,
    PopoverCard
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiAuthService,
    InAppBrowser,
    RequestInterceptor
  ]
})
export class AppModule {}
