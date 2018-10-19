webpackJsonp([3],{

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPageModule", function() { return SurveyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__survey__ = __webpack_require__(333);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SurveyPageModule = /** @class */ (function () {
    function SurveyPageModule() {
    }
    SurveyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__survey__["a" /* SurveyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__survey__["a" /* SurveyPage */]),
            ],
        })
    ], SurveyPageModule);
    return SurveyPageModule;
}());

//# sourceMappingURL=survey.module.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPage; });
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
 * Generated class for the SurveyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SurveyPage = /** @class */ (function () {
    function SurveyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SurveyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SurveyPage');
    };
    SurveyPage.prototype.goToMaphitPage = function () {
        this.navCtrl.push('MaphitPage');
    };
    SurveyPage.prototype.gotoSuivant = function () {
        this.navCtrl.push('NoOfParticipantPage');
    };
    SurveyPage.prototype.bakcToPage = function () {
        this.navCtrl.pop();
    };
    SurveyPage.prototype.goToSetting = function () {
        this.navCtrl.push('SettingPage');
    };
    SurveyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-survey',template:/*ion-inline-start:"D:\ionic\App\huty\src\pages\survey\survey.html"*/'<!--\n  Generated template for the SurveyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n  <ion-navbar class="header"  hideBackButton>\n    <ion-title class="text">ASK LIVE</ion-title>\n    <ion-icon (click)="bakcToPage()"  class="back" name="ios-arrow-back-outline"></ion-icon>\n    <ion-icon (click)="goToSetting()" class="setting" name="settings"></ion-icon>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n      <p class="img-container"></p>\n    <ion-list  >\n      <ion-item>\n        <ion-label fixed>Nom de sondage :</ion-label>\n        <ion-input type="text" value=""></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label  fixed>Catégorie :</ion-label>\n        <ion-input type="text" value=""></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label   fixed>Description :</ion-label>\n        <ion-input type="text" value=""></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label   fixed>Lien web :</ion-label>\n        <ion-input type="text" value=""></ion-input>\n    </ion-item>\n  </ion-list>\n\n      \n    <p class="p-text">Autoriser publication des résultats :</p>\n\n        <div class="btn-container">\n            <button ion-button class="ni-button"> Aux participants</button>\n            <button ion-button  class="ni-button">Sur les reseaux</button>\n        </div>\n      <p class="p-text">Autoriser participation GéoLocalisé :</p>\n      <div class="btn-container">\n          <button ion-button class="ni-button">50m autour</button>\n          <button ion-button  class="ni-button">100m</button>\n      </div>\n\n      \n\n\n\n</ion-content>\n<ion-footer>\n    <ion-toolbar (click)="gotoSuivant()" >\n      <ion-title >SUIVANT</ion-title>\n    </ion-toolbar>\n  </ion-footer>\n'/*ion-inline-end:"D:\ionic\App\huty\src\pages\survey\survey.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SurveyPage);
    return SurveyPage;
}());

//# sourceMappingURL=survey.js.map

/***/ })

});
//# sourceMappingURL=3.js.map