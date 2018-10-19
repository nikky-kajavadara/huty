webpackJsonp([20],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HitsupList2PageModule", function() { return HitsupList2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hitsup_list2__ = __webpack_require__(316);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HitsupList2PageModule = /** @class */ (function () {
    function HitsupList2PageModule() {
    }
    HitsupList2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__hitsup_list2__["a" /* HitsupList2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__hitsup_list2__["a" /* HitsupList2Page */]),
            ],
        })
    ], HitsupList2PageModule);
    return HitsupList2PageModule;
}());

//# sourceMappingURL=hitsup-list2.module.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HitsupList2Page; });
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
 * Generated class for the HitsupList2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HitsupList2Page = /** @class */ (function () {
    function HitsupList2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HitsupList2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HitsupList2Page');
    };
    HitsupList2Page.prototype.goToSetting = function () {
        this.navCtrl.push('SettingPage');
    };
    HitsupList2Page.prototype.goToProfile = function () {
        this.navCtrl.push('ProfilePage');
    };
    HitsupList2Page.prototype.goToHitsupListPage = function () {
        this.navCtrl.push('HitsupListPage');
    };
    HitsupList2Page.prototype.goToHitsupList2Page = function () {
        this.navCtrl.push('HitsupList2Page');
    };
    HitsupList2Page.prototype.goToNomprofilePage = function () {
        this.navCtrl.push('HitprofilePage');
    };
    HitsupList2Page.prototype.bakcToPage = function () {
        this.navCtrl.pop();
    };
    HitsupList2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hitsup-list2',template:/*ion-inline-start:"/Users/dhruvi/Desktop/huty/src/pages/hitsup-list2/hitsup-list2.html"*/'<!--\n  Generated template for the HitsupList2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n    <ion-navbar class="header"  hideBackButton>\n      <ion-title class="text">HITSUP LIST</ion-title>\n      <ion-icon (click)="bakcToPage()"  class="back" name="ios-arrow-back-outline"></ion-icon>\n      <ion-icon (click)="goToSetting()" class="setting" name="settings"></ion-icon>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content>\n    <span class="search-section">\n        <ion-searchbar\n          placeholder="Nom participant"\n          [(ngModel)]="myInput"\n          (ionInput)="onInput($event)"\n          (ionCancel)="onCancel($event)">\n      </ion-searchbar>\n   </span>\n   <span class="ni-img">\n      <ion-img  class="network-img" src="../../assets/imgs/network.png"></ion-img>\n     </span>   \n\n\n    <h1 class="labelblue title-txt">En cours :</h1>\n\n    <ion-card (click)="goToNomprofilePage()">\n        <ion-card-content>\n         <ion-card-title>\n           Nine Inch Nails Live\n           </ion-card-title>\n         <p>\n           The most popular industrial group ever, and largely\n           responsible for bringing the music to a mass audience.\n         </p>\n         <img class="thumb img1" src="assets/imgs/thumbs-up.png">\n         <ion-icon class="forward" name="ios-arrow-forward"></ion-icon>\n       </ion-card-content>\n     </ion-card>\n \n     <ion-card (click)="goToNomprofilePage()">\n       <ion-card-content>\n        <ion-card-title>\n         Lorem ipsom dolor sit amet?\n          </ion-card-title>\n        <p>\n         Temps restant:2h30<br>\n         Nombre de réponses:9\n        </p>\n        <img class="thumb img1" src="assets/imgs/thumbs-up.png">\n        <ion-icon class="forward" name="ios-arrow-forward"></ion-icon>\n      </ion-card-content>\n    </ion-card>\n\n          <h1 class="labelblue title-txt">Terminées : </h1>\n  \n              <ion-card (click)="goToNomprofilePage()">\n                  <ion-card-content>\n                   <ion-card-title>\n                    Lorem ipsom dolor sit amet?\n                     </ion-card-title>\n                   <p>\n                    Temps restant:2h30<br>\n                    Nombre de réponses:9\n                   </p>\n                   <img class="thumb img1 smiley" src="assets/imgs/smiley.png">\n                   <ion-icon class="forward"  name="ios-arrow-forward"></ion-icon>\n                 </ion-card-content>\n               </ion-card>\n\n</ion-content>\n<ion-footer>\n    <ion-toolbar>\n     \n      <ion-grid class="filter-block">\n        <ion-row>\n          <ion-col>\n            <h3 (click)="asklive()" class="lbl">ASK</h3>\n          </ion-col>\n          <ion-col>\n            <ion-icon (click)="goToHitsupListPage()" class="icon1" name="ios-list"></ion-icon>\n          </ion-col>\n          <ion-col>\n            <img class="imgg"src="../../assets/imgs/location.png">\n          </ion-col>\n          <ion-col>\n            <h3 class="lbl" (click)="goToHitsupList2Page()">HIT</h3>\n          </ion-col>\n          <ion-col>\n            <ion-icon class="icon2" name="logo-usd"></ion-icon>\n          </ion-col>\n        </ion-row>    \n        </ion-grid>\n    </ion-toolbar>\n  </ion-footer>'/*ion-inline-end:"/Users/dhruvi/Desktop/huty/src/pages/hitsup-list2/hitsup-list2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HitsupList2Page);
    return HitsupList2Page;
}());

//# sourceMappingURL=hitsup-list2.js.map

/***/ })

});
//# sourceMappingURL=20.js.map