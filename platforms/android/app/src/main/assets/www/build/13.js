webpackJsonp([13],{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipantPageModule", function() { return ParticipantPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__participant__ = __webpack_require__(324);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ParticipantPageModule = /** @class */ (function () {
    function ParticipantPageModule() {
    }
    ParticipantPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__participant__["a" /* ParticipantPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__participant__["a" /* ParticipantPage */]),
            ],
        })
    ], ParticipantPageModule);
    return ParticipantPageModule;
}());

//# sourceMappingURL=participant.module.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipantPage; });
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
 * Generated class for the ParticipantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ParticipantPage = /** @class */ (function () {
    function ParticipantPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ParticipantPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ParticipantPage');
    };
    ParticipantPage.prototype.goTostatistics = function () {
        this.navCtrl.push("StatisticsPage");
    };
    ParticipantPage.prototype.goToVotePage = function () {
        this.navCtrl.push("VotenomPage");
    };
    ParticipantPage.prototype.bakcToPage = function () {
        this.navCtrl.pop();
    };
    ParticipantPage.prototype.goToSetting = function () {
        this.navCtrl.push('SettingPage');
    };
    ParticipantPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-participant',template:/*ion-inline-start:"/Users/dhruvi/Desktop/huty/src/pages/participant/participant.html"*/'<!--\n  Generated template for the ChoosePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar class="header"  hideBackButton>\n    <ion-title class="text">PARTICIPANTS</ion-title>\n    <ion-icon (click)="bakcToPage()"  class="back" name="ios-arrow-back-outline"></ion-icon>\n    <ion-icon (click)="goToSetting()" class="setting" name="settings"></ion-icon>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div class="content-section">\n   \n    \n    <button ion-button class="btn btnred">ON AIR</button>\n\n\n    <ion-grid>\n      <ion-row>\n        <ion-col class="col" >\n          <div>\n            <img src="assets/imgs/nom.png">\n          </div>\n          <h6>Nom</h6>\n          <h5 class="no">1</h5>\n         \n        </ion-col>\n        <ion-col class="col" >\n          <div>\n            <img src="assets/imgs/nom.png">\n          </div>\n          <h6>Nom</h6>\n          <h5 class="no">2</h5>\n        \n        </ion-col>\n        <ion-col class="col" >\n          <div>\n            <img src="assets/imgs/nom.png">\n          </div>\n          <h6>Nom</h6>\n          <h5 class="no">3</h5>\n          \n        </ion-col>\n\n      </ion-row>\n      <ion-row>\n        <ion-col class="col" >\n          <div>\n            <img src="assets/imgs/nom.png">\n          </div>\n          <h6>Nom</h6>\n          <h5 class="no">4</h5>\n        \n        </ion-col>\n        <ion-col class="col" >\n          <div>\n            <img src="assets/imgs/nom.png">\n          </div>\n          <h6>Nom</h6>\n          <h5 class="no">5</h5>\n        \n        </ion-col>\n        <ion-col class="col" >\n          <div>\n            <img src="assets/imgs/nom.png">\n          </div>\n          <h6>Nom</h6>\n          <h5 class="no">6</h5>\n         \n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n\n  </div>\n \n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-title   (click)="goToVotePage()">CHOISIR</ion-title>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/dhruvi/Desktop/huty/src/pages/participant/participant.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ParticipantPage);
    return ParticipantPage;
}());

//# sourceMappingURL=participant.js.map

/***/ })

});
//# sourceMappingURL=13.js.map