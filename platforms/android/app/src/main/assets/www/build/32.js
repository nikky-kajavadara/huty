webpackJsonp([32],{

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddtimePageModule", function() { return AddtimePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addtime__ = __webpack_require__(304);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddtimePageModule = /** @class */ (function () {
    function AddtimePageModule() {
    }
    AddtimePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__addtime__["a" /* AddtimePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addtime__["a" /* AddtimePage */]),
            ],
        })
    ], AddtimePageModule);
    return AddtimePageModule;
}());

//# sourceMappingURL=addtime.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddtimePage; });
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
 * Generated class for the AddtimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddtimePage = /** @class */ (function () {
    function AddtimePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddtimePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddtimePage');
    };
    AddtimePage.prototype.bakcToPage = function () {
        this.navCtrl.pop();
    };
    AddtimePage.prototype.goToSetting = function () {
        this.navCtrl.push('SettingPage');
    };
    AddtimePage.prototype.goToAksPage = function () {
        this.navCtrl.push('AddParticipantPage');
    };
    AddtimePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addtime',template:/*ion-inline-start:"/Users/dhruvi/Desktop/huty/src/pages/addtime/addtime.html"*/'<!--\n  Generated template for the AddtimePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n  <ion-header>\n\n    <ion-navbar class="header"  hideBackButton>\n      <ion-title class="text">ADD TIME</ion-title>\n      <ion-icon (click)="bakcToPage()"  class="back" name="ios-arrow-back-outline"></ion-icon>\n      <ion-icon (click)="goToSetting()" class="setting" name="settings"></ion-icon>\n    </ion-navbar>\n  </ion-header>\n  \n\n<ion-content>\n      <p class="p-text">Ajouter du temps (Pros only) :</p>\n      <div class="btn-container">\n          <button ion-button class="ni-button">12 Heures</button>\n          <button ion-button  class="ni-button">24 Heures</button>\n          <button ion-button class="ni-button">48 Heures</button>\n          <button ion-button  class="ni-button">1 Week</button>\n          <button ion-button class="ni-button">1 Month</button>\n          <button ion-button  class="ni-button">3 Months</button>\n          <button ion-button class="ni-button">6 Months</button>\n          <button ion-button  class="ni-button">1 Year</button>\n        \n      </div>\n     \n      <button ion-button  class="btn ni-btn" style="margin-bottom:10px">Total: 1,99€</button>\n    \n    \n     \n</ion-content>\n<ion-footer>\n    <ion-toolbar>\n      <ion-title (click)="goToAksPage()" >PAYER</ion-title>\n    </ion-toolbar>\n  </ion-footer>'/*ion-inline-end:"/Users/dhruvi/Desktop/huty/src/pages/addtime/addtime.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AddtimePage);
    return AddtimePage;
}());

//# sourceMappingURL=addtime.js.map

/***/ })

});
//# sourceMappingURL=32.js.map