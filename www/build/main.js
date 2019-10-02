webpackJsonp([0],{

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverCard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
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
            selector: 'popover-card',template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\NODE_Baitap\node-quan-ly-nha-tram\using-component\src\components\popover-card\popover-card.html"*/'<!-- Lựa chọn tab theo kiểu bảng -->\n\n<ion-row *ngIf="dynamicForm?.type===\'tab\'">\n\n    <ion-col>\n\n        <button (click)="selectedValue(\'smaller\')" ion-item detail-none class="text-button text-smaller border-card">A</button>\n\n    </ion-col>\n\n    <ion-col>\n\n        <button (click)="selectedValue(\'larger\')" ion-item detail-none class="text-button text-larger border-card">A</button>\n\n    </ion-col>\n\n</ion-row>\n\n\n\n<!-- Mảng icon cần chọn ví dụ như lựa chọn cảm xúc -->\n\n<ion-toolbar *ngIf="dynamicForm?.type===\'icon\'" class="item-card">\n\n    <ion-buttons>\n\n        <button *ngFor="let it of dynamicForm?.menu; let idx=index;" ion-button icon-only color="{{it.color}}" (click)="selectedValue(it.value)">\n\n            <ion-icon name="{{it.icon}}"></ion-icon>\n\n        </button>             \n\n    </ion-buttons>\n\n</ion-toolbar>\n\n\n\n<!-- Chọn màu nền, thiết kế màu để chọn lựa -->\n\n<ion-row *ngIf="dynamicForm?.type===\'color\'" class="row-dots">\n\n    <ion-col>\n\n        <button ion-button="dot" (click)="selectedValue(\'white\')" class="dot-white" [class.selected]="background == \'white\'"></button>\n\n    </ion-col>\n\n    <ion-col>\n\n        <button ion-button="dot" (click)="selectedValue(\'tan\')" class="dot-tan" [class.selected]="background == \'tan\'"></button>\n\n    </ion-col>\n\n    <ion-col>\n\n        <button ion-button="dot" (click)="selectedValue(\'grey\')" class="dot-grey" [class.selected]="background == \'grey\'"></button>\n\n    </ion-col>\n\n    <ion-col>\n\n        <button ion-button="dot" (click)="selectedValue(\'black\')" class="dot-black" [class.selected]="background == \'black\'"></button>\n\n    </ion-col>\n\n</ion-row>\n\n\n\n<!-- Chọn một mảng giá trị biểu tượng và mô tả danh sách theo menu xuống -->\n\n<ion-list *ngIf="dynamicForm?.type===\'item\'">\n\n    <ion-item *ngFor="let it of dynamicForm?.menu; let idx=index;" tappable class="item-selected" (click)="selectedValue(it.value)">\n\n        <ion-icon *ngIf="it.icon" item-start name="{{it.icon}}" color="{{it.color}}"></ion-icon>\n\n        <ion-label>{{it.name}}</ion-label>\n\n    </ion-item>\n\n</ion-list>\n\n\n\n'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\NODE_Baitap\node-quan-ly-nha-tram\using-component\src\components\popover-card\popover-card.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ViewController */]])
    ], PopoverCard);
    return PopoverCard;
}());

//# sourceMappingURL=popover-card.js.map

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

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentCardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_apiAuthService__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser_ngx__ = __webpack_require__(248);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContentCardPage = /** @class */ (function () {
    function ContentCardPage(apiAuth, inAppBrowser) {
        this.apiAuth = apiAuth;
        this.inAppBrowser = inAppBrowser;
        this.dynamicCards = {
            items: []
        };
    }
    ContentCardPage.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.dynamicCards.items);
        }, 2000);
        this.apiAuth.getDynamicUrl('assets/data/url-info.json')
            .then(function (res) {
            _this.dynamicCards.items = res;
        })
            .catch(function (err) { return console.log(err); });
    };
    ContentCardPage.prototype.onClickImage = function (event) {
        console.log('image', event);
    };
    ContentCardPage.prototype.onClickOpenLink = function (event) {
        console.log('content', event);
        if (event.link) {
            var target = "_blank";
            var options = "hidden=no, toolbar=yes, location=yes, presentationstyle=fullscreen, clearcache=yes, clearsessioncache=yes";
            this.inAppBrowser.create(event.link, target, options);
        }
    };
    ContentCardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contentcard',template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\NODE_Baitap\node-quan-ly-nha-tram\using-component\src\pages\contentcard\contentcard.html"*/'<ion-header>\n\n\n\n</ion-header>\n\n\n\n<ion-content no-padding>\n\n    <div *ngFor="let it of dynamicCards?.items">\n\n        <div *ngIf="it.content">\n\n            <content-card [contentData]="it.content" (onClickSub)="onClickOpenLink($event)" (onClickImage)="onClickImage($event)"></content-card>\n\n        </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\NODE_Baitap\node-quan-ly-nha-tram\using-component\src\pages\contentcard\contentcard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_apiAuthService__["a" /* ApiAuthService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */]])
    ], ContentCardPage);
    return ContentCardPage;
}());

//# sourceMappingURL=contentcard.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(348);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser_ngx__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_time_ago_pipe__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_content_card_content_card__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_image_card_image_card__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_card_user_card__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_popover_card_popover_card__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_social_card_social_card__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_imagecard_imagecard__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_contentcard_contentcard__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_usercard_usercard__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_socialcard_socialcard__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipes_linkify__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_new_line__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_apiAuthService__ = __webpack_require__(43);
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
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_imagecard_imagecard__["a" /* ImageCardPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_contentcard_contentcard__["a" /* ContentCardPage */],
                __WEBPACK_IMPORTED_MODULE_17__pipes_new_line__["a" /* NewlinePipe */],
                __WEBPACK_IMPORTED_MODULE_16__pipes_linkify__["a" /* LinkifyPipe */],
                __WEBPACK_IMPORTED_MODULE_7__components_content_card_content_card__["a" /* ContentCard */],
                __WEBPACK_IMPORTED_MODULE_8__components_image_card_image_card__["a" /* ImageCard */],
                __WEBPACK_IMPORTED_MODULE_9__components_user_card_user_card__["a" /* UserCard */],
                __WEBPACK_IMPORTED_MODULE_14__pages_usercard_usercard__["a" /* UserCardPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_socialcard_socialcard__["a" /* SocialCardPage */],
                __WEBPACK_IMPORTED_MODULE_10__components_popover_card_popover_card__["a" /* PopoverCard */],
                __WEBPACK_IMPORTED_MODULE_11__components_social_card_social_card__["a" /* SocialCard */],
                __WEBPACK_IMPORTED_MODULE_5_time_ago_pipe__["a" /* TimeAgoPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_imagecard_imagecard__["a" /* ImageCardPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_contentcard_contentcard__["a" /* ContentCardPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_usercard_usercard__["a" /* UserCardPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_socialcard_socialcard__["a" /* SocialCardPage */],
                __WEBPACK_IMPORTED_MODULE_10__components_popover_card_popover_card__["a" /* PopoverCard */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__services_apiAuthService__["a" /* ApiAuthService */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiAuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
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
    function ApiAuthService(httpClient) {
        this.httpClient = httpClient;
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
    ApiAuthService.prototype.getDynamicUrl = function (url) {
        return this.httpClient.get(url)
            .toPromise()
            .then(function (data) {
            var rtn;
            rtn = data;
            return rtn;
        });
    };
    ApiAuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ApiAuthService);
    return ApiAuthService;
}());

//# sourceMappingURL=apiAuthService.js.map

/***/ }),

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_contentcard_contentcard__ = __webpack_require__(342);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_1__pages_contentcard_contentcard__["a" /* ContentCardPage */];
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\NODE_Baitap\node-quan-ly-nha-tram\using-component\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\NODE_Baitap\node-quan-ly-nha-tram\using-component\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 674:
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

var ContentCard = /** @class */ (function () {
    function ContentCard() {
        this.onClickSub = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onClickImage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.maxCharacter = 500; //số ký tự một lần hiển thị ra
    }
    ContentCard.prototype.ngOnInit = function () {
        console.log(this.contentData);
    };
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], ContentCard.prototype, "onClickSub", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], ContentCard.prototype, "onClickImage", void 0);
    ContentCard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'content-card',template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\NODE_Baitap\node-quan-ly-nha-tram\using-component\src\components\content-card\content-card.html"*/'<div *ngIf="contentData">\n\n    <!-- Hiển thị tiêu đề của bản tin -->\n\n    <p text-wrap [innerHtml]="contentData | linkify"></p>\n\n\n\n    <!-- Hiển thị nội dung bản tin -->\n\n    <div *ngIf="(contentData | linkify:\'urlInfos\')?.length>0">\n\n        <div *ngFor="let urlInfo of contentData | linkify:\'urlInfos\'; let idx = index;">\n\n            <div *ngIf="idx===0">\n\n                <ion-row no-padding>\n\n                    <ion-col no-padding col-12>\n\n                        <strong *ngIf="urlInfo.hostname">\n\n                            {{urlInfo.hostname}}\n\n                        </strong>\n\n                        <p text-wrap>\n\n                            <strong *ngIf="urlInfo.title">\n\n                                {{urlInfo.title}}\n\n                            </strong>\n\n                        </p>\n\n                        <p text-wrap\n\n                            [innerHtml]="(urlInfo.content | newline | slice:0:(!urlInfo.is_readmore?maxCharacter:urlInfo.is_readmore)) + ((urlInfo.content | newline)?.length>(!urlInfo.is_readmore?maxCharacter:urlInfo.is_readmore)?\'•••\':\'\')">\n\n                        </p>\n\n                        <div\n\n                            *ngIf="(urlInfo.content | newline)?.length>(!urlInfo.is_readmore?maxCharacter:urlInfo.is_readmore)">\n\n                            <ion-note style="color: rgb(36, 93, 250)" tappable (click)="readMore(urlInfo)">đọc thêm\n\n                            </ion-note>\n\n                        </div>\n\n                    </ion-col>\n\n                    <ion-col no-padding col-12 *ngIf="urlInfo.images && urlInfo.images.length>0"\n\n                        class="background-height">\n\n                        <image-card [imageData]="urlInfo.images" (onClickSub)="onClickMedia($event)"></image-card>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n        </div>\n\n    </div>\n\n\n\n    <!-- Hiển thị các link cho nút bấm inappBrowser sử dụng trong app trên ios và android -->\n\n    <ion-buttons *ngIf="(contentData | linkify:\'links\')?.length>0">\n\n        <button *ngFor="let url of contentData | linkify:\'links\'; let idx = index;" ion-button round outline\n\n            (click)="onClickItem(url)">\n\n            Xem link {{(idx + 1)}}\n\n        </button>\n\n    </ion-buttons>\n\n\n\n</div>'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\NODE_Baitap\node-quan-ly-nha-tram\using-component\src\components\content-card\content-card.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ContentCard);
    return ContentCard;
}());

//# sourceMappingURL=content-card.js.map

/***/ }),

/***/ 675:
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

var ImageCard = /** @class */ (function () {
    function ImageCard() {
        this.onClickSub = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    ImageCard.prototype.onClickMedia = function (idx, data) {
        this.onClickSub.emit({ index: idx, original: data });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ImageCard.prototype, "imageData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], ImageCard.prototype, "onClickSub", void 0);
    ImageCard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'image-card',template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\NODE_Baitap\node-quan-ly-nha-tram\using-component\src\components\image-card\image-card.html"*/'<div *ngIf="imageData" class="padding-col">\n\n\n\n    <!-- 1 pics -->\n\n    <ion-row *ngIf="imageData.length===1">\n\n        <ion-col class="padding-col card-background-page" col-12 (click)="onClickMedia(0,imageData)">\n\n            <div class="image-height-1" [style.background-image]="\'url(\'+imageData[0].src+\')\'"></div>\n\n            <div class="card-title" *ngIf="imageData[0].title">{{imageData[0].title}}</div>\n\n            <div class="card-subtitle" *ngIf="imageData[0].file_date">{{imageData[0].file_date | date }}</div>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <!-- 2 pics -->\n\n    <ion-row *ngIf="imageData.length===2">\n\n        <ion-col class="padding-col card-background-page" col-6 (click)="onClickMedia(0,imageData)">\n\n            <div class="image-height-1" [style.background-image]="\'url(\'+imageData[0].src+\')\'"></div>\n\n            <div class="card-title" *ngIf="imageData[0].title">{{imageData[0].title}}</div>\n\n            <div class="card-subtitle" *ngIf="imageData[0].file_date">{{imageData[0].file_date | date}}</div>\n\n        </ion-col>\n\n        <ion-col class="padding-col card-background-page" col-6 (click)="onClickMedia(1,imageData)">\n\n            <div class="image-height-1" [style.background-image]="\'url(\'+imageData[1].src+\')\'"></div>\n\n            <div class="card-title" *ngIf="imageData[1].title">{{imageData[1].title}}</div>\n\n            <div class="card-subtitle" *ngIf="imageData[1].file_date">{{imageData[1].file_date | date}}</div>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <!-- 3 pics -->\n\n    <ion-row *ngIf="imageData.length===3">\n\n        <ion-col class="padding-col card-background-page" col-12 (click)="onClickMedia(0,imageData)">\n\n            <div class="image-height-2" [style.background-image]="\'url(\'+imageData[0].src+\')\'"></div>\n\n            <div class="card-title" *ngIf="imageData[0].title">{{imageData[0].title}}</div>\n\n            <div class="card-subtitle" *ngIf="imageData[0].file_date">{{imageData[0].file_date | date}}</div>\n\n        </ion-col>\n\n        <ion-col class="padding-col card-background-page" col-6 (click)="onClickMedia(1,imageData)">\n\n            <div class="image-height-3" [style.background-image]="\'url(\'+imageData[1].src+\')\'"></div>\n\n        </ion-col>\n\n        <ion-col class="padding-col card-background-page" col-6 (click)="onClickMedia(2,imageData)">\n\n            <div class="image-height-3" [style.background-image]="\'url(\'+imageData[2].src+\')\'"></div>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <!-- 4 pics -->\n\n    <ion-row *ngIf="imageData.length===4">\n\n        <ion-col class="padding-col card-background-page" col-6 (click)="onClickMedia(0,imageData)">\n\n            <div class="image-height-4" [style.background-image]="\'url(\'+imageData[0].src+\')\'"></div>\n\n            <div class="card-title" *ngIf="imageData[0].title">{{imageData[0].title}}</div>\n\n            <div class="card-subtitle" *ngIf="imageData[0].file_date">{{imageData[0].file_date | date}}</div>\n\n        </ion-col>\n\n        <ion-col class="padding-col card-background-page" col-6 (click)="onClickMedia(1,imageData)">\n\n            <div class="image-height-4" [style.background-image]="\'url(\'+imageData[1].src+\')\'"></div>\n\n            <div class="card-title" *ngIf="imageData[1].title">{{imageData[1].title}}</div>\n\n            <div class="card-subtitle" *ngIf="imageData[1].file_date">{{imageData[1].file_date | date}}</div>\n\n        </ion-col>\n\n        <ion-col class="padding-col card-background-page" col-6 (click)="onClickMedia(2,imageData)">\n\n            <div class="image-height-4" [style.background-image]="\'url(\'+imageData[2].src+\')\'"></div>\n\n        </ion-col>\n\n        <ion-col class="padding-col card-background-page" col-6 (click)="onClickMedia(3,imageData)">\n\n            <div class="image-height-4" [style.background-image]="\'url(\'+imageData[3].src+\')\'"></div>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <!-- 5+ pics -->\n\n    <ion-row *ngIf="imageData.length>=5">\n\n        <ion-col class="padding-col card-background-page" col-6 (click)="onClickMedia(0,imageData)">\n\n            <div class="image-height-2" [style.background-image]="\'url(\'+imageData[0]?.src+\')\'"></div>\n\n            <div class="card-title">{{imageData[0].title}}</div>\n\n            <div class="card-subtitle">{{imageData[0].file_date | date}}</div>\n\n        </ion-col>\n\n        <ion-col class="padding-col card-background-page" col-6 (click)="onClickMedia(1,imageData)">\n\n            <div class="image-height-2" [style.background-image]="\'url(\'+imageData[1].src+\')\'"></div>\n\n            <div class="card-title" *ngIf="imageData[1].title">{{imageData[1].title}}</div>\n\n            <div class="card-subtitle" *ngIf="imageData[1].file_date">{{imageData[1].file_date | date}}</div>\n\n        </ion-col>\n\n        <ion-col class="padding-col card-background-page" col-4 (click)="onClickMedia(2,imageData)">\n\n            <div class="image-height-3" [style.background-image]="\'url(\'+imageData[2].src+\')\'"></div>\n\n        </ion-col>\n\n        <ion-col class="padding-col card-background-page" col-4 (click)="onClickMedia(3,imageData)">\n\n            <div class="image-height-3" [style.background-image]="\'url(\'+imageData[3].src+\')\'"></div>\n\n        </ion-col>\n\n        <ion-col class="padding-col card-background-page" col-4 (click)="onClickMedia(4,imageData)">\n\n            <div class="image-height-3" [style.background-image]="\'url(\'+imageData[4].src+\')\'"></div>\n\n            <div class="card-more" *ngIf="imageData.length>5">+{{(imageData.length-5)}}</div>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n</div>'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\NODE_Baitap\node-quan-ly-nha-tram\using-component\src\components\image-card\image-card.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ImageCard);
    return ImageCard;
}());

//# sourceMappingURL=image-card.js.map

/***/ }),

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popover_card_popover_card__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserCard = /** @class */ (function () {
    function UserCard(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
        this.onClickSub = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.statusIcon = {
            0: "ios-lock",
            1: "md-globe",
            2: "ios-contacts",
            3: "ios-people-outline",
        };
    }
    UserCard.prototype.ngOnInit = function () { };
    UserCard.prototype.onClickMore = function (ev, isPrivate, icon) {
        //neu tin cua user thi hien thi menu:
        //chinh sua nguoi doc tin
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
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_1__popover_card_popover_card__["a" /* PopoverCard */], {
            form: {
                type: "item",
                menu: menu
            }
        });
        popover.present({ ev: ev });
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
            selector: 'user-card',template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\NODE_Baitap\node-quan-ly-nha-tram\using-component\src\components\user-card\user-card.html"*/'<ion-item *ngIf="userData">\n\n    <!-- Trường hợp 1: Nếu username của bản tin bằng username đăng nhập -->\n\n    <ion-avatar item-start *ngIf="ownerData?.username===userData.username">\n\n        <!-- Nếu có avatar trong thông tin userInfo thì lấy ảnh đó làm avatar -->\n\n        <img *ngIf="ownerData?.data?.image" [src]="ownerData?.data?.image">\n\n        <!-- Nếu không có avatar trong thông tin userInfo thì lấy ảnh trong thư viện ảnh -->\n\n        <img *ngIf="!(ownerData?.data?.image)" src="assets/imgs/no-image-go.jpg">\n\n    </ion-avatar>\n\n\n\n    <!-- Nếu có fullname trong userInfo thì lấy, nếu không thì lấy username trong userInfo -->\n\n    <ion-title *ngIf="ownerData?.username===userData.username">\n\n        {{ownerData?.data?.fullname?ownerData?.data?.fullname:ownerData?.username}}</ion-title>\n\n\n\n\n\n    <!-- Trường hợp 2: Nếu username của tin khác username đăng nhập -->\n\n    <!-- Cần phải truyền cho form danh bạ chứa thông tin người dùng -->\n\n    <ion-avatar item-start *ngIf="ownerData?.username!==userData.username">\n\n        <!-- Nếu có avatar trong contactData thì lấy ảnh đó làm avatar -->\n\n        <img *ngIf="contactData[userData.username] && contactData[userData.username].avatar"\n\n            [src]="contactData[userData.username].avatar">\n\n        <!-- Nếu không có avatar trong contactData thì lấy ảnh trong thư viện ảnh -->\n\n        <img *ngIf="!(contactData[userData.username] && contactData[userData.username].avatar)"\n\n            src="assets/imgs/no-image-go.jpg">\n\n    </ion-avatar>\n\n\n\n    <!-- Nếu có fullname trong contactData thì lấy, nếu không thì lấy username trong bản tin -->\n\n    <ion-title *ngIf="ownerData?.username!==userData.username">\n\n        {{contactData[userData.username] && contactData[userData.username].fullname?contactData[userData.username].fullname:userData.username}}\n\n    </ion-title>\n\n\n\n    <!-- Tin tức được post lên thời gian nào -->\n\n    <ion-note style="color: gray">\n\n        {{userData.time | timeAgo}}\n\n        <ion-icon name="{{(statusIcon[userData.status]?statusIcon[userData.status]:\'md-globe\')}}"></ion-icon>\n\n    </ion-note>\n\n\n\n    <!-- nút more infor hiển thị menu tùy chọn các chức năng tùy theo username đăng nhập và username bản tin, trạng thái của bản tin -->\n\n    <button item-end icon-only ion-button clear small color="primary"\n\n        (click)="onClickMore($event, ownerData?.username===userData.username, (statusIcon[userData.status]?statusIcon[userData.status]:\'md-globe\'))">\n\n        <ion-icon name="more"></ion-icon>\n\n    </button>\n\n</ion-item>'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\NODE_Baitap\node-quan-ly-nha-tram\using-component\src\components\user-card\user-card.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* PopoverController */]])
    ], UserCard);
    return UserCard;
}());

//# sourceMappingURL=user-card.js.map

/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialCard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_apiAuthService__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popover_card_popover_card__ = __webpack_require__(150);
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
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__popover_card_popover_card__["a" /* PopoverCard */], {
            form: {
                type: "icon",
                menu: menu
            }
        });
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
            selector: 'social-card',template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\NODE_Baitap\node-quan-ly-nha-tram\using-component\src\components\social-card\social-card.html"*/'<!-- Các kết quả ghi nhận được -->\n\n<ion-item no-padding *ngIf="\n\n        (resultData?.likes?.length>0)\n\n        ||\n\n        (resultData?.comments?.length>0)\n\n        ||\n\n        (resultData?.shares?.length>0)">\n\n    <ion-row no-padding>\n\n        <ion-col no-padding align-self-center text-center>\n\n            <div *ngIf="resultData?.likes?.length>0">\n\n                <ion-icon *ngIf="resultData?.likes?.like>0" color="{{iconLikes?.like?.color}}" icon-start clear small\n\n                    name="{{iconLikes?.like?.icon}}"></ion-icon>\n\n                <ion-icon *ngIf="resultData?.likes?.love>0" color="{{iconLikes?.love?.color}}" icon-start clear small\n\n                    name="{{iconLikes?.love?.icon}}"></ion-icon>\n\n                <ion-icon *ngIf="resultData?.likes?.unlike>0" color="{{iconLikes?.unlike?.color}}" icon-start clear\n\n                    small name="{{iconLikes?.unlike?.icon}}"></ion-icon>\n\n                <ion-icon *ngIf="resultData?.likes?.sad>0" color="{{iconLikes?.sad?.color}}" icon-start clear small\n\n                    name="{{iconLikes?.sad?.icon}}"></ion-icon>\n\n                <ion-icon *ngIf="resultData?.likes?.angery>0" color="{{iconLikes?.angery?.color}}" icon-start clear\n\n                    small name="{{iconLikes?.angery?.icon}}"></ion-icon>\n\n                <ion-note *ngIf="resultData?.likes?.length>0">{{resultData?.likes?.length}}</ion-note>\n\n            </div>\n\n        </ion-col>\n\n        <ion-col no-padding align-self-center text-center>\n\n            <ion-note *ngIf="resultData?.comments?.length>0">{{(resultData?.comments?.length)}} Comments</ion-note>\n\n        </ion-col>\n\n        <ion-col no-padding align-self-center text-center>\n\n            <ion-note *ngIf="resultData?.shares?.length>0">{{(resultData?.shares?.length)}} Shares</ion-note>\n\n        </ion-col>\n\n    </ion-row>\n\n</ion-item>\n\n\n\n<!-- Các nút lệnh cho phép hành động like, comment, share -->\n\n<ion-item no-padding *ngIf="actionData?.like || actionData?.comment || actionData?.share">\n\n    <ion-row>\n\n        <ion-col no-padding text-center>\n\n            <button *ngIf="actionData?.like" ion-button clear small\n\n                color="{{(resultData?.likes[ownerData?.username]?iconLikes[resultData?.likes[ownerData?.username]].color:actionData?.like?.color)}}"\n\n                (click)="onClickActions($event,actionData?.like)" icon-start>\n\n                <ion-icon\n\n                    name="{{(resultData?.likes[ownerData?.username]?iconLikes[resultData?.likes[ownerData?.username]].icon:actionData?.like?.icon)}}">\n\n                </ion-icon>\n\n                {{(resultData?.likes[ownerData?.username]?iconLikes[resultData?.likes[ownerData?.username]].name:actionData?.like?.name)}}\n\n            </button>\n\n        </ion-col>\n\n        <ion-col no-padding text-center>\n\n            <button *ngIf="actionData?.comment" ion-button clear small color="{{actionData?.comment?.color}}"\n\n                (click)="onClickActions($event,actionData?.comment)" icon-start>\n\n                <ion-icon name=\'{{actionData?.comment?.icon}}\'></ion-icon>\n\n                {{actionData?.comment?.name}}\n\n            </button>\n\n        </ion-col>\n\n        <ion-col no-padding text-center>\n\n            <button *ngIf="actionData?.share" ion-button clear small color="{{actionData?.share?.color}}"\n\n                (click)="onClickActions($event,actionData?.share)" icon-start>\n\n                <ion-icon name=\'{{actionData?.share?.icon}}\'></ion-icon>\n\n                {{actionData?.share?.name}}\n\n            </button>\n\n        </ion-col>\n\n    </ion-row>\n\n</ion-item>'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\NODE_Baitap\node-quan-ly-nha-tram\using-component\src\components\social-card\social-card.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_apiAuthService__["a" /* ApiAuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* PopoverController */]])
    ], SocialCard);
    return SocialCard;
}());

//# sourceMappingURL=social-card.js.map

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageCardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImageCardPage = /** @class */ (function () {
    function ImageCardPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ImageCardPage.prototype.ngOnInit = function () {
        this.images = [
            {
                title: "Tướng Mỹ: Ông Tập đã bội hứa về quân sự hóa Biển Đông",
                src: "https://cdn.tuoitre.vn/zoom/504_315/2019/5/30/xi-jin-ping-1559170103420282059851-crop-1559170108147453943080.jpg",
                file_date: new Date()
            },
            {
                title: "Gian lận thi cử: gia đình bị can nộp lại tiền, gia đình thí sinh chối",
                src: "https://cdn.tuoitre.vn/thumb_w/586/2019/5/30/gian-lan-thi-cu-son-la-ong-yen-15592075121131686156044.png",
                file_date: new Date()
            }
        ];
    };
    ImageCardPage.prototype.onClickMedia = function (event) {
        console.log(event);
    };
    ImageCardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-imagecard',template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\NODE_Baitap\node-quan-ly-nha-tram\using-component\src\pages\imagecard\imagecard.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <image-card [imageData]="images" (onClickSub)="onClickMedia($event)"></image-card>\n\n</ion-content>'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\NODE_Baitap\node-quan-ly-nha-tram\using-component\src\pages\imagecard\imagecard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* NavController */]])
    ], ImageCardPage);
    return ImageCardPage;
}());

//# sourceMappingURL=imagecard.js.map

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_apiAuthService__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserCardPage = /** @class */ (function () {
    function UserCardPage(apiAuth) {
        this.apiAuth = apiAuth;
        this.dynamicCards = {
            items: []
        };
    }
    UserCardPage.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.dynamicCards.items);
        }, 2000);
        this.apiAuth.getDynamicUrl('assets/data/news-info.json')
            .then(function (res) {
            _this.dynamicCards.items = res;
        })
            .catch(function (err) { return console.log(err); });
        this.contacts = { 903500888: { fullname: "Cuong Test", avatar: "http://img.fica.vn/fica/images/2019/10/01/co-hay-khong-chuyen-doi-banh-keo-lay-may-bay-boeing-727-o-noi-bai-20191001142615277.jpg" } };
        this.userInfo = { username: "766777123", data: { fullname: "Nguyen Van Dinh", image: "https://icdn.dantri.com.vn/thumb_w/640/2019/10/01/pt-tg-kiem-tra-1569903101446.jpg" } };
    };
    UserCardPage.prototype.onClickMore = function (ev, id) {
        console.log(id, ev);
    };
    UserCardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-usercard',template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\NODE_Baitap\node-quan-ly-nha-tram\using-component\src\pages\usercard\usercard.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>usercard</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div *ngFor="let it of dynamicCards?.items">\n    <user-card [userData]="it" [ownerData]="userInfo" [contactData]="contacts" (onClickSub)="onClickMore($event,it.id)">\n    </user-card>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\NODE_Baitap\node-quan-ly-nha-tram\using-component\src\pages\usercard\usercard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_apiAuthService__["a" /* ApiAuthService */]])
    ], UserCardPage);
    return UserCardPage;
}());

//# sourceMappingURL=usercard.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialCardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_apiAuthService__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocialCardPage = /** @class */ (function () {
    function SocialCardPage(apiAuth) {
        this.apiAuth = apiAuth;
        this.userInfo = { username: 766777123 };
        this.dynamicCards = {
            items: []
        };
    }
    SocialCardPage.prototype.ngOnInit = function () {
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
    SocialCardPage.prototype.onClickAction = function (ev, id) {
        console.log(id, ev);
    };
    SocialCardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-socialcard',template:/*ion-inline-start:"D:\DINHNV\MyData\LapTrinhDiDong\NODE_Baitap\node-quan-ly-nha-tram\using-component\src\pages\socialcard\socialcard.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>socialcard</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngFor="let it of dynamicCards?.items">\n    <social-card [resultData]="it.results" [actionData]="it.actions" [ownerData]="userInfo" (onClickSub)="onClickAction($event,it.id)">\n    </social-card>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\DINHNV\MyData\LapTrinhDiDong\NODE_Baitap\node-quan-ly-nha-tram\using-component\src\pages\socialcard\socialcard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_apiAuthService__["a" /* ApiAuthService */]])
    ], SocialCardPage);
    return SocialCardPage;
}());

//# sourceMappingURL=socialcard.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkifyPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_apiAuthService__ = __webpack_require__(43);
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

/***/ 682:
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

/***/ })

},[343]);
//# sourceMappingURL=main.js.map