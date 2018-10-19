webpackJsonp([0],{

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VotenomPageModule", function() { return VotenomPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__votenom__ = __webpack_require__(336);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VotenomPageModule = /** @class */ (function () {
    function VotenomPageModule() {
    }
    VotenomPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__votenom__["a" /* VotenomPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__votenom__["a" /* VotenomPage */]),
            ],
        })
    ], VotenomPageModule);
    return VotenomPageModule;
}());

//# sourceMappingURL=votenom.module.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VotenomPage; });
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
 * Generated class for the VotenomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VotenomPage = /** @class */ (function () {
    function VotenomPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    VotenomPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VotenomPage');
    };
    VotenomPage.prototype.bakcToPage = function () {
        this.navCtrl.pop();
    };
    VotenomPage.prototype.goToSetting = function () {
        this.navCtrl.push('SettingPage');
    };
    VotenomPage.prototype.yourHit = function (yh) {
        this.navCtrl.push('GreenhitPage', { 'yh': yh });
    };
    VotenomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-votenom',template:/*ion-inline-start:"D:\ionic\App\huty\src\pages\votenom\votenom.html"*/'<!--\n  Generated template for the VotenomPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar class="header"  hideBackButton>\n        <ion-title class="text">HITS LIVE</ion-title>\n        <ion-icon (click)="bakcToPage()" class="back" name="ios-arrow-back-outline"></ion-icon>\n        <ion-icon (click)="goToSetting()"class="setting" name="settings"></ion-icon>\n  </ion-navbar>\n</ion-header>\n\n\n\n\n<ion-content >\n  <br>\n    <button ion-button class="btn btnred">ON AIR</button>\n\n    <ion-grid>\n        <ion-row>\n          <ion-col col-8 align-self-end>\n            <div class="nom"><img src="assets/imgs/website.png"></div>\n          </ion-col>\n          <ion-col  col-4>\n            <div class="nom"> <h4 class="pt">10pt</h4><img src="assets/imgs/nom.png"></div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <div class="input-back">\n          <p class="textblue">Description :<p>\n          <p class="textblue">dffgbhhghjhkhk</p>\n          \n        \n        </div>\n\n        <ion-grid>\n            <ion-row>\n              <ion-col class="coll3" (click)="yourHit(\'l\')" >\n                <div><img class="imgg" src="assets/imgs/green_like.png"></div>               \n               \n              </ion-col>\n              <ion-col class="coll3" (click)="yourHit(\'n\')">\n                  <div><img class="imgg"  src="assets/imgs/cross_grey.png"></div>\n               \n                </ion-col>\n                <ion-col class="coll3" (click)="yourHit(\'d\')">\n                    <div><img class="imgg"  src="assets/imgs/dislike_red.png"></div>\n          \n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n    \n</ion-content>\n<ion-footer>\n    <ion-toolbar>\n      <ion-title>VOTER</ion-title>\n    </ion-toolbar>\n  </ion-footer>\n'/*ion-inline-end:"D:\ionic\App\huty\src\pages\votenom\votenom.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], VotenomPage);
    return VotenomPage;
}());

//# sourceMappingURL=votenom.js.map

/***/ })

});
//# sourceMappingURL=0.js.map