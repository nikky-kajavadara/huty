webpackJsonp([31],{

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AskPageModule", function() { return AskPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ask__ = __webpack_require__(305);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AskPageModule = /** @class */ (function () {
    function AskPageModule() {
    }
    AskPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ask__["a" /* AskPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ask__["a" /* AskPage */]),
            ],
        })
    ], AskPageModule);
    return AskPageModule;
}());

//# sourceMappingURL=ask.module.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AskPage; });
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
 * Generated class for the AskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AskPage = /** @class */ (function () {
    function AskPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AskPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AskPage');
    };
    AskPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ask',template:/*ion-inline-start:"D:\ionic\App\huty\src\pages\ask\ask.html"*/'<!--\n  Generated template for the AskPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  \n  <ion-navbar class="header"  hideBackButton >\n    <ion-title class="text">ASK</ion-title>\n    <ion-icon class="back" name="ios-arrow-back-outline"></ion-icon>\n    <ion-icon class="setting"  name="ios-settings-outline"></ion-icon>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="main-container">\n    <p style="height:20px"></p>\n  \n    <p class="text"><a  href=""  class="text link">Télécharger Un logo</a></p>\n    <p class="text"><a  href=""  class="text link">Télécharger une image de fond </a></p>\n    <p class="text"> <a  href=""  class="text link">Changer la couleur de fond</a></p>\n  </div>\n    \n   \n       \n</ion-content>\n<ion-footer>\n    <ion-toolbar>\n      <ion-title>SUIVANT</ion-title>\n    </ion-toolbar>\n  </ion-footer>\n'/*ion-inline-end:"D:\ionic\App\huty\src\pages\ask\ask.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AskPage);
    return AskPage;
}());

//# sourceMappingURL=ask.js.map

/***/ })

});
//# sourceMappingURL=31.js.map