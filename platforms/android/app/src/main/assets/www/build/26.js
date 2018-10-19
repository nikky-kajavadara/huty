webpackJsonp([26],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Credit2PageModule", function() { return Credit2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__credit2__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Credit2PageModule = /** @class */ (function () {
    function Credit2PageModule() {
    }
    Credit2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__credit2__["a" /* Credit2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__credit2__["a" /* Credit2Page */]),
            ],
        })
    ], Credit2PageModule);
    return Credit2PageModule;
}());

//# sourceMappingURL=credit2.module.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Credit2Page; });
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
 * Generated class for the Credit2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Credit2Page = /** @class */ (function () {
    function Credit2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Credit2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Credit2Page');
    };
    Credit2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-credit2',template:/*ion-inline-start:"/Users/dhruvi/Desktop/huty/src/pages/credit2/credit2.html"*/'<!--\n  Generated template for the Credit2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar class="header"  hideBackButton>\n        <ion-icon class="back" name="ios-arrow-back-outline"></ion-icon>\n      <ion-title class="text">CREDIT</ion-title>\n      <ion-icon class="setting"  name="ios-settings-outline"></ion-icon>\n      <ion-icon class="cart"  name="cart"></ion-icon>\n    </ion-navbar>\n  \n  </ion-header>\n\n\n<ion-content>\n  <div class="lbl-container" style="margin-top: 15px;height: 307px;" >\n    <ion-label class="ni-label"> UP TO PRO+<br>\n        120€ / mois<br>\n        50K HITS <br>\n    </ion-label>\n    </div>\n      <button ion-button class="btn ni-btn">Total: 1,99€</button>\n          <button ion-button  class="btn ni-btn" style="margin-bottom:10px">Commande : <ion-icon name="card"></ion-icon></button>\n</ion-content>\n<ion-footer>\n    <ion-toolbar>\n      <ion-title>PAYER</ion-title>\n    </ion-toolbar>\n  </ion-footer>'/*ion-inline-end:"/Users/dhruvi/Desktop/huty/src/pages/credit2/credit2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], Credit2Page);
    return Credit2Page;
}());

//# sourceMappingURL=credit2.js.map

/***/ })

});
//# sourceMappingURL=26.js.map