webpackJsonp([6],{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharePageModule", function() { return SharePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share__ = __webpack_require__(330);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharePageModule = /** @class */ (function () {
    function SharePageModule() {
    }
    SharePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__share__["a" /* SharePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__share__["a" /* SharePage */]),
            ],
        })
    ], SharePageModule);
    return SharePageModule;
}());

//# sourceMappingURL=share.module.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharePage; });
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
 * Generated class for the SharePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SharePage = /** @class */ (function () {
    function SharePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SharePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SharePage');
    };
    SharePage.prototype.bakcToPage = function () {
        this.navCtrl.pop();
    };
    SharePage.prototype.gotoPayer = function () {
        this.navCtrl.push("AddParticipantPage");
    };
    SharePage.prototype.goToSetting = function () {
        this.navCtrl.push('SettingPage');
    };
    SharePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-share',template:/*ion-inline-start:"/Users/dhruvi/Desktop/huty/src/pages/share/share.html"*/'<!--\n  Generated template for the SharePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="header"  hideBackButton>\n    <ion-title class="text">ASK LIVE</ion-title>\n    <ion-icon (click)="bakcToPage()"  class="back" name="ios-arrow-back-outline"></ion-icon>\n    <ion-icon (click)="goToSetting()" class="setting" name="settings"></ion-icon>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n      <p class="p-text">Database</p>\n      <div class="btn-container">\n          <button ion-button class="ni-button">DATABASE</button>\n          <button ion-button  class="ni-button">FACEBOOK</button>\n          <button ion-button class="ni-button">LINKEDIN</button>\n          <button ion-button  class="ni-button">TWITTER</button>\n          <button ion-button class="ni-button">REPERTOIRE</button>\n          <button ion-button  class="ni-button">TXT</button>\n          <button ion-button class="ni-button">TXT</button>\n          <button ion-button  class="ni-button">TXT</button>\n         \n        \n      </div>\n      <button ion-button class="btn ni-btn">Total: 1,99€</button>\n      <button ion-button  class="btn ni-btn" style="margin-bottom:10px">Commande : <ion-icon name="card"></ion-icon>\n      </button>\n    \n    \n     \n</ion-content>\n<ion-footer>\n    <ion-toolbar>\n      <ion-title (click)="gotoPayer()"  >PAYER</ion-title>\n    </ion-toolbar>\n  </ion-footer>'/*ion-inline-end:"/Users/dhruvi/Desktop/huty/src/pages/share/share.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SharePage);
    return SharePage;
}());

//# sourceMappingURL=share.js.map

/***/ })

});
//# sourceMappingURL=6.js.map