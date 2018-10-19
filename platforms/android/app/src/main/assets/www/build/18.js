webpackJsonp([18],{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaphitPageModule", function() { return MaphitPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__maphit__ = __webpack_require__(317);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaphitPageModule = /** @class */ (function () {
    function MaphitPageModule() {
    }
    MaphitPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__maphit__["a" /* MaphitPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__maphit__["a" /* MaphitPage */]),
            ],
        })
    ], MaphitPageModule);
    return MaphitPageModule;
}());

//# sourceMappingURL=maphit.module.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaphitPage; });
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
 * Generated class for the MaphitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MaphitPage = /** @class */ (function () {
    function MaphitPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    /*  asklive(){
        const alert = this.alertCtrl.create({
          title: 'ASK LIVE',
          subTitle: '',
          cssClass: 'myclass',
          buttons: ['OK']
        });
        alert.present();
      }*/
    MaphitPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MaphitPage');
    };
    MaphitPage.prototype.goToProfile = function () {
        this.navCtrl.push('ProfilePage');
    };
    MaphitPage.prototype.goToHitsupListPage = function () {
        this.navCtrl.push('HitsupListPage');
    };
    MaphitPage.prototype.goToHitsupList2Page = function () {
        this.navCtrl.push('HitsupList2Page');
    };
    MaphitPage.prototype.goToNomprofilePage = function () {
        this.navCtrl.push('NomprofilePage');
    };
    MaphitPage.prototype.asklive = function () {
        this.navCtrl.push('SurveyPage');
    };
    MaphitPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-maphit',template:/*ion-inline-start:"/Users/dhruvi/Desktop/huty/src/pages/maphit/maphit.html"*/'<!--\n  Generated template for the MaphitPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar class="header"  hideBackButton>\n        <ion-title class="text">WHERE CAN I HIT ?</ion-title>\n        <ion-icon (click)="goToProfile()" class="setting"  name="settings"></ion-icon>\n      </ion-navbar>\n    \n</ion-header>\n\n\n<ion-content  class="map">\n   \n\n    <span class="search-section">\n        <ion-searchbar\n          placeholder="Nom participant"\n          [(ngModel)]="myInput"\n          (ionInput)="onInput($event)"\n          (ionCancel)="onCancel($event)">\n      </ion-searchbar>\n   </span>\n   <span class="ni-img">\n      <ion-img class="network-img" src="../../assets/imgs/network.png"></ion-img>\n     </span>   \n\n   <button ion-button class="ni-button" (click)="goToNomprofilePage()">Code jeux : Ex 5690</button>\n    \n</ion-content>\n<ion-footer>\n    <ion-toolbar>\n     \n      <ion-grid class="filter-block">\n        <ion-row>\n          <ion-col>\n            <h3 (click)="asklive()" class="lbl">ASK</h3>\n          </ion-col>\n          <ion-col>\n            <ion-icon (click)="goToHitsupListPage()" class="icon1" name="ios-list"></ion-icon>\n          </ion-col>\n          <ion-col>\n            <img class="imgg"src="../../assets/imgs/location.png">\n          </ion-col>\n          <ion-col>\n            <h3 class="lbl" (click)="goToHitsupList2Page()">HIT</h3>\n          </ion-col>\n          <ion-col>\n            <ion-icon class="icon2" name="logo-usd"></ion-icon>\n          </ion-col>\n        </ion-row>    \n        </ion-grid>\n    </ion-toolbar>\n  </ion-footer>'/*ion-inline-end:"/Users/dhruvi/Desktop/huty/src/pages/maphit/maphit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MaphitPage);
    return MaphitPage;
}());

//# sourceMappingURL=maphit.js.map

/***/ })

});
//# sourceMappingURL=18.js.map