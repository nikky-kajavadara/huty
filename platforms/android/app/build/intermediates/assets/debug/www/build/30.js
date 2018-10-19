webpackJsonp([30],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoosePageModule", function() { return ChoosePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__choose__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChoosePageModule = /** @class */ (function () {
    function ChoosePageModule() {
    }
    ChoosePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__choose__["a" /* ChoosePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__choose__["a" /* ChoosePage */]),
            ],
        })
    ], ChoosePageModule);
    return ChoosePageModule;
}());

//# sourceMappingURL=choose.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChoosePage; });
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
 * Generated class for the ChoosePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChoosePage = /** @class */ (function () {
    function ChoosePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChoosePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChoosePage');
    };
    ChoosePage.prototype.goTostatistics = function () {
        this.navCtrl.push("StatisticsPage");
    };
    ChoosePage.prototype.goToVotePage = function () {
        this.navCtrl.push("VotePage");
    };
    ChoosePage.prototype.bakcToPage = function () {
        this.navCtrl.pop();
    };
    ChoosePage.prototype.goToSetting = function () {
        this.navCtrl.push('SettingPage');
    };
    ChoosePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-choose',template:/*ion-inline-start:"D:\ionic\App\huty\src\pages\choose\choose.html"*/'<!--\n  Generated template for the ChoosePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header>\n\n  <ion-navbar class="header"  hideBackButton>\n    <ion-title class="text">ASK Live</ion-title>\n    <ion-icon (click)="bakcToPage()"  class="back" name="ios-arrow-back-outline"></ion-icon>\n    <ion-icon (click)="goToSetting()" class="setting" name="settings"></ion-icon>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n  <div class="content-section">\n    <p class="button-section">\n      <ion-item>\n        <ion-label class="label">Durée : 12h00</ion-label>\n      </ion-item>\n      <button ion-button class="btn btngreen">START/STOP</button>\n\n    </p>\n    <p class="button-section button-section2">\n      <ion-item>\n        <ion-label class="label label2">Reste 10h35:00</ion-label>\n      </ion-item>\n      <button ion-button class="btn btngreen">PLAY/PAUSE</button>\n\n    </p>\n    <button ion-button class="btn btnred">ON AIR</button>\n\n\n    <ion-grid>\n      <ion-row>\n        <ion-col class="col" (click)=" goToVotePage()">\n          <div>\n            <img src="assets/imgs/nom.png">\n          </div>\n          <h6>Nom</h6>\n          <h5 class="no">1</h5>\n          <ion-icon class="close" name="close"></ion-icon>\n        </ion-col>\n        <ion-col class="col" (click)=" goToVotePage()">\n          <div>\n            <img src="assets/imgs/nom.png">\n          </div>\n          <h6>Nom</h6>\n          <h5 class="no">2</h5>\n          <ion-icon class="close" name="close"></ion-icon>\n        </ion-col>\n        <ion-col class="col" (click)=" goToVotePage()">\n          <div>\n            <img src="assets/imgs/nom.png">\n          </div>\n          <h6>Nom</h6>\n          <h5 class="no">3</h5>\n          <ion-icon class="close" name="close"></ion-icon>\n        </ion-col>\n\n      </ion-row>\n      <ion-row>\n        <ion-col class="col" (click)=" goToVotePage()">\n          <div>\n            <img src="assets/imgs/nom.png">\n          </div>\n          <h6>Nom</h6>\n          <h5 class="no">4</h5>\n          <ion-icon class="close" name="close"></ion-icon>\n        </ion-col>\n        <ion-col class="col" (click)=" goToVotePage()">\n          <div>\n            <img src="assets/imgs/nom.png">\n          </div>\n          <h6>Nom</h6>\n          <h5 class="no">5</h5>\n          <ion-icon class="close" name="close"></ion-icon>\n        </ion-col>\n        <ion-col class="col" (click)=" goToVotePage()">\n          <div>\n            <img src="assets/imgs/nom.png">\n          </div>\n          <h6>Nom</h6>\n          <h5 class="no">6</h5>\n          <ion-icon class="close" name="close"></ion-icon>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n\n  </div>\n  <div class="center">\n    <p  (click)="goTostatistics()" class="textred" style="text-decoration:none">Voir les statistics ?</p>\n</div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-title>CHOISIR</ion-title>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"D:\ionic\App\huty\src\pages\choose\choose.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ChoosePage);
    return ChoosePage;
}());

//# sourceMappingURL=choose.js.map

/***/ })

});
//# sourceMappingURL=30.js.map