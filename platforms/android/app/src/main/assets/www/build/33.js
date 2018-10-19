webpackJsonp([33],{

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddParticipantPageModule", function() { return AddParticipantPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_participant__ = __webpack_require__(303);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddParticipantPageModule = /** @class */ (function () {
    function AddParticipantPageModule() {
    }
    AddParticipantPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_participant__["a" /* AddParticipantPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_participant__["a" /* AddParticipantPage */]),
            ],
        })
    ], AddParticipantPageModule);
    return AddParticipantPageModule;
}());

//# sourceMappingURL=add-participant.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddParticipantPage; });
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
 * Generated class for the AddParticipantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddParticipantPage = /** @class */ (function () {
    function AddParticipantPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddParticipantPage.prototype.bakcToPage = function () {
        this.navCtrl.pop();
    };
    AddParticipantPage.prototype.goToSetting = function () {
        this.navCtrl.push('SettingPage');
    };
    AddParticipantPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddParticipantPage');
    };
    AddParticipantPage.prototype.goToResult = function () {
        this.navCtrl.push("ResultPage");
    };
    AddParticipantPage.prototype.goToChoosePage = function () {
        this.navCtrl.push("ChoosePage");
    };
    AddParticipantPage.prototype.goToAddtimePage = function () {
        this.navCtrl.push("AddtimePage");
    };
    AddParticipantPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-participant',template:/*ion-inline-start:"/Users/dhruvi/Desktop/huty/src/pages/add-participant/add-participant.html"*/'<!--\n  Generated template for the AddParticipantPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header>\n\n  <ion-navbar class="header"  hideBackButton>\n    <ion-title class="text">ASK</ion-title>\n    <ion-icon (click)="bakcToPage()"  class="back" name="ios-arrow-back-outline"></ion-icon>\n    <ion-icon (click)="goToSetting()" class="setting" name="settings"></ion-icon>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content >\n      <span class="search-section">\n          <ion-searchbar\n            placeholder="Nom participant"\n            [(ngModel)]="myInput"\n            (ionInput)="onInput($event)"\n            (ionCancel)="onCancel($event)">\n        </ion-searchbar>\n     </span>\n  \n      <ion-img (click)=" goToChoosePage()" class="ni-img1" src="../../assets/imgs/rss.png"></ion-img>\n \n\n     <p class="button-section">\n      <ion-item>\n        <ion-label class="label">Durée : 12h00</ion-label>\n      </ion-item>\n        <button ion-button class="btn btngreen">START/STOP</button>\n      \n     </p>\n     <p class="button-section button-section2">\n      <ion-item>\n        <ion-label class="label label2">Reste 10h35:00</ion-label>\n      </ion-item>\n        <button ion-button class="btn btngreen">PLAY/PAUSE</button>\n      \n     </p>\n     <p  (click)=" goToAddtimePage()"class="textred ni-textred">Add time?</p>\n\n     <button ion-button class="btn">257 CONNECTES</button>\n\n     <!--slider-->\n    <p class="slider-container">\n      <ion-slides  [pager]="true" [slidesPerView]="3">\n          <ion-slide>\n            <ion-img  class="ni-img ni-center" src="../../assets/imgs/nom.png"></ion-img>\n            <h6>Nom</h6>\n          </ion-slide>\n          <ion-slide>\n              <ion-img  class="ni-img ni-center " src="../../assets/imgs/nom.png"></ion-img>\n              <h6>Nom</h6>\n          </ion-slide>\n          <ion-slide>\n              <ion-img  class="ni-img ni-center " src="../../assets/imgs/nom.png"></ion-img>\n              <h6>Nom</h6>\n          </ion-slide>\n          <button (click)="this.Slides.slidePrev()" class="backBtn"> \n            <ion-icon name="ios-arrow-back"></ion-icon> \n          </button>\n          <button (click)="this.Slides.slidePrev()" class="backBtn"> \n            <ion-icon name="ios-arrow-back"></ion-icon> \n          </button>\n          <button> \n            <ion-icon  (click)="goToChoosePage()" class="checkmark ni-checkmark" name="checkmark"></ion-icon>\n          </button>\n      </ion-slides>\n     </p>\n     <button ion-button class="btn">Ajouter participant</button>\n     <button (click)="goToResult()" ion-button style="margin-top:10px;margin-bottom:10px;" class="btn">CLASSEMENT</button>\n\n\n</ion-content>\n<ion-footer>\n    <ion-toolbar>\n      <ion-title (click)="goToChoosePage()" >SUIVANT </ion-title>\n    </ion-toolbar>\n  </ion-footer>\n'/*ion-inline-end:"/Users/dhruvi/Desktop/huty/src/pages/add-participant/add-participant.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AddParticipantPage);
    return AddParticipantPage;
}());

//# sourceMappingURL=add-participant.js.map

/***/ })

});
//# sourceMappingURL=33.js.map