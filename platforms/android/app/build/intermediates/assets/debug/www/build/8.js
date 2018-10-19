webpackJsonp([8],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultnomPageModule", function() { return ResultnomPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resultnom__ = __webpack_require__(328);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ResultnomPageModule = /** @class */ (function () {
    function ResultnomPageModule() {
    }
    ResultnomPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__resultnom__["a" /* ResultnomPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__resultnom__["a" /* ResultnomPage */]),
            ],
        })
    ], ResultnomPageModule);
    return ResultnomPageModule;
}());

//# sourceMappingURL=resultnom.module.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultnomPage; });
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
 * Generated class for the ResultnomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResultnomPage = /** @class */ (function () {
    function ResultnomPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ResultnomPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResultnomPage');
    };
    ResultnomPage.prototype.bakcToPage = function () {
        this.navCtrl.pop();
    };
    ResultnomPage.prototype.goToSetting = function () {
        this.navCtrl.push('SettingPage');
    };
    ResultnomPage.prototype.goToFeedBack = function () {
        this.navCtrl.push('FeedbackPage');
    };
    ResultnomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resultnom',template:/*ion-inline-start:"D:\ionic\App\huty\src\pages\resultnom\resultnom.html"*/'<!--\n  Generated template for the ResultnomPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n  \n  <ion-header>\n\n      <ion-navbar class="header"  hideBackButton>\n        <ion-title class="text">RESULTATS</ion-title>\n        <ion-icon (click)="bakcToPage()"  class="back" name="ios-arrow-back-outline"></ion-icon>\n        <ion-icon (click)="goToSetting()" class="setting" name="settings"></ion-icon>\n      </ion-navbar>\n    \n    </ion-header>\n\n\n<ion-content>\n    <ion-grid>\n        <ion-row>\n          <ion-col align-self-center>\n              <h6 class="no">10pt</h6>\n            <div class="center">\n              <img src="assets/imgs/nom.png">\n            </div>\n            <h6  class=" no">Nom</h6>\n          </ion-col>\n        </ion-row>\n      \n    </ion-grid>\n\n    <ion-grid>\n        <ion-row>\n          <ion-col class="coll">\n             \n            <div  class="center">\n                <span class="center no">10pt</span>\n              <img class="imgg " src="assets/imgs/green_like.png">\n            </div>\n         \n    \n          </ion-col>\n          <ion-col class="coll">\n             \n            <div class="center">\n               <span class="center no ">6pt</span>\n              <img class="imgg " src="assets/imgs/cross_grey.png">\n            </div>\n           \n    \n          </ion-col>\n          <ion-col class="coll">\n              \n            <div  class="center"> \n                <span class="center no">8pt</span>\n              <img class="imgg" src="assets/imgs/dislike_red.png">\n            </div>\n            \n    \n          </ion-col>\n        </ion-row>\n      </ion-grid>\n</ion-content>\n<ion-footer>\n    <ion-toolbar>\n      <ion-title (click)="goToFeedBack()">ACCUEIL \n        </ion-title>\n    </ion-toolbar>\n  </ion-footer>'/*ion-inline-end:"D:\ionic\App\huty\src\pages\resultnom\resultnom.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ResultnomPage);
    return ResultnomPage;
}());

//# sourceMappingURL=resultnom.js.map

/***/ })

});
//# sourceMappingURL=8.js.map