webpackJsonp([23],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GreenhitPageModule", function() { return GreenhitPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__greenhit__ = __webpack_require__(313);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GreenhitPageModule = /** @class */ (function () {
    function GreenhitPageModule() {
    }
    GreenhitPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__greenhit__["a" /* GreenhitPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__greenhit__["a" /* GreenhitPage */]),
            ],
        })
    ], GreenhitPageModule);
    return GreenhitPageModule;
}());

//# sourceMappingURL=greenhit.module.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GreenhitPage; });
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
 * Generated class for the GreenhitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GreenhitPage = /** @class */ (function () {
    function GreenhitPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GreenhitPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GreenhitPage');
    };
    GreenhitPage.prototype.bakcToPage = function () {
        this.navCtrl.pop();
    };
    GreenhitPage.prototype.goToSetting = function () {
        this.navCtrl.push('SettingPage');
    };
    GreenhitPage.prototype.goToCongrats = function () {
        this.navCtrl.push('OrangehitPage');
    };
    GreenhitPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-greenhit',template:/*ion-inline-start:"/Users/dhruvi/Desktop/huty/src/pages/greenhit/greenhit.html"*/'<!--\n  Generated template for the GreenhitPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n  <ion-header>\n\n      <ion-navbar class="header"  hideBackButton>\n        <ion-title class="text">YOURS HITS</ion-title>\n        <ion-icon (click)="bakcToPage()"  class="back" name="ios-arrow-back-outline"></ion-icon>\n        <ion-icon (click)="goToSetting()" class="setting" name="settings"></ion-icon>\n      </ion-navbar>\n    \n    </ion-header>\n\n<ion-content>\n\n    <h1>Your Hit</h1>\n    <div class="greenhit center"><img src="assets/imgs/green_like.png"></div>\n\n</ion-content>\n<ion-footer>\n    <ion-toolbar>\n      <ion-title (click)="goToCongrats()">VALIDER</ion-title>\n    </ion-toolbar>\n  </ion-footer>'/*ion-inline-end:"/Users/dhruvi/Desktop/huty/src/pages/greenhit/greenhit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], GreenhitPage);
    return GreenhitPage;
}());

//# sourceMappingURL=greenhit.js.map

/***/ })

});
//# sourceMappingURL=23.js.map