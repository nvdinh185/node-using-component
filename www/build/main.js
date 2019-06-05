webpackJsonp([0],{

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverCard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Card này cho phép người dùng chuyển vào menu chọn lựa
 * kết quả trả cho nơi gọi chức năng đã chọn lựa theo menu
 */


var PopoverCard = /** @class */ (function () {
    function PopoverCard(navParams, viewCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.dynamicForm = {
            type: "item",
            menu: [
                {
                    icon: "star",
                    color: "star",
                    name: "Ngôi sao",
                    value: "star"
                },
                {
                    icon: "logo-android",
                    color: "secondary",
                    name: "Android",
                    value: "logo-android"
                },
                {
                    icon: "logo-apple",
                    color: "dark",
                    name: "Apple",
                    value: "logo-apple"
                }
            ]
        };
    }
    PopoverCard.prototype.ngOnInit = function () {
        this.dynamicForm = this.navParams.data && this.navParams.data.form ? this.navParams.data.form : this.dynamicForm;
    };
    PopoverCard.prototype.selectedValue = function (value) {
        if (value) {
            this.viewCtrl.dismiss(value);
        }
    };
    PopoverCard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'popover-card',template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\NODE_Baitap\node-news\using-component\src\components\popover-card\popover-card.html"*/'<!-- Lựa chọn tab theo kiểu bảng -->\n\n<ion-row *ngIf="dynamicForm?.type===\'tab\'">\n\n    <ion-col>\n\n        <button (click)="selectedValue(\'smaller\')" ion-item detail-none class="text-button text-smaller border-card">A</button>\n\n    </ion-col>\n\n    <ion-col>\n\n        <button (click)="selectedValue(\'larger\')" ion-item detail-none class="text-button text-larger border-card">A</button>\n\n    </ion-col>\n\n</ion-row>\n\n\n\n<!-- Mảng icon cần chọn ví dụ như lựa chọn cảm xúc -->\n\n<ion-toolbar *ngIf="dynamicForm?.type===\'icon\'" class="item-card">\n\n    <ion-buttons>\n\n        <button *ngFor="let it of dynamicForm?.menu; let idx=index;" ion-button icon-only color="{{it.color}}" (click)="selectedValue(it.value)">\n\n            <ion-icon name="{{it.icon}}"></ion-icon>\n\n        </button>             \n\n    </ion-buttons>\n\n</ion-toolbar>\n\n\n\n<!-- Chọn màu nền, thiết kế màu để chọn lựa -->\n\n<ion-row *ngIf="dynamicForm?.type===\'color\'" class="row-dots">\n\n    <ion-col>\n\n        <button ion-button="dot" (click)="selectedValue(\'white\')" class="dot-white" [class.selected]="background == \'white\'"></button>\n\n    </ion-col>\n\n    <ion-col>\n\n        <button ion-button="dot" (click)="selectedValue(\'tan\')" class="dot-tan" [class.selected]="background == \'tan\'"></button>\n\n    </ion-col>\n\n    <ion-col>\n\n        <button ion-button="dot" (click)="selectedValue(\'grey\')" class="dot-grey" [class.selected]="background == \'grey\'"></button>\n\n    </ion-col>\n\n    <ion-col>\n\n        <button ion-button="dot" (click)="selectedValue(\'black\')" class="dot-black" [class.selected]="background == \'black\'"></button>\n\n    </ion-col>\n\n</ion-row>\n\n\n\n<!-- Chọn một mảng giá trị biểu tượng và mô tả danh sách theo menu xuống -->\n\n<ion-list *ngIf="dynamicForm?.type===\'item\'">\n\n    <ion-item *ngFor="let it of dynamicForm?.menu; let idx=index;" tappable class="item-selected" (click)="selectedValue(it.value)">\n\n        <ion-icon *ngIf="it.icon" item-start name="{{it.icon}}" color="{{it.color}}"></ion-icon>\n\n        <ion-label>{{it.name}}</ion-label>\n\n    </ion-item>\n\n</ion-list>\n\n\n\n'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\NODE_Baitap\node-news\using-component\src\components\popover-card\popover-card.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
    ], PopoverCard);
    return PopoverCard;
}());

//# sourceMappingURL=popover-card.js.map

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 206:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 206;

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialcardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_apiAuthService__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocialcardPage = /** @class */ (function () {
    function SocialcardPage(apiAuth, navCtrl, navParams) {
        this.apiAuth = apiAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dynamicCards = {
            items: []
        };
    }
    SocialcardPage.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.dynamicCards.items);
        }, 2000);
        this.apiAuth.getDynamicUrl('assets/data/news-info.json')
            .then(function (res) {
            _this.dynamicCards.items = res;
        })
            .catch(function (err) { return console.log(err); });
    };
    SocialcardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-socialcard',template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\NODE_Baitap\node-news\using-component\src\pages\socialcard\socialcard.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>socialcard</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngFor="let it of dynamicCards?.items">\n    <social-card [resultData]="it.results" [actionData]="it.actions" (onClickSub)="onClickAction($event,it.id)">\n    </social-card>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\NODE_Baitap\node-news\using-component\src\pages\socialcard\socialcard.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_apiAuthService__["a" /* ApiAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_apiAuthService__["a" /* ApiAuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]) === "function" && _c || Object])
    ], SocialcardPage);
    return SocialcardPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=socialcard.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var token;
var RequestInterceptor = /** @class */ (function () {
    function RequestInterceptor() {
    }
    RequestInterceptor.prototype.intercept = function (request, next) {
        if (token) {
            //console.log('request with token interceptor!')
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + token
                }
            });
        }
        return next.handle(request);
    };
    RequestInterceptor.prototype.setRequestToken = function (tk) {
        if (tk) {
            token = tk;
        }
        else {
            token = '';
        }
    };
    RequestInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], RequestInterceptor);
    return RequestInterceptor;
}());

//# sourceMappingURL=requestInterceptor.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(350);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_apiAuthService__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_time_ago_pipe__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__interceptors_requestInterceptor__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_news_home_news__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipes_linkify__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pipes_new_line__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_content_card_content_card__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_in_app_browser_ngx__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_image_card_image_card__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_user_card_user_card__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_usercard_usercard__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_popover_card_popover_card__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_socialcard_socialcard__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_social_card_social_card__ = __webpack_require__(685);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_news_home_news__["a" /* HomeNewsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pipes_new_line__["a" /* NewlinePipe */],
                __WEBPACK_IMPORTED_MODULE_12__pipes_linkify__["a" /* LinkifyPipe */],
                __WEBPACK_IMPORTED_MODULE_14__components_content_card_content_card__["a" /* ContentCard */],
                __WEBPACK_IMPORTED_MODULE_16__components_image_card_image_card__["a" /* ImageCard */],
                __WEBPACK_IMPORTED_MODULE_17__components_user_card_user_card__["a" /* UserCard */],
                __WEBPACK_IMPORTED_MODULE_18__pages_usercard_usercard__["a" /* UsercardPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_socialcard_socialcard__["a" /* SocialcardPage */],
                __WEBPACK_IMPORTED_MODULE_19__components_popover_card_popover_card__["a" /* PopoverCard */],
                __WEBPACK_IMPORTED_MODULE_21__components_social_card_social_card__["a" /* SocialCard */],
                __WEBPACK_IMPORTED_MODULE_9_time_ago_pipe__["a" /* TimeAgoPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_news_home_news__["a" /* HomeNewsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_usercard_usercard__["a" /* UsercardPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_socialcard_socialcard__["a" /* SocialcardPage */],
                __WEBPACK_IMPORTED_MODULE_19__components_popover_card_popover_card__["a" /* PopoverCard */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__services_apiAuthService__["a" /* ApiAuthService */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_10__interceptors_requestInterceptor__["a" /* RequestInterceptor */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_socialcard_socialcard__ = __webpack_require__(249);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyApp = /** @class */ (function () {
    function MyApp() {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_1__pages_socialcard_socialcard__["a" /* SocialcardPage */]; //UsercardPage //HomeNewsPage;//HomePage;
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\NODE_Baitap\node-news\using-component\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\NODE_Baitap\node-news\using-component\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.ngOnInit = function () {
        this.images = [
            {
                alt: "Tướng Mỹ: Ông Tập đã bội hứa về quân sự hóa Biển Đông",
                src: "https://cdn.tuoitre.vn/zoom/504_315/2019/5/30/xi-jin-ping-1559170103420282059851-crop-1559170108147453943080.jpg"
            },
            {
                alt: "Gian lận thi cử: gia đình bị can nộp lại tiền, gia đình thí sinh chối",
                src: "https://cdn.tuoitre.vn/thumb_w/586/2019/5/30/gian-lan-thi-cu-son-la-ong-yen-15592075121131686156044.png"
            }
        ];
    };
    HomePage.prototype.onClickMedia = function (event) {
        console.log(event);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\NODE_Baitap\node-news\using-component\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <image-card [imageData]="images" (onClickSub)="onClickMedia($event)"></image-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\NODE_Baitap\node-news\using-component\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeNewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_apiAuthService__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser_ngx__ = __webpack_require__(254);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeNewsPage = /** @class */ (function () {
    function HomeNewsPage(apiAuth, inAppBrowser) {
        this.apiAuth = apiAuth;
        this.inAppBrowser = inAppBrowser;
        this.dynamicCards = {
            title: "",
            buttons: [
                { color: "primary", icon: "photos", next: "ADD" }
            ],
            items: []
        };
    }
    HomeNewsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.apiAuth.getDynamicUrl('assets/data/url-info.json')
            .then(function (res) {
            _this.dynamicCards.items = res;
        })
            .catch(function (err) { return console.log(err); });
    };
    HomeNewsPage.prototype.onClickImage = function (event) {
        console.log('image', event);
        //đọc các hình ở link callback, popup cửa sổ hình ảnh lên cho phép comment từng hình???
        // this.modalCtrl
        // .create(ssss, {images:event.original})
        // .present();
    };
    HomeNewsPage.prototype.onClickOpenLink = function (event) {
        console.log('content', event);
        //popup inappBrowser link
        if (event.link) {
            var target = "_blank"; //mo trong inappbrowser
            var options = "hidden=no, toolbar=yes, location=yes, presentationstyle=fullscreen, clearcache=yes, clearsessioncache=yes";
            this.inAppBrowser.create(event.link, target, options);
        }
    };
    HomeNewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-news',template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\NODE_Baitap\node-news\using-component\src\pages\home-news\home-news.html"*/'<ion-header>\n\n\n\n</ion-header>\n\n\n\n<ion-content no-padding>\n\n    <div *ngFor="let it of dynamicCards?.items">\n\n        <div *ngIf="it.content">\n\n            <content-card [contentData]="it.content" [showDetails]="it.show_detail"\n\n                (onClickSub)="onClickOpenLink($event)" (onClickImage)="onClickImage($event)"></content-card>\n\n        </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\NODE_Baitap\node-news\using-component\src\pages\home-news\home-news.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_apiAuthService__["a" /* ApiAuthService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */]])
    ], HomeNewsPage);
    return HomeNewsPage;
}());

//# sourceMappingURL=home-news.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiAuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interceptors_requestInterceptor__ = __webpack_require__(253);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiAuthService = /** @class */ (function () {
    function ApiAuthService(httpClient, reqInterceptor) {
        this.httpClient = httpClient;
        this.reqInterceptor = reqInterceptor;
        this.createObjectKey = function (obj, key, value) {
            Object.defineProperty(obj, key, { value: value, writable: true, enumerable: true, configurable: true });
            obj.length = obj.length ? obj.length + 1 : 1;
            return obj;
        };
        this.deleteObjectKey = function (obj, key) {
            if (delete obj[key])
                obj.length = obj.length ? obj.length - 1 : undefined;
            return obj;
        };
    }
    /**
     * get url => req.paramS
     * @param url
     * @param token
     * @param options
     */
    ApiAuthService.prototype.getDynamicUrl = function (url, token, options) {
        //lay token cua phien xac thuc
        this.reqInterceptor.setRequestToken(token && token.length ? token : token && this.tokenObject ? this.tokenObject.token : '');
        return this.httpClient.get(url, options)
            .toPromise()
            .then(function (data) {
            var rtn;
            rtn = data;
            return rtn;
        });
    };
    /**
     * post json_data => req.json_data
     * @param url
     * @param json_data
     * @param token
     */
    ApiAuthService.prototype.postDynamicForm = function (url, json_data, token) {
        //lay token cua phien xac thuc
        this.reqInterceptor.setRequestToken(token && token.length ? token : token && this.tokenObject ? this.tokenObject.token : '');
        return this.httpClient.post(url, JSON.stringify(json_data))
            .toPromise()
            .then(function (data) {
            var rtn;
            rtn = data;
            return rtn;
        });
    };
    ApiAuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__interceptors_requestInterceptor__["a" /* RequestInterceptor */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__interceptors_requestInterceptor__["a" /* RequestInterceptor */]) === "function" && _b || Object])
    ], ApiAuthService);
    return ApiAuthService;
    var _a, _b;
}());

//# sourceMappingURL=apiAuthService.js.map

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkifyPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_apiAuthService__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


/*
 * Converts linkify into html domain/http/ftp/email/phone
*/
var LinkifyPipe = /** @class */ (function () {
    function LinkifyPipe(apiAuth) {
        this.apiAuth = apiAuth;
    }
    LinkifyPipe.prototype.transform = function (value, isUrl) {
        var _this = this;
        var valueLinkify = value;
        var links = [];
        //URLs starting with http://, https://, or ftp://    
        valueLinkify = valueLinkify.replace(/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim, function (url) {
            links.push(url);
            return "<a href='" + url + "' target='_blank'>" + url + "</a>";
        });
        //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
        valueLinkify = valueLinkify.replace(/([ ])([\w-]+\.[\S]+(\b|$))/gim, function (url) {
            links.push('http://' + url.trim());
            return " <a href='http://" + url.trim() + "' target='_blank'>" + url.trim() + "</a>";
        });
        //Change email addresses to mailto:: links.
        valueLinkify = valueLinkify.replace(/(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim, function (url) {
            links.push('mailto:' + url);
            return "<a href='mailto:" + url + "' target='_blank'>" + url + "</a>";
        });
        if (isUrl === 'links')
            return links; //array off urls
        if (isUrl === 'urlInfos') {
            var urlInfos_1 = [];
            links.forEach(function (el) { return __awaiter(_this, void 0, void 0, function () {
                var urlInfo, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.apiAuth.getDynamicUrl("https://c3.mobifone.vn/api/ext-public/shot-info-url?url=" + el)];
                        case 1:
                            urlInfo = _b.sent();
                            urlInfos_1.push(urlInfo);
                            return [3 /*break*/, 3];
                        case 2:
                            _a = _b.sent();
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            return urlInfos_1;
        }
        return valueLinkify;
    };
    LinkifyPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({ name: 'linkify' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_apiAuthService__["a" /* ApiAuthService */]])
    ], LinkifyPipe);
    return LinkifyPipe;
}());

//# sourceMappingURL=linkify.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewlinePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
 * Converts newlines into html breaks
*/
var NewlinePipe = /** @class */ (function () {
    function NewlinePipe() {
    }
    NewlinePipe.prototype.transform = function (value, args) {
        if (value)
            value = value.replace(/(?:\r\n|\r|\n)/g, '<br />');
        return value;
    };
    NewlinePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({ name: 'newline' })
    ], NewlinePipe);
    return NewlinePipe;
}());

//# sourceMappingURL=new-line.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentCard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * card hien thi thong tin text noi dung
 * đưa vào text có chứa nội dung và url,
 * card này sẽ hiển thị nội dung có link cho phép kích vào
 * hiển thị các ảnh lấy được trong các link để hiển thị trong khung ảnh
 * đồng thời hiển thị các link bên dưới của trang cho phép gọi inappbrowser
 */

var ContentCard = /** @class */ (function () {
    function ContentCard() {
        //sự kiện sinh ra truyền giá trị con cho cấp cha 1 cấp
        this.onClickSub = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onClickImage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.maxCharacter = 500; //số ký tự một lần hiển thị ra
    }
    //khi bấm vào phần tử item (toàn bộ dòng - thuộc tích click=true) 
    //thì sự kiện này được sinh ra
    ContentCard.prototype.onClickItem = function (link) {
        this.onClickSub.emit({ link: link });
    };
    ContentCard.prototype.onClickMedia = function (event) {
        this.onClickImage.emit(event);
    };
    ContentCard.prototype.readMore = function (obj) {
        obj.is_readmore = (!obj.is_readmore ? this.maxCharacter : obj.is_readmore) + this.maxCharacter;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ContentCard.prototype, "contentData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ContentCard.prototype, "showDetails", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ContentCard.prototype, "callback", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], ContentCard.prototype, "onClickSub", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], ContentCard.prototype, "onClickImage", void 0);
    ContentCard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'content-card',template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\NODE_Baitap\node-news\using-component\src\components\content-card\content-card.html"*/'<div *ngIf="contentData">\n\n    <!-- Hiển thị nội dung chuyển đổi \n, url ra link, url.image ra thẻ ảnh??? \n\n      chỉ hiển thị short nội dung, còn lại nút more... -->\n\n    <p text-wrap [innerHtml]="contentData | newline | linkify"></p>\n\n\n\n    <!-- Hiển thị một ảnh đại diện trong các link lấy được\n\n      gồm ảnh, domain có liên kết với tin url gốc + title của link\n\n      như short detail trong link share của facebook\n\n      Một ảnh đại diện, một domain và một title\n\n      Toàn bộ nội dung hiển thị đó được gắng trong một thẻ card để bấm vào là gọi inapp\n\n   -->\n\n    <div *ngIf="!showDetails && (contentData | linkify:\'urlInfos\')?.length>0">\n\n        <div *ngFor="let urlInfo of contentData | linkify:\'urlInfos\'; let idx = index;">\n\n            <div *ngIf="idx===0">\n\n                <ion-row no-padding>\n\n                    <ion-col no-padding col-12 col-xl-8 col-lg-6 col-md-6 col-sm-6>\n\n                        <strong\n\n                            *ngIf="urlInfo.content||(urlInfo.images&&urlInfo.images.length>0)">{{urlInfo.hostname}}</strong>\n\n                        <p text-wrap><strong\n\n                                *ngIf="urlInfo.title&&(urlInfo.content||(urlInfo.images&&urlInfo.images.length>0))">{{urlInfo.title}}</strong>\n\n                        </p>\n\n                        <p text-wrap kkk\n\n                            [innerHtml]="(urlInfo.content | newline | slice:0:(!urlInfo.is_readmore?maxCharacter:urlInfo.is_readmore)) + ((urlInfo.content | newline)?.length>(!urlInfo.is_readmore?maxCharacter:urlInfo.is_readmore)?\'•••\':\'\')">\n\n                        </p>\n\n                        <div\n\n                            *ngIf="(urlInfo.content | newline)?.length>(!urlInfo.is_readmore?maxCharacter:urlInfo.is_readmore)">\n\n                            <ion-note style="color: rgb(36, 93, 250)" tappable (click)="readMore(urlInfo)">đọc thêm\n\n                            </ion-note>\n\n                        </div>\n\n                    </ion-col>\n\n                    <ion-col no-padding *ngIf="urlInfo.images&&urlInfo.images.length>0" col-12 col-xl-4 col-lg-6\n\n                        col-md-6 col-sm-6 class="background-height">\n\n                        <image-card [imageData]="urlInfo.images" (onClickSub)="onClickMedia($event)"></image-card>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n        </div>\n\n    </div>\n\n\n\n\n\n    <!-- Hiển thị nội dung chi tiết của các link lấy được nếu cho phép showDetails show more??...-->\n\n    <div *ngIf="showDetails && (contentData | linkify:\'urlInfos\')?.length>0">\n\n        <div *ngFor="let urlInfo of contentData | linkify:\'urlInfos\'; let idx = index;">\n\n            <ion-row no-padding>\n\n                <ion-col no-padding col-12 col-xl-8 col-lg-6 col-md-6 col-sm-6>\n\n                    <strong\n\n                        *ngIf="urlInfo.content||(urlInfo.images&&urlInfo.images.length>0)">{{urlInfo.hostname}}</strong>\n\n                    <p text-wrap><strong\n\n                            *ngIf="urlInfo.title&&(urlInfo.content||(urlInfo.images&&urlInfo.images.length>0))">{{urlInfo.title}}</strong>\n\n                    </p>\n\n                    <p text-wrap\n\n                        [innerHtml]="(urlInfo.content | newline | slice:0:(!urlInfo.is_readmore?maxCharacter:urlInfo.is_readmore)) + ((urlInfo.content | newline)?.length>(!urlInfo.is_readmore?maxCharacter:urlInfo.is_readmore)?\'•••\':\'\')">\n\n                    </p>\n\n                    <div\n\n                        *ngIf="(urlInfo.content | newline)?.length>(!urlInfo.is_readmore?maxCharacter:urlInfo.is_readmore)">\n\n                        <ion-note style="color: rgb(36, 93, 250)" tappable (click)="readMore(urlInfo)">đọc thêm\n\n                        </ion-note>\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col no-padding *ngIf="urlInfo.images&&urlInfo.images.length>0" col-12 col-xl-4 col-lg-6 col-md-6\n\n                    col-sm-6 class="background-height">\n\n                    <image-card [imageData]="urlInfo.images" (onClickSub)="onClickMedia($event)"></image-card>\n\n                </ion-col>\n\n            </ion-row>\n\n        </div>\n\n    </div>\n\n\n\n    <!-- Hiển thị các link cho nút bấm inappBrowser sử dụng trong app trên ios và android -->\n\n    <ion-buttons *ngIf="(contentData | linkify:\'links\')?.length>0">\n\n        <button *ngFor="let url of contentData | linkify:\'links\'; let idx = index;" ion-button round outline\n\n            (click)="onClickItem(url)">\n\n            Xem link {{(idx + 1)}}\n\n        </button>\n\n    </ion-buttons>\n\n\n\n</div>'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\NODE_Baitap\node-news\using-component\src\components\content-card\content-card.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ContentCard);
    return ContentCard;
}());

//# sourceMappingURL=content-card.js.map

/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageCard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * card hien thi thong tin danh muc anh
 */

var ImageCard = /** @class */ (function () {
    function ImageCard() {
        //sự kiện sinh ra truyền giá trị con cho cấp cha 1 cấp
        this.onClickSub = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    ImageCard.prototype.onClickMedia = function (idx, data) {
        if (this.callback)
            this.callback(idx, data);
        this.onClickSub.emit({ index: idx, original: data });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ImageCard.prototype, "imageData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ImageCard.prototype, "callback", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], ImageCard.prototype, "onClickSub", void 0);
    ImageCard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'image-card',template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\NODE_Baitap\node-news\using-component\src\components\image-card\image-card.html"*/'<div *ngIf="imageData" class="padding-col">\n\n\n\n  <!-- 1 pics -->\n\n  <ion-row *ngIf="imageData.length===1">\n\n      <ion-col class="padding-col card-background-page" col-12 (click)="onClickMedia(0,imageData)">\n\n          <div class="image-height-1" [style.background-image]="\'url(\'+imageData[0].src+\')\'"></div>\n\n          <div class="card-title" *ngIf="imageData[0].title">{{imageData[0].title}}</div>\n\n          <div class="card-subtitle" *ngIf="imageData[0].file_date">{{imageData[0].file_date | date }}</div>\n\n      </ion-col>\n\n  </ion-row>\n\n\n\n  <!-- 2 pics -->\n\n  <ion-row *ngIf="imageData.length===2">\n\n      <ion-col class="padding-col card-background-page" col-6 (click)="onClickMedia(0,imageData)">\n\n          <div class="image-height-1" [style.background-image]="\'url(\'+imageData[0].src+\')\'"></div>\n\n          <div class="card-title" *ngIf="imageData[0].title">{{imageData[0].title}}</div>\n\n          <div class="card-subtitle" *ngIf="imageData[0].file_date">{{imageData[0].file_date | date}}</div>\n\n      </ion-col>\n\n      <ion-col class="padding-col card-background-page" col-6 (click)="onClickMedia(1,imageData)">\n\n          <div class="image-height-1" [style.background-image]="\'url(\'+imageData[1].src+\')\'"></div>\n\n          <div class="card-title" *ngIf="imageData[1].title">{{imageData[1].title}}</div>\n\n          <div class="card-subtitle" *ngIf="imageData[1].file_date">{{imageData[1].file_date | date}}</div>\n\n      </ion-col>\n\n  </ion-row>\n\n\n\n  <!-- 3 pics -->\n\n  <ion-row *ngIf="imageData.length===3">\n\n      <ion-col class="padding-col card-background-page" col-12 (click)="onClickMedia(0,imageData)">\n\n          <div class="image-height-2" [style.background-image]="\'url(\'+imageData[0].src+\')\'"></div>\n\n          <div class="card-title" *ngIf="imageData[0].title">{{imageData[0].title}}</div>\n\n          <div class="card-subtitle" *ngIf="imageData[0].file_date">{{imageData[0].file_date | date}}</div>\n\n      </ion-col>\n\n      <ion-col class="padding-col card-background-page" col-6 (click)="onClickMedia(1,imageData)">\n\n          <div class="image-height-3" [style.background-image]="\'url(\'+imageData[1].src+\')\'"></div>\n\n      </ion-col>\n\n      <ion-col class="padding-col card-background-page" col-6 (click)="onClickMedia(2,imageData)">\n\n          <div class="image-height-3" [style.background-image]="\'url(\'+imageData[2].src+\')\'"></div>\n\n      </ion-col>\n\n  </ion-row>\n\n\n\n  <!-- 4 pics -->\n\n  <ion-row *ngIf="imageData.length===4">\n\n      <ion-col class="padding-col card-background-page" col-6 (click)="onClickMedia(0,imageData)">\n\n          <div class="image-height-4" [style.background-image]="\'url(\'+imageData[0].src+\')\'"></div>\n\n          <div class="card-title" *ngIf="imageData[0].title">{{imageData[0].title}}</div>\n\n          <div class="card-subtitle" *ngIf="imageData[0].file_date">{{imageData[0].file_date | date}}</div>\n\n      </ion-col>\n\n      <ion-col class="padding-col card-background-page" col-6 (click)="onClickMedia(1,imageData)">\n\n          <div class="image-height-4" [style.background-image]="\'url(\'+imageData[1].src+\')\'"></div>\n\n          <div class="card-title" *ngIf="imageData[1].title">{{imageData[1].title}}</div>\n\n          <div class="card-subtitle" *ngIf="imageData[1].file_date">{{imageData[1].file_date | date}}</div>\n\n      </ion-col>\n\n      <ion-col class="padding-col card-background-page" col-6 (click)="onClickMedia(2,imageData)">\n\n          <div class="image-height-4" [style.background-image]="\'url(\'+imageData[2].src+\')\'"></div>\n\n      </ion-col>\n\n      <ion-col class="padding-col card-background-page" col-6 (click)="onClickMedia(3,imageData)">\n\n          <div class="image-height-4" [style.background-image]="\'url(\'+imageData[3].src+\')\'"></div>\n\n      </ion-col>\n\n  </ion-row>\n\n\n\n  <!-- 5+ pics -->\n\n  <ion-row *ngIf="imageData.length>=5">\n\n      <ion-col class="padding-col card-background-page" col-6 (click)="onClickMedia(0,imageData)">\n\n          <div class="image-height-2" [style.background-image]="\'url(\'+imageData[0]?.src+\')\'"></div>\n\n          <div class="card-title">{{imageData[0].title}}</div>\n\n          <div class="card-subtitle">{{imageData[0].file_date | date}}</div>\n\n      </ion-col>\n\n      <ion-col class="padding-col card-background-page" col-6 (click)="onClickMedia(1,imageData)">\n\n          <div class="image-height-2" [style.background-image]="\'url(\'+imageData[1].src+\')\'"></div>\n\n          <div class="card-title" *ngIf="imageData[1].title">{{imageData[1].title}}</div>\n\n          <div class="card-subtitle" *ngIf="imageData[1].file_date">{{imageData[1].file_date | date}}</div>\n\n      </ion-col>\n\n      <ion-col class="padding-col card-background-page" col-4 (click)="onClickMedia(2,imageData)">\n\n          <div class="image-height-3" [style.background-image]="\'url(\'+imageData[2].src+\')\'"></div>\n\n      </ion-col>\n\n      <ion-col class="padding-col card-background-page" col-4 (click)="onClickMedia(3,imageData)">\n\n          <div class="image-height-3" [style.background-image]="\'url(\'+imageData[3].src+\')\'"></div>\n\n      </ion-col>\n\n      <ion-col class="padding-col card-background-page" col-4 (click)="onClickMedia(4,imageData)">\n\n          <div class="image-height-3" [style.background-image]="\'url(\'+imageData[4].src+\')\'"></div>\n\n          <div class="card-more" *ngIf="imageData.length>5">+{{(imageData.length-5)}}</div>\n\n      </ion-col>\n\n  </ion-row>\n\n\n\n</div>'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\NODE_Baitap\node-news\using-component\src\components\image-card\image-card.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ImageCard);
    return ImageCard;
}());

//# sourceMappingURL=image-card.js.map

/***/ }),

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popover_card_popover_card__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * card hien thi thong tin text noi dung
 * đưa vào text có chứa nội dung và url,
 * card này sẽ hiển thị nội dung có link cho phép kích vào
 * hiển thị các ảnh lấy được trong các link để hiển thị trong khung ảnh
 * đồng thời hiển thị các link bên dưới của trang cho phép gọi inappbrowser
 */



var UserCard = /** @class */ (function () {
    function UserCard(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
        //sự kiện sinh ra truyền giá trị con cho cấp cha 1 cấp
        this.onClickSub = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.statusIcon = {
            0: "ios-lock",
            1: "md-globe",
            2: "ios-contacts",
            3: "ios-people-outline",
        };
    }
    UserCard.prototype.ngOnInit = function () { };
    //sự kiện này được sinh ra khi bấm nút more
    //hiển thị popup menu tùy chọn cho các lệnh tùy vào tin của user hay của người khác
    UserCard.prototype.onClickMore = function (ev, isPrivate, icon) {
        //neu tin cua user thi hien thi menu:
        //chinh sua nguoi doc tin (status) --list
        //xoa bo tin nay
        //chinh sua noi dung cua tin
        var _this = this;
        //neu tin cua user khac:
        //block khong xem tin nay nua
        //bao cao spam
        var menu;
        if (isPrivate) {
            menu =
                [
                    {
                        icon: icon,
                        color: "primary",
                        name: "Sửa trạng thái tin",
                        value: "edit-status"
                    },
                    {
                        icon: "trash",
                        color: "danger",
                        name: "Xóa bỏ tin này",
                        value: "delete"
                    },
                    {
                        icon: "md-create",
                        color: "secondary",
                        name: "Chỉnh sửa tin này",
                        value: "edit-content"
                    }
                ];
        }
        else {
            menu =
                [
                    {
                        icon: "md-eye-off",
                        color: "secondary",
                        name: "Block tin này",
                        value: "block"
                    },
                    {
                        icon: "md-megaphone",
                        color: "danger",
                        name: "Báo cáo Spam",
                        value: "report"
                    }
                ];
        }
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_1__popover_card_popover_card__["a" /* PopoverCard */], { form: {
                type: "item",
                menu: menu
            } });
        popover.present({ ev: ev }); //su kien lay toa do hien thi menu
        //this.onClickSub.emit(data);
        popover.onDidDismiss(function (data) {
            if (data) {
                //console.log('Nhận dữ liệu chọn',data);
                _this.onClickSub.emit({ command: data });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], UserCard.prototype, "userData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], UserCard.prototype, "ownerData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], UserCard.prototype, "contactData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], UserCard.prototype, "onClickSub", void 0);
    UserCard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'user-card',template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\NODE_Baitap\node-news\using-component\src\components\user-card\user-card.html"*/'<!-- userData cần phải chứa .username == username, .id, .time là thời gian của tin tức -->\n\n<ion-item  *ngIf="userData">\n\n    <!-- Cần truyền thêm ownerData = userInfo là username được login vào -->\n\n    <ion-avatar item-start *ngIf="ownerData?.username===userData.username">\n\n        <img *ngIf="ownerData?.data?.image" [src]="ownerData?.data?.image">\n\n        <img *ngIf="!(ownerData?.data?.image)" src="assets/imgs/no-image-go.jpg">\n\n    </ion-avatar>\n\n    <ion-title *ngIf="ownerData?.username===userData.username">{{ownerData?.data?.fullname?ownerData?.data?.fullname:ownerData?.username}}</ion-title>\n\n    <!-- Cần phải truyền cho form danh danh bạ chứa thông tin người dùng -->\n\n    <ion-avatar item-start *ngIf="ownerData?.username!==userData.username">\n\n        <img *ngIf="contactData[userData.username]&&contactData[userData.username].avatar" [src]="contactData[userData.username].avatar">\n\n        <img *ngIf="!(contactData[userData.username]&&contactData[userData.username].avatar)" src="assets/imgs/no-image-go.jpg">\n\n    </ion-avatar>\n\n    <ion-title *ngIf="ownerData?.username!==userData.username">{{contactData[userData.username]&&contactData[userData.username].fullname?contactData[userData.username].fullname:userData.username}}</ion-title>\n\n    <!-- Tin tức được post lên thời gian nào -->\n\n    <ion-note style="color: gray">\n\n        {{userData.time | timeAgo}}\n\n        <ion-icon name="{{(statusIcon[userData.status]?statusIcon[userData.status]:\'md-globe\')}}"></ion-icon>\n\n    </ion-note>\n\n    <!-- nút more infor sẽ hiển thị thông tin của username này lên, bằng backgroud, ảnh đại diện, tên hiển thị -->\n\n    <button item-end icon-only ion-button clear small color="primary" (click)="onClickMore($event,ownerData?.username===userData.username,(statusIcon[userData.status]?statusIcon[userData.status]:\'md-globe\'))">\n\n        <ion-icon name="more"></ion-icon>\n\n    </button>\n\n</ion-item>'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\NODE_Baitap\node-news\using-component\src\components\user-card\user-card.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* PopoverController */]])
    ], UserCard);
    return UserCard;
}());

//# sourceMappingURL=user-card.js.map

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsercardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_apiAuthService__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsercardPage = /** @class */ (function () {
    function UsercardPage(apiAuth, navCtrl, navParams) {
        this.apiAuth = apiAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dynamicCards = {
            items: []
        };
    }
    UsercardPage.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.dynamicCards.items);
        }, 2000);
        this.apiAuth.getDynamicUrl('assets/data/news-info.json')
            .then(function (res) {
            _this.dynamicCards.items = res;
        })
            .catch(function (err) { return console.log(err); });
        this.contacts = { 903500888: { fullname: "Cuong Test", avatar: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAAIHElEQVRIS1WW2Y9lVRXGf/vMw52qbk1d1d0FVNMj1baQpkURhSeC0fjCq4QHTRz+CBPjo4IREyESAhqjvvkgMRo0giIapBEa6G6qu6u65vnWnc+w9zZ7V6Px4eSec+7Ze6+1vrW+7xNvXP5Yu66D45hLUOY5QRThui6OEIeXIwCBUgohzL223ysNWmuyQqKURsrD/7VWaKXJiwIpS1zHBaHteq0hzwu7DiEQr77+dx34IUlaQSlJa2sdE1BSrdmFcZySpFVzEsJxMMcrqXA9x8SBMs9aU5TKPB6+U4q8lKytriJlRqMxRhxHNsgsz/6bjEYgXv7Vb3TZG9AYm+LaR5fRQuJ5EbIsiJOIJEq4eOkRHNcjSmJMCKYIruuhzY3W9mCTkNmwVMoGs7fXshm297cYm5wxoZFnua2c1IcVK0uNePGXv9CJm5APu9xeuUW73cEPA7SUxElMvdbgvpNnbfaB7xNVqsRphaRaxfM8u5E5XCmBNMGYEpeSvCztmu21ZdLGuIXGQgiUUlIUJVJpxAuvvKRH0iZxmrCxfAsHgx+MjNQYaU5ZPLdu30CYPlAO9VpKbWKS5tRRvCBEagfPD1DaYA+l0hRFYbPP8pzlxQWOHJuzFTC4H/aHskGUpmee/fEzOu90qdcM5qbhPKTwiAOPwFEEvkevN0BrSRCmGOirlSrJSJPa2BRxkpIXJdlwSNoYo5DKZnrYF5KdzQ1qzfHD3rFNaIA6DERKifjBj36oIy/EdRyKYZ+yLKnEPr4f42qF7zn4vkteSDxX4AqXMArtpIRRgnYCRBBTq9fw0gZZqVA45FLbPYfdfZJKw2ZrukRJg7+k0+3SHwxNAM/q2bl5ZFkybG3S21unUAJVFlTjCCeI6XQO8NAMS8nESJXQ9xGuSxTHRHHF9oUX1ckHbXrtFkGlgePHeGFAIUsaY9NIaSpS0O/37RgKx8X1PMSzz/1Ez1/8AlnvgP7BNjtra7Q7bVwHVJ7juT5JNaG7v0s2zMilZLRepVGr2qYMwpgoCnDdgNb+HgPDI55HEEaYlnOTlPrkMbywavsgDEPknR4wv+K555/Xd82dYdhrM+j1KfKczt4mrb1d+3He6+J7goWbi1QrCW4QceLeU9QTMykFQjikacVCtLmxzqDU9HtdojCw77005b6LD5Eko0hlyn+IfWGuUiFeeOllfffJefqdlp3vRn2U9u46ef+Af/3zLYrBkLIo2NjeYnVji/nTZyzeURQS+x5pGpOmCbV6nd1Wh5sraxbnMKky0qhx6tynCBOfOK4gnJg8zymVmQBN1u8ifvrSz/Xdp8/bLjXNJvOCQXuP9dUlbly/buf46MQo3X6f3d0DjkyMUUkTqtWqLXOrtUeWFSgBcRRyMMjpZ4qHHvkiUejheiH/fvsNzl84wfTUMVa32kQyt1VVhiuee/EVXR2bJlIdktFjBEGA62hWbl7j6gdX8FTGlXffYXN7x47VxfPzzM7M4AeeHbWDdoduf4DrB4RJxLHjdzGUmjPzD1hCeu33rxK4faTMaY5P0el02Nvept3uMSxyxPe+/13dGG3gahgdG+XGrUUi32N5dZMAj8HggBsLH7OytkGtVqOapJw7eYKRkRG297bY2W9TqTZYvL3M+QvnyUqXlcWrzNcc/rLSJXALHn9sjl//9gqOWyHv7RJGMe3OwIqc+M63v6HrExPEAm5tLjCeNKnWKrz+5l+5/+wlPrj+Lh9+tGDVzdDu9PQUnzs6hjxylHfeu0Je5MweP44XROTDIbN3z9Fq7ZAVmq3tXaqp5JtPTfHMz1pMHrmHlaUlJkZillY2DR0hHvrsBe14gv39A7IiIwh8up0hSgqefurr/OnPv2N3Z4+yLHBwSNI6QilmT9xDrRKxs7vDeLNBmkTkWcns7DRLyysU0siug+eWfOXzD/PO4jJzJ06yuLSO48C9986RZTniyaee0LXRcd76w5v4UWhn2kyD74UY+heGjhEEUlOv1Lm2vm1ZrNGoc+bMKdLIoZBGiIRlymyYk6YpSWxISNHvD23DVdKUbrfPtYWlO97DOaTlr33rSZ0mdd7649+YnJjixMnj6KKks39AY7yJIxWeUBBERoO5/N5VFm+tcunSA9RqRhHdO4qoLbPJ0hzaZ5gVlnh8Q1ZBYJXz0KwcGhNzWUPy1ae/rEcrDa68/g88L+D45Djv31ymOTbOg595EN9zbUUM4TjAQa/H5evbXDh9DJX3rAHxA99uXNxxRsZNmeeylMjSEE5pNeYTw2Kwt47ImKLHv/SEXr35MZ1OGwlkWUmSJjz26KPU6xVLt0bXjZiEQWAXvvbm+zx4/1kcmVlWMxGajjaNajR+MMit5DquYwP/JGNzsHFTZo2V41Iizn/6jD4y3aTXGrJ4YxHhR9w11eDSpVM06imtXoTGR2roD/o4wuXy1ducvmcG39HWF9pxMuU0ZksYbCHqfIiUBZ7IyfMSJUv2wnOMsk6sdlniHMrEPj01rpWWOMKzBsM4lZnJMc7Nn6NWTakkgrFaThAIbm5UGAwzFpeWaY6OWK2wpTRCax0qaAOXeaFym6HZz0yQ+bPUPmWZIbS099YRVSuJNqZjZnKUudkxDlqSkZkjTBrX06xaZauHG+z3UvbanvV8FltZWiZUUlspNyxpTIY53pT/E1gOvZ+0GmDEyHxinZENWiEevnBWNyspSRgQxjHJaBORJkxNNPB8H1f3mG6s8fbCFGbf/8NPCGs0zWEm0yIv/oe3ddG2FvZAq4Dmm9JYcouVHcf/AJ/7gQ3Eu83LAAAAAElFTkSuQmCC" } };
        this.userInfo = { username: "766777123", data: { fullname: "Nguyen Van Dinh", image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEA0lEQVRYR+2Wa1DUVRjGf2e5LIiLLigYlxC1HDSwoFEZxy4DFB+sD32IDzVNEYxOM02GWkyNQ30oyJmiqUxKMf1AJtk46mjNlEpeUsrABCOMUO7FRRkWcWGXPc05fzbI2OXmjH3g7M7O7tlz3vOc532f5/2L9NIUyW0cYhrANAP/ewYkEvVWH0IIhn+PIh2h5gTIIWEJgXp5G2OqQOpgbqV6DzZ80PB6BXpSAIyDIcA3gPvCkkmYk0ig30w95ymkZgeB3dlHdVclFX+doc9xXW/wxIRHBlxIQsyh5K7IJyIoBpccpNfRQ7D/bJ2K0YYCMOC0MyhdBPoF0dHXRn55Lu19bZiEadQ9XlOQl1zIQmuczmlZ0zcUVxVSnH4Ifx+zURNDXLjZQgg2lWXqW29N/QL1u9XWQO7JdSPS+G8cHgEkhq9kfWKeDqKYPVJfyue12yl+5CBm3wCEZnuICSmR+rvkdPNR7M4bpMSsMXIl4dML73Gq5duJMfDMkhdIm/8YZ9pOUFRZgAuVFHVrH2b6W9iWsvcfANfsXeSUPUvyHQ+SnbBBn/vR+XyqOiooSvuSyo6zFJ57c2IAMu95iYei0+kftNNku8zp5mN813iQ11ZsISQwjHlBEW51MiidHG88zLK5y7EGhOBwOWntbaK1t5HVUWlUd1aw5afXJwZgdWQa2Qk5xiYhONpwmF3VH7Dj0QOYdQ1Al70Tp2uA8BkRRj0IyaayLGyOHrallhp6EZI9NTv4+vJXEwPgZ/Kj4IHtzA2cp1PtdDn0raItse7UUvjzG/Q6bGxe+a4GIAVcaD/HgKuf+8NX6QLo7r/KxrJMPTfa8CrDxdalvJyUh8V/1pDClSBc+maH6vdS+ttOHXPNwgwyFj8HwqSL0/AD6HNe5+Pz7/BLezliMjJUQWaZrTwdt5aY4EX4mEz0DPSwr3aXzqs7qEu6uGt2HE8tWUewBitptl2hpOYTOm+0T84J3btUMGWKhuCGLVbiwiR89KwyqZudzlDpLegF6lBFuuFj4+sFRsNSqG8BAOVySsufVX/Ij3+e9Eqn+08f4UtR2j7eOruRKz11U0yBlGTEPU9SWDKvfJ8NDCKGqP9PZOWIwNplG4gOXsDmUy96tGD33rHbMRKrOZTCh3ez//cSDtTt8diMlFsq/8iKX8/b5a9y6epFj2snBEAtXhp6L7nLCzjWeIT9dSV093fpmtStQsIMPwuPL3qS9PlPsLP6fU40G94/5QeSkWqIDIomKz6HBda7qemsosH2B0qCUZYY4uck0WJrYPevW7l07eKYB4+bgZEA9I2kJMoSy6rIVO4MjtVe0NLbwA8tx6nvrjWWe3kAubluxqyBcZX9FBZNA5hm4LYz8DdKfcmwal+kKAAAAABJRU5ErkJggg==" } };
    };
    UsercardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-usercard',template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\NODE_Baitap\node-news\using-component\src\pages\usercard\usercard.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>usercard</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngFor="let it of dynamicCards?.items">\n    <user-card [userData]="it" [ownerData]="userInfo" [contactData]="contacts" (onClickSub)="onClickMore($event,it.id)">\n    </user-card>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\NODE_Baitap\node-news\using-component\src\pages\usercard\usercard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_apiAuthService__["a" /* ApiAuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], UsercardPage);
    return UsercardPage;
}());

//# sourceMappingURL=usercard.js.map

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialCard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_apiAuthService__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popover_card_popover_card__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * card hien thi thong tin text noi dung
 * đưa vào text có chứa nội dung và url,
 * card này sẽ hiển thị nội dung có link cho phép kích vào
 * hiển thị các ảnh lấy được trong các link để hiển thị trong khung ảnh
 * đồng thời hiển thị các link bên dưới của trang cho phép gọi inappbrowser
 */




var SocialCard = /** @class */ (function () {
    function SocialCard(apiAuth, popoverCtrl) {
        this.apiAuth = apiAuth;
        this.popoverCtrl = popoverCtrl;
        //sự kiện truyền các hành động thực hiện trên card này ra 
        this.onClickSub = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.iconLikes = {
            like: { name: "Thích", color: "primary", icon: "md-thumbs-up" },
            love: { name: "Đáng yêu", color: "danger", icon: "heart" },
            unlike: { name: "Không thích", color: "dark", icon: "md-thumbs-down" },
            sad: { name: "Buồn", color: "sad", icon: "ios-sad-outline" },
            angery: { name: "Giận sôi", color: "angery", icon: "ios-sad" }
        };
    }
    SocialCard.prototype.ngOnInit = function () {
        if (this.actionData) {
            if (this.actionData["like"])
                this.actionData["like"] = { name: "Thích", unname: "Bỏ thích", color: "gray", icon: "thumbs-up", unicon: "ios-notifications-off-outline", next: "LIKE" };
            if (this.actionData["comment"])
                this.actionData["comment"] = { name: "Góp ý", color: "gray", icon: "chatbubbles", next: "COMMENT" };
            if (this.actionData["share"])
                this.actionData["share"] = { name: "Chia sẻ", color: "gray", icon: "share-alt", next: "SHARE" };
        }
    };
    //khi bấm vào phần tử item (toàn bộ dòng - thuộc tích click=true) 
    //thì sự kiện này được sinh ra
    SocialCard.prototype.onClickActions = function (ev, action) {
        //console.log('action',action);
        if (action.next === "LIKE") {
            if (!this.resultData)
                this.resultData = {};
            if (!this.resultData["likes"])
                Object.defineProperty(this.resultData, "likes", { value: {}, writable: true, enumerable: true, configurable: true });
            if (this.ownerData) {
                if (this.resultData.likes[this.ownerData.username] && this.resultData.likes[this.resultData.likes[this.ownerData.username]]) {
                    //da like truoc do roi, nen bam lan nay la unlike
                    this.resultData.likes[this.resultData.likes[this.ownerData.username]] -= 1;
                    this.apiAuth.deleteObjectKey(this.resultData.likes, this.ownerData.username);
                    this.onClickSub.emit({ action: { next: "LIKE" }, result: this.resultData });
                }
                else {
                    //thuc hien chon lua like neu chap nhan thi them vao
                    this.showRadioLikes(ev, this.ownerData.username);
                }
            }
        }
        else {
            this.onClickSub.emit({ action: action });
        }
    };
    SocialCard.prototype.showRadioLikes = function (ev, username) {
        var _this = this;
        var menu = [];
        for (var key in this.iconLikes) {
            this.iconLikes[key].value = key;
            menu.push(this.iconLikes[key]);
        }
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__popover_card_popover_card__["a" /* PopoverCard */], { form: {
                type: "icon",
                menu: menu
            } });
        popover.present({ ev: ev }); //truyen su kien de menu dung vi tri
        //this.onClickSub.emit(data);
        popover.onDidDismiss(function (data) {
            if (data) {
                _this.apiAuth.createObjectKey(_this.resultData.likes, username, data);
                if (!_this.resultData.likes[data])
                    Object.defineProperty(_this.resultData.likes, data, { value: 0, writable: true, enumerable: true, configurable: true });
                _this.resultData.likes[data] += 1;
                _this.onClickSub.emit({ action: { next: "LIKE" }, result: _this.resultData });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SocialCard.prototype, "ownerData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SocialCard.prototype, "resultData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SocialCard.prototype, "actionData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], SocialCard.prototype, "onClickSub", void 0);
    SocialCard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'social-card',template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\NODE_Baitap\node-news\using-component\src\components\social-card\social-card.html"*/'<!-- Các kết quả ghi nhận được -->\n\n<ion-item no-padding *ngIf="\n\n        (resultData?.likes?.length>0)\n\n        ||\n\n        (resultData?.comments?.length>0)\n\n        ||\n\n        (resultData?.shares?.length>0)">\n\n    <ion-row no-padding>\n\n        <ion-col no-padding align-self-center text-center>\n\n            <div *ngIf="resultData?.likes?.length>0">\n\n                <ion-icon *ngIf="resultData?.likes?.like>0" color="{{iconLikes?.like?.color}}" icon-start clear small name="{{iconLikes?.like?.icon}}"></ion-icon>\n\n                <ion-icon *ngIf="resultData?.likes?.love>0" color="{{iconLikes?.love?.color}}" icon-start clear small name="{{iconLikes?.love?.icon}}"></ion-icon>\n\n                <ion-icon *ngIf="resultData?.likes?.unlike>0" color="{{iconLikes?.unlike?.color}}" icon-start clear small name="{{iconLikes?.unlike?.icon}}"></ion-icon>\n\n                <ion-icon *ngIf="resultData?.likes?.sad>0" color="{{iconLikes?.sad?.color}}" icon-start clear small name="{{iconLikes?.sad?.icon}}"></ion-icon>\n\n                <ion-icon *ngIf="resultData?.likes?.angery>0" color="{{iconLikes?.angery?.color}}" icon-start clear small name="{{iconLikes?.angery?.icon}}"></ion-icon>\n\n                <ion-note *ngIf="resultData?.likes?.length>0">{{resultData?.likes?.length}}</ion-note>\n\n            </div>\n\n        </ion-col>\n\n        <ion-col no-padding  align-self-center text-center>\n\n            <ion-note *ngIf="resultData?.comments?.length>0">{{(resultData?.comments?.length)}} Comments</ion-note>\n\n        </ion-col>\n\n        <ion-col no-padding  align-self-center text-center>\n\n            <ion-note *ngIf="resultData?.shares?.length>0">{{(resultData?.shares?.length)}} Shares</ion-note>\n\n        </ion-col>\n\n    </ion-row>\n\n</ion-item>\n\n\n\n<!-- Các nút lệnh cho phép hành động like, comment, share -->\n\n<ion-item no-padding *ngIf="actionData?.like || actionData?.comment || actionData?.share">\n\n    <ion-row>\n\n        <ion-col no-padding text-center>\n\n            <button *ngIf="actionData?.like" ion-button clear small \n\n            color="{{(resultData?.likes[ownerData?.username]?iconLikes[resultData?.likes[ownerData?.username]].color:actionData?.like?.color)}}" \n\n            (click)="onClickActions($event,actionData?.like)"\n\n                icon-start>\n\n                <ion-icon name="{{(resultData?.likes[ownerData?.username]?iconLikes[resultData?.likes[ownerData?.username]].icon:actionData?.like?.icon)}}"></ion-icon>\n\n                {{(resultData?.likes[ownerData?.username]?iconLikes[resultData?.likes[ownerData?.username]].name:actionData?.like?.name)}}\n\n            </button>\n\n        </ion-col>\n\n        <ion-col no-padding text-center>\n\n            <button *ngIf="actionData?.comment" ion-button clear small color="{{actionData?.comment?.color}}" (click)="onClickActions($event,actionData?.comment)"\n\n                icon-start>\n\n                <ion-icon name=\'{{actionData?.comment?.icon}}\'></ion-icon>\n\n                {{actionData?.comment?.name}}\n\n            </button>\n\n        </ion-col>\n\n        <ion-col no-padding text-center>\n\n            <button *ngIf="actionData?.share" ion-button clear small color="{{actionData?.share?.color}}" (click)="onClickActions($event,actionData?.share)"\n\n                icon-start>\n\n                <ion-icon name=\'{{actionData?.share?.icon}}\'></ion-icon>\n\n                {{actionData?.share?.name}}\n\n            </button>\n\n        </ion-col>\n\n    </ion-row>\n\n</ion-item>'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\NODE_Baitap\node-news\using-component\src\components\social-card\social-card.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_apiAuthService__["a" /* ApiAuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* PopoverController */]])
    ], SocialCard);
    return SocialCard;
}());

//# sourceMappingURL=social-card.js.map

/***/ })

},[345]);
//# sourceMappingURL=main.js.map