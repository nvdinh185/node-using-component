webpackJsonp([0],{

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiAuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interceptors_requestInterceptor__ = __webpack_require__(252);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__interceptors_requestInterceptor__["a" /* RequestInterceptor */]])
    ], ApiAuthService);
    return ApiAuthService;
}());

//# sourceMappingURL=apiAuthService.js.map

/***/ }),

/***/ 161:
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
webpackEmptyAsyncContext.id = 161;

/***/ }),

/***/ 205:
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
webpackEmptyAsyncContext.id = 205;

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsercardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
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
    function UsercardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UsercardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UsercardPage');
    };
    UsercardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-usercard',template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\NODE_Baitap\node-news\using-component\src\pages\usercard\usercard.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>usercard</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <user-card [userData]="it" [ownerData]="userInfo" [contactData]="contacts"\n  (onClickSub)="onClickMore($event,it.id)"></user-card>\n</ion-content>'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\NODE_Baitap\node-news\using-component\src\pages\usercard\usercard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], UsercardPage);
    return UsercardPage;
}());

//# sourceMappingURL=usercard.js.map

/***/ }),

/***/ 252:
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

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverCard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_apiAuthService__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_time_ago_pipe__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__interceptors_requestInterceptor__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_news_home_news__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipes_linkify__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pipes_new_line__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_content_card_content_card__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_in_app_browser_ngx__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_image_card_image_card__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_user_card_user_card__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_usercard_usercard__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_popover_card_popover_card__ = __webpack_require__(344);
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
                __WEBPACK_IMPORTED_MODULE_19__components_popover_card_popover_card__["a" /* PopoverCard */],
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
                __WEBPACK_IMPORTED_MODULE_18__pages_usercard_usercard__["a" /* UsercardPage */]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_usercard_usercard__ = __webpack_require__(248);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_1__pages_usercard_usercard__["a" /* UsercardPage */]; //HomeNewsPage;//HomePage;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_apiAuthService__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser_ngx__ = __webpack_require__(253);
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

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkifyPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_apiAuthService__ = __webpack_require__(136);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popover_card_popover_card__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(47);
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
            selector: 'user-card',template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\NODE_Baitap\node-news\using-component\src\components\user-card\user-card.html"*/'<!-- userData cần phải chứa .username == username, .id, .time là thời gian của tin tức -->\n\n<ion-item  *ngIf="userData">\n\n    <!-- Cần truyền thêm ownerData = userInfo là username được login vào -->\n\n    <ion-avatar item-start *ngIf="ownerData?.username===userData.username">\n\n        <img *ngIf="ownerData?.data?.image" [src]="ownerData?.data?.image">\n\n        <img *ngIf="!(ownerData?.data?.image)" src="assets/imgs/no-image-go.jpg">\n\n    </ion-avatar>\n\n    <ion-title *ngIf="ownerData?.username===userData.username">{{ownerData?.data?.fullname?ownerData?.data?.fullname:ownerData?.username}}</ion-title>\n\n    <!-- Cần phải truyền cho form danh danh bạ chứa thông tin người dùng -->\n\n    <ion-avatar item-start *ngIf="ownerData?.username!==userData.username">\n\n        <img *ngIf="contactData[userData.username]&&contactData[userData.username].avatar" [src]="contactData[userData.username].avatar">\n\n        <img *ngIf="!(contactData[userData.username]&&contactData[userData.username].avatar)" src="assets/imgs/no-image-go.jpg">\n\n    </ion-avatar>\n\n    <ion-title *ngIf="ownerData?.username!==userData.username">{{contactData[userData.username]&&contactData[userData.username].fullname?contactData[userData.username].fullname:userData.username}}</ion-title>\n\n    <!-- Tin tức được post lên thời gian nào -->\n\n    <ion-note style="color: gray">\n\n        {{userData.time | timeAgo}}\n\n        <ion-icon name="{{(statusIcon[userData.status]?statusIcon[userData.status]:\'md-globe\')}}"></ion-icon>\n\n    </ion-note>\n\n    <!-- nút more infor sẽ hiển thị thông tin của username này lên, bằng backgroud, ảnh đại diện, tên hiển thị -->\n\n    <button item-end icon-only ion-button clear small color="primary" (click)="onClickMore($event,ownerData?.username===userData.username,(statusIcon[userData.status]?statusIcon[userData.status]:\'md-globe\'))">\n\n        <ion-icon name="more"></ion-icon>\n\n    </button>\n\n</ion-item>\n\n<p>this is user-card</p>'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\NODE_Baitap\node-news\using-component\src\components\user-card\user-card.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* PopoverController */]])
    ], UserCard);
    return UserCard;
}());

//# sourceMappingURL=user-card.js.map

/***/ })

},[345]);
//# sourceMappingURL=main.js.map