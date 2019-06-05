import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ApiAuthService } from '../services/apiAuthService';
import { HttpClientModule } from '@angular/common/http';
import { TimeAgoPipe} from 'time-ago-pipe';
import { RequestInterceptor } from '../interceptors/requestInterceptor';
import { HomeNewsPage } from '../pages/home-news/home-news';
import { LinkifyPipe } from '../pipes/linkify';
import { NewlinePipe } from '../pipes/new-line';
import { ContentCard } from '../components/content-card/content-card';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ImageCard } from '../components/image-card/image-card';
import { UserCard } from '../components/user-card/user-card';
import { UsercardPage } from '../pages/usercard/usercard';
import { PopoverCard } from '../components/popover-card/popover-card';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HomeNewsPage,
    NewlinePipe,
    LinkifyPipe,
    ContentCard,
    ImageCard,
    UserCard,
    UsercardPage,
    PopoverCard,
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
    HomePage,
    HomeNewsPage,
    UsercardPage,
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
