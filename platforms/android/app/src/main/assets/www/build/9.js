webpackJsonp([9],{

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultPageModule", function() { return ResultPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__result__ = __webpack_require__(327);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ResultPageModule = /** @class */ (function () {
    function ResultPageModule() {
    }
    ResultPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__result__["a" /* ResultPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__result__["a" /* ResultPage */]),
            ],
        })
    ], ResultPageModule);
    return ResultPageModule;
}());

//# sourceMappingURL=result.module.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultPage; });
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
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResultPage = /** @class */ (function () {
    function ResultPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ResultPage.prototype.bakcToPage = function () {
        this.navCtrl.pop();
    };
    ResultPage.prototype.goToSetting = function () {
        this.navCtrl.push('SettingPage');
    };
    ResultPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResultPage');
    };
    ResultPage.prototype.goTostatistics = function () {
        this.navCtrl.push("StatisticsPage");
    };
    ResultPage.prototype.goToVote = function () {
        this.navCtrl.push("VotePage");
    };
    ResultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-result',template:/*ion-inline-start:"/Users/dhruvi/Desktop/huty/src/pages/result/result.html"*/'<!--\n  Generated template for the ResultPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n  <ion-navbar class="header"  hideBackButton>\n    <ion-title class="text">CLASSEMENT</ion-title>\n    <ion-icon (click)="bakcToPage()" style="opacity: 0;" class="back" name="ios-arrow-back-outline"></ion-icon>\n    <ion-icon (click)="goToSetting()" class="setting" name="settings"></ion-icon>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col class="coll">\n        <div>\n          <img class="imgg " src="assets/imgs/green_like.png">\n        </div>\n        <h6>145</h6>\n\n      </ion-col>\n      <ion-col class="coll">\n        <div>\n          <img class="imgg " src="assets/imgs/cross_grey.png">\n        </div>\n        <h6>100</h6>\n\n      </ion-col>\n      <ion-col class="coll">\n        <div>\n          <img class="imgg" src="assets/imgs/dislike_red.png">\n        </div>\n        <h6>800</h6>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div class="content-section">\n    <ion-grid>\n      <ion-row>\n        <ion-col (click)="goToVote()">\n            <h6 class="no">10pt</h6>\n          <div>\n            <img src="assets/imgs/nom.png">\n          </div>\n          <h6>Nom</h6>\n          \n\n        </ion-col>\n        <ion-col (click)="goToVote()">\n          <h6 class="no">9pt</h6>\n          <div>\n            <img src="assets/imgs/nom.png">\n          </div>\n          <h6>Nom</h6>\n         \n\n        </ion-col>\n        <ion-col (click)="goToVote()">\n            <h6 class="no">8pt</h6>\n\n          <div>\n            <img src="assets/imgs/nom.png">\n          </div>\n          <h6>Nom</h6>\n         \n        </ion-col>\n\n      </ion-row>\n      <ion-row>\n        <ion-col (click)="goToVote()">\n            <h6 class="no">7pt</h6>\n\n          <div>\n            <img src="assets/imgs/nom.png">\n          </div>\n          <h6>Nom</h6>\n        \n        </ion-col>\n        <ion-col (click)="goToVote()">\n            <h6 class="no">6pt</h6>\n          <div>\n            <img src="assets/imgs/nom.png">\n          </div>\n          <h6>Nom</h6>\n         \n\n        </ion-col>\n        <ion-col (click)="goToVote()">\n            <h6 class="no">5pt</h6>\n          <div>\n            <img src="assets/imgs/nom.png">\n          </div>\n          <h6>Nom</h6>\n         \n\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n\n  </div>\n  <div class="center">\n      <p (click)="goTostatistics()" class="textred" style="text-decoration:none">Voir les statistics ?</p>\n  </div>\n  </ion-content>\n  \n  <ion-footer>\n    <ion-toolbar>\n      <ion-title (click)="bakcToPage()" >TERMINER</ion-title>\n    </ion-toolbar>\n  </ion-footer>'/*ion-inline-end:"/Users/dhruvi/Desktop/huty/src/pages/result/result.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ResultPage);
    return ResultPage;
}());

//# sourceMappingURL=result.js.map

/***/ })

});
//# sourceMappingURL=9.js.map