webpackJsonp([4],{

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsPageModule", function() { return StatisticsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__statistics__ = __webpack_require__(332);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StatisticsPageModule = /** @class */ (function () {
    function StatisticsPageModule() {
    }
    StatisticsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__statistics__["a" /* StatisticsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__statistics__["a" /* StatisticsPage */]),
            ],
        })
    ], StatisticsPageModule);
    return StatisticsPageModule;
}());

//# sourceMappingURL=statistics.module.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsPage; });
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
 * Generated class for the StatisticsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StatisticsPage = /** @class */ (function () {
    function StatisticsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StatisticsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StatisticsPage');
    };
    StatisticsPage.prototype.bakcToPage = function () {
        this.navCtrl.pop();
    };
    StatisticsPage.prototype.goToSetting = function () {
        this.navCtrl.push('SettingPage');
    };
    StatisticsPage.prototype.goToAskLive = function () {
        this.navCtrl.push('AddParticipantPage');
    };
    StatisticsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-statistics',template:/*ion-inline-start:"D:\ionic\App\huty\src\pages\statistics\statistics.html"*/'<!--\n  Generated template for the StatisticsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n  <ion-header>\n\n    <ion-navbar class="header"  hideBackButton>\n      <ion-title class="text">STATISTICS</ion-title>\n      <ion-icon (click)="bakcToPage()"  class="back" name="ios-arrow-back-outline"></ion-icon>\n      <ion-icon (click)="goToSetting()" class="setting" name="settings"></ion-icon>\n    </ion-navbar>\n  </ion-header>\n  \n\n\n<ion-content>\n      <p class="p-text">Ajouter des statiques :</p>\n      <div class="btn-container">\n          <button ion-button class="ni-button">%</button>\n          <button ion-button  class="ni-button">Gender M/F</button>\n          <button ion-button class="ni-button">Age</button>\n          <button ion-button  class="ni-button">Nationalité</button>\n          <button ion-button class="ni-button">Localisation</button>\n          <button ion-button  class="ni-button">TXT</button>\n          <button ion-button class="ni-button">TXT</button>\n          <button ion-button  class="ni-button">TXT</button>\n        \n      </div>\n      <button ion-button class="btn ni-btn">Total: 1,99€</button>\n      <button ion-button  class="btn ni-btn" style="margin-bottom:10px">Commande : <ion-icon name="card"></ion-icon></button>\n      <p href="" style="text-decoration:none;text-align:center" class="textred center">S’abonner ?</p>\n    \n    \n     \n</ion-content>\n<ion-footer>\n    <ion-toolbar>\n      <ion-title (click)="goToAskLive()" >PAYER</ion-title>\n    </ion-toolbar>\n  </ion-footer>'/*ion-inline-end:"D:\ionic\App\huty\src\pages\statistics\statistics.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], StatisticsPage);
    return StatisticsPage;
}());

//# sourceMappingURL=statistics.js.map

/***/ })

});
//# sourceMappingURL=4.js.map