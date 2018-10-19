webpackJsonp([14],{

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrangehitPageModule", function() { return OrangehitPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orangehit__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrangehitPageModule = /** @class */ (function () {
    function OrangehitPageModule() {
    }
    OrangehitPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__orangehit__["a" /* OrangehitPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__orangehit__["a" /* OrangehitPage */]),
            ],
        })
    ], OrangehitPageModule);
    return OrangehitPageModule;
}());

//# sourceMappingURL=orangehit.module.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrangehitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
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
 * Generated class for the OrangehitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrangehitPage = /** @class */ (function () {
    function OrangehitPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.hits = navParams.get('yh');
    }
    OrangehitPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrangehitPage');
    };
    OrangehitPage.prototype.bakcToPage = function () {
        this.navCtrl.pop();
    };
    OrangehitPage.prototype.goToSetting = function () {
        this.navCtrl.push('SettingPage');
    };
    OrangehitPage.prototype.goToResult = function () {
        this.navCtrl.push('ResultnomPage');
    };
    OrangehitPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-orangehit',template:/*ion-inline-start:"/Users/dhruvi/Desktop/huty/src/pages/orangehit/orangehit.html"*/'<!--\n  Generated template for the OrangehitPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n  <ion-header>\n\n      <ion-navbar class="header"  hideBackButton>\n        <ion-title class="text">HITS LIVE</ion-title>\n        <ion-icon (click)="bakcToPage()"  class="back" name="ios-arrow-back-outline"></ion-icon>\n        <ion-icon (click)="goToSetting()" class="setting" name="settings"></ion-icon>\n      </ion-navbar>\n    \n    </ion-header>\n    \n<ion-content>\n\n    <h1>Your are</h1>\n    <div class="greenhit center"><img src="assets/imgs/thumbs-up.png"></div>\n    <h1>Thank you !</h1>\n\n</ion-content>\n<ion-footer>\n    <ion-toolbar>\n      <ion-title (click)="goToResult()" >RESULTATS</ion-title>\n    </ion-toolbar>\n  </ion-footer>\n'/*ion-inline-end:"/Users/dhruvi/Desktop/huty/src/pages/orangehit/orangehit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], OrangehitPage);
    return OrangehitPage;
}());

//# sourceMappingURL=orangehit.js.map

/***/ })

});
//# sourceMappingURL=14.js.map