webpackJsonp([1],{

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VotePageModule", function() { return VotePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vote__ = __webpack_require__(335);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VotePageModule = /** @class */ (function () {
    function VotePageModule() {
    }
    VotePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__vote__["a" /* VotePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__vote__["a" /* VotePage */]),
            ],
        })
    ], VotePageModule);
    return VotePageModule;
}());

//# sourceMappingURL=vote.module.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VotePage; });
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
 * Generated class for the VotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VotePage = /** @class */ (function () {
    function VotePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    VotePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VotePage');
    };
    VotePage.prototype.bakcToPage = function () {
        this.navCtrl.pop();
    };
    VotePage.prototype.goToSetting = function () {
        this.navCtrl.push('SettingPage');
    };
    VotePage.prototype.goToAskLive = function () {
        this.navCtrl.push('AddParticipantPage');
    };
    VotePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vote',template:/*ion-inline-start:"/Users/dhruvi/Desktop/huty/src/pages/vote/vote.html"*/'<!--\n  Generated template for the VotePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n  <ion-header>\n\n    <ion-navbar class="header"  hideBackButton>\n      <ion-title class="text">STATASTICK PLAYER</ion-title>\n      <ion-icon (click)="bakcToPage()"  class="back" name="ios-arrow-back-outline"></ion-icon>\n      <ion-icon (click)="goToSetting()" class="setting" name="settings"></ion-icon>\n    </ion-navbar>\n  </ion-header>\n\n  \n\n<ion-content>\n    <span class="search-section">\n        <ion-searchbar\n          placeholder="Nom participant"\n          [(ngModel)]="myInput"\n          (ionInput)="onInput($event)"\n          (ionCancel)="onCancel($event)">\n      </ion-searchbar>\n   </span>\n   <button ion-button class="btn btnred">ON AIR</button>\n\n   <ion-grid>\n      <ion-row>\n        <ion-col class="coll">\n          <div class="nom"><img src="assets/imgs/nom.png"> <h5>Nom</h5></div>\n         \n          <h5 class="no">1</h5>\n          <h3 class="count">+1</h3>\n          <h3 class="pt">10pt</h3>\n          <ion-icon  class="close" name="close"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <div class="input-back">\n          <p class="textblue">Description :<p>\n          <p class="textgray">dffgbhhghjhkhk</p>\n            <p class="textred">Messagerie temps réel:</p>\n            <p class="textgray">dffgbhhghjhkhk</p>\n        \n        </div>\n    \n\n      <ion-grid>\n          <ion-row>\n            <ion-col>\n              <div><img class="imgg" src="assets/imgs/green_like.png"></div>\n              <h6>145</h6>\n             \n            </ion-col>\n            <ion-col>\n                <div><img class="imgg"  src="assets/imgs/cross_grey.png"></div>\n                <h6>100</h6>\n               \n              </ion-col>\n              <ion-col>\n                  <div><img class="imgg"  src="assets/imgs/dislike_red.png"></div>\n                  <h6>800</h6>\n                 \n                </ion-col>\n              </ion-row>\n            </ion-grid>\n\n</ion-content>\n<ion-footer>\n    <ion-toolbar>\n      <ion-title (click)="goToAskLive()">FERMER</ion-title>\n    </ion-toolbar>\n  </ion-footer>\n\n'/*ion-inline-end:"/Users/dhruvi/Desktop/huty/src/pages/vote/vote.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], VotePage);
    return VotePage;
}());

//# sourceMappingURL=vote.js.map

/***/ })

});
//# sourceMappingURL=1.js.map