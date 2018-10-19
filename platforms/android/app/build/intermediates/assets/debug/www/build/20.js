webpackJsonp([20],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HitsupListPageModule", function() { return HitsupListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hitsup_list__ = __webpack_require__(315);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HitsupListPageModule = /** @class */ (function () {
    function HitsupListPageModule() {
    }
    HitsupListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__hitsup_list__["a" /* HitsupListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__hitsup_list__["a" /* HitsupListPage */]),
            ],
        })
    ], HitsupListPageModule);
    return HitsupListPageModule;
}());

//# sourceMappingURL=hitsup-list.module.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HitsupListPage; });
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
 * Generated class for the HitsupListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HitsupListPage = /** @class */ (function () {
    function HitsupListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HitsupListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HitsupListPage');
    };
    HitsupListPage.prototype.goToSetting = function () {
        this.navCtrl.push('SettingPage');
    };
    HitsupListPage.prototype.goToProfile = function () {
        this.navCtrl.push('ProfilePage');
    };
    HitsupListPage.prototype.goToHitsupListPage = function () {
        this.navCtrl.push('HitsupListPage');
    };
    HitsupListPage.prototype.goToHitsupList2Page = function () {
        this.navCtrl.push('HitsupList2Page');
    };
    HitsupListPage.prototype.goToNomprofilePage = function () {
        this.navCtrl.push('NomprofilePage');
    };
    HitsupListPage.prototype.bakcToPage = function () {
        this.navCtrl.pop();
    };
    HitsupListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hitsup-list',template:/*ion-inline-start:"D:\ionic\App\huty\src\pages\hitsup-list\hitsup-list.html"*/'<!--\n  Generated template for the HitsupListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar class="header"  hideBackButton>\n      <ion-title class="text">HITSUP LIST</ion-title>\n      <ion-icon (click)="bakcToPage()"  class="back" style="opacity: 0;" name="ios-arrow-back-outline"></ion-icon>\n      <ion-icon (click)="goToSetting()" class="setting" name="settings"></ion-icon>\n    </ion-navbar>\n  </ion-header>\n\n    \n<ion-content>\n    <h1 class="labelblue title-txt">En cours :</h1>\n\n    <ion-card (click)="goToNomprofilePage()">\n       <ion-card-content>\n        <ion-card-title>\n          Nine Inch Nails Live\n          </ion-card-title>\n        <p>\n          The most popular industrial group ever, and largely\n          responsible for bringing the music to a mass audience.\n        </p>\n        <img class="thumb img1" src="assets/imgs/thumbs-up.png">\n        <ion-icon class="forward" name="ios-arrow-forward"></ion-icon>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card (click)="goToNomprofilePage()">\n      <ion-card-content>\n       <ion-card-title>\n        Lorem ipsom dolor sit amet?\n         </ion-card-title>\n       <p>\n        Temps restant:2h30<br>\n        Nombre de réponses:9\n       </p>\n       <img class="thumb img1" src="assets/imgs/thumbs-up.png">\n       <ion-icon class="forward" name="ios-arrow-forward"></ion-icon>\n     </ion-card-content>\n   </ion-card>\n <br>\n    <h1 class="labelblue title-txt">Terminées : </h1>\n    <ion-card>\n      <ion-card-content>\n        <ion-card-title>\n        Lorem ipsom dolor sit amet?\n          </ion-card-title>\n        <p>\n        Temps restant:2h30<br>\n        Nombre de réponses:9\n        </p>\n        <img class="thumb img1" src="assets/imgs/thumbs-up.png">\n        <ion-icon class="forward" name="ios-arrow-forward"></ion-icon>\n      </ion-card-content>\n    </ion-card>\n    \n</ion-content>\n \n<ion-footer>\n    <ion-toolbar>\n     \n      <ion-grid class="filter-block">\n        <ion-row>\n          <ion-col col-12>\n            <h3 class="lbl" (click)="bakcToPage()">TERMINER</h3>\n          </ion-col>\n          \n        </ion-row>    \n        </ion-grid>\n    </ion-toolbar>\n  </ion-footer>'/*ion-inline-end:"D:\ionic\App\huty\src\pages\hitsup-list\hitsup-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HitsupListPage);
    return HitsupListPage;
}());

//# sourceMappingURL=hitsup-list.js.map

/***/ })

});
//# sourceMappingURL=20.js.map