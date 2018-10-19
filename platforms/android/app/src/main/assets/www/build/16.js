webpackJsonp([16],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NomprofilePageModule", function() { return NomprofilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nomprofile__ = __webpack_require__(320);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NomprofilePageModule = /** @class */ (function () {
    function NomprofilePageModule() {
    }
    NomprofilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__nomprofile__["a" /* NomprofilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__nomprofile__["a" /* NomprofilePage */]),
            ],
        })
    ], NomprofilePageModule);
    return NomprofilePageModule;
}());

//# sourceMappingURL=nomprofile.module.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NomprofilePage; });
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
 * Generated class for the NomprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NomprofilePage = /** @class */ (function () {
    function NomprofilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NomprofilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NomprofilePage');
    };
    NomprofilePage.prototype.goToVotePage = function () {
        this.navCtrl.push('VotePage');
    };
    NomprofilePage.prototype.bakcToPage = function () {
        this.navCtrl.pop();
    };
    NomprofilePage.prototype.goToSetting = function () {
        this.navCtrl.push('SettingPage');
    };
    NomprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nomprofile',template:/*ion-inline-start:"/Users/dhruvi/Desktop/huty/src/pages/nomprofile/nomprofile.html"*/'<!--\n  Generated template for the NomprofilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar class="header"  hideBackButton>\n        <ion-title class="text">HITS LIVE</ion-title>\n        <ion-icon (click)="bakcToPage()" class="back" name="ios-arrow-back-outline"></ion-icon>\n        <ion-icon class="setting" name="settings"></ion-icon>\n      </ion-navbar>\n    </ion-header>\n\n\n<ion-content>\n    <h4 class="text1 center">NOM Profil</h4>\n\n    <div class="center imgg">\n        <img src="assets/imgs/nom.png">\n      </div>\n\n      <div class="input-back">\n          <p class="textblue">Description :<p>\n          <p class="textgray">bringing the music to a mass audience.</p>\n        </div>\n        <div (click)="goToVotePage()" class="input-back">\n        <p class="textred" >Messagerie temps réel:<p>\n        <p class="textgray">The most popular industrial group ever, and largely\n                responsible for bringing the music to a mass audience.</p>\n        </div>\n      \n       \n</ion-content>\n<ion-footer>\n    <ion-toolbar>\n      <ion-title>SUIVANT\n        </ion-title>\n    </ion-toolbar>\n  </ion-footer>'/*ion-inline-end:"/Users/dhruvi/Desktop/huty/src/pages/nomprofile/nomprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], NomprofilePage);
    return NomprofilePage;
}());

//# sourceMappingURL=nomprofile.js.map

/***/ })

});
//# sourceMappingURL=16.js.map