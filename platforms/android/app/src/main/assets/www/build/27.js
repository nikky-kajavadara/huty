webpackJsonp([27],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Credit1PageModule", function() { return Credit1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__credit1__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Credit1PageModule = /** @class */ (function () {
    function Credit1PageModule() {
    }
    Credit1PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__credit1__["a" /* Credit1Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__credit1__["a" /* Credit1Page */]),
            ],
        })
    ], Credit1PageModule);
    return Credit1PageModule;
}());

//# sourceMappingURL=credit1.module.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Credit1Page; });
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
 * Generated class for the Credit1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Credit1Page = /** @class */ (function () {
    function Credit1Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Credit1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Credit1Page');
    };
    Credit1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-credit1',template:/*ion-inline-start:"/Users/dhruvi/Desktop/huty/src/pages/credit1/credit1.html"*/'<!--\n  Generated template for the StatisticsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar class="header"  hideBackButton>\n        <ion-icon class="back" name="ios-arrow-back-outline"></ion-icon>\n      <ion-title class="text">CREDIT</ion-title>\n      <ion-icon class="setting"  name="ios-settings-outline"></ion-icon>\n      <ion-icon class="cart"  name="cart"></ion-icon>\n    </ion-navbar>\n  \n  </ion-header>\n\n\n\n<ion-content>\n      <p class="p-text">Ajouter du crédit :</p>\n      <div class="btn-container">\n          <button ion-button class="ni-button">3 ASKS</button>\n          <button ion-button  class="ni-button">10 ASKS</button>\n          <button ion-button class="ni-button">50 ASKS</button>\n          <button ion-button  class="ni-button">100 ASKS</button>\n      </div>\n      \n      <button ion-button class="btn ni-btn">Entrez un montant : ……. ASKS</button>\n      <p class="p-text">S’abonner :</p>\n\n      <div class="lbl-container">\n              <ion-label class="ni-label"> UP TO YOU <br>\n                19€ / mois <br>\n                2K HITS <br>\n                watermark</ion-label>\n              <ion-label class="ni-label"> UP TO PRO <br> \n                59€ / mois <br>\n                10K HITS</ion-label>\n         \n      </div>\n     \n          <button ion-button class="btn ni-btn">Total: 1,99€</button>\n          <button ion-button  class="btn ni-btn" style="margin-bottom:10px">Commande : <ion-icon name="card"></ion-icon></button>\n  \n  \n    \n    \n     \n</ion-content>\n<ion-footer>\n    <ion-toolbar>\n      <ion-title>PAYER</ion-title>\n    </ion-toolbar>\n  </ion-footer>'/*ion-inline-end:"/Users/dhruvi/Desktop/huty/src/pages/credit1/credit1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], Credit1Page);
    return Credit1Page;
}());

//# sourceMappingURL=credit1.js.map

/***/ })

});
//# sourceMappingURL=27.js.map