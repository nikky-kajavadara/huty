webpackJsonp([17],{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoOfParticipantPageModule", function() { return NoOfParticipantPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__no_of_participant__ = __webpack_require__(319);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NoOfParticipantPageModule = /** @class */ (function () {
    function NoOfParticipantPageModule() {
    }
    NoOfParticipantPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__no_of_participant__["a" /* NoOfParticipantPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__no_of_participant__["a" /* NoOfParticipantPage */]),
            ],
        })
    ], NoOfParticipantPageModule);
    return NoOfParticipantPageModule;
}());

//# sourceMappingURL=no-of-participant.module.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoOfParticipantPage; });
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
 * Generated class for the NoOfParticipantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NoOfParticipantPage = /** @class */ (function () {
    function NoOfParticipantPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NoOfParticipantPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NoOfParticipantPage');
    };
    NoOfParticipantPage.prototype.goToPayer = function () {
        this.navCtrl.push('CodegamePage');
    };
    NoOfParticipantPage.prototype.bakcToPage = function () {
        this.navCtrl.pop();
    };
    NoOfParticipantPage.prototype.goToSetting = function () {
        this.navCtrl.push('SettingPage');
    };
    NoOfParticipantPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-no-of-participant',template:/*ion-inline-start:"/Users/dhruvi/Desktop/huty/src/pages/no-of-participant/no-of-participant.html"*/'<!--\n  Generated template for the NoOfParticipantPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n  <ion-header>\n\n    <ion-navbar class="header"  hideBackButton>\n      <ion-title class="text">ASK LIVE</ion-title>\n      <ion-icon (click)="bakcToPage()"  class="back" name="ios-arrow-back-outline"></ion-icon>\n      <ion-icon (click)="goToSetting()" class="setting" name="settings"></ion-icon>\n    </ion-navbar>\n  </ion-header>\n  \n\n<ion-content>\n      <p class="p-text">Nombre de participant</p>\n      <div class="btn-container">\n          <button ion-button class="ni-button"> 1-3 Free</button>\n          <button ion-button  class="ni-button">1-10</button>\n          <button ion-button class="ni-button"> 1-25</button>\n          <button ion-button  class="ni-button">1-50</button>\n          <button ion-button class="ni-button">50-100</button>\n          <button ion-button  class="ni-button">100-500</button>\n          <button ion-button class="ni-button">500-1K</button>\n          <button ion-button  class="ni-button">1K-10K</button>\n          <button ion-button class="ni-button">10K-50K</button>\n          <button ion-button  class="ni-button">50K-500K</button>\n        \n      </div>\n      <button ion-button class="btn ni-btn">Total: 1,99€</button>\n      <button ion-button  class="btn ni-btn" style="margin-bottom:10px">Commande : <ion-icon name="card"></ion-icon>\n      </button>\n    \n    \n     \n</ion-content>\n<ion-footer>\n    <ion-toolbar>\n      <ion-title (click)="goToPayer()" >PAYER</ion-title>\n    </ion-toolbar>\n  </ion-footer>\n'/*ion-inline-end:"/Users/dhruvi/Desktop/huty/src/pages/no-of-participant/no-of-participant.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], NoOfParticipantPage);
    return NoOfParticipantPage;
}());

//# sourceMappingURL=no-of-participant.js.map

/***/ })

});
//# sourceMappingURL=17.js.map