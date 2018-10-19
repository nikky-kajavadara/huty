webpackJsonp([2],{

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryPageModule", function() { return TryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__try__ = __webpack_require__(334);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TryPageModule = /** @class */ (function () {
    function TryPageModule() {
    }
    TryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__try__["a" /* TryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__try__["a" /* TryPage */]),
            ],
        })
    ], TryPageModule);
    return TryPageModule;
}());

//# sourceMappingURL=try.module.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TryPage; });
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
 * Generated class for the TryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TryPage = /** @class */ (function () {
    function TryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TryPage');
    };
    TryPage.prototype.ask = function ($try) {
        this.navCtrl.push($try);
    };
    TryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-try',template:/*ion-inline-start:"/Users/dhruvi/Desktop/huty/src/pages/try/try.html"*/'<!--\n  Generated template for the TryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n \n  <ion-navbar class="header"  hideBackButton>\n      <ion-title class="text">TRY</ion-title>\n      <ion-icon class="back" name="ios-arrow-back-outline"></ion-icon>\n      <ion-icon class="setting"  name="ios-settings-outline"></ion-icon>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  \n  <button ion-button (click)="ask(\'AskPage\')" class="btn btn1">1</button>\n  <button ion-button (click)="ask(\'AddParticipantPage\')" class="btn btn1">2</button>\n  <button ion-button (click)="ask(\'AddtimePage\')" class="btn btn1">3</button>\n  <button ion-button  (click)="ask(\'ChoosePage\')"  class="btn btn1">4</button>\n  <button ion-button  (click)="ask(\'ChoosenomPage\')" class="btn btn1">5</button>\n  <button ion-button  (click)="ask(\'CodegamePage\')" class="btn btn1">6</button>\n  <button ion-button (click)="ask(\'Credit1Page\')" class="btn btn1">7</button>\n  <button ion-button (click)="ask(\'Credit2Page\')"  class="btn btn1">8</button>\n  <button ion-button (click)="ask(\'FeedbackPage\')" class="btn btn1">9</button>\n  <button ion-button  (click)="ask(\'HitsupListPage\')" class="btn btn1">10</button>\n  <button ion-button (click)="ask(\'MaphitPage\')" class="btn btn1">11</button>\n  <button ion-button (click)="ask(\'NoOfParticipantPage\')" class="btn btn1">12</button>\n  <button ion-button (click)="ask(\'NomprofilePage\')" class="btn btn1">13</button>\n  <button ion-button (click)="ask(\'OrangehitPage\')" class="btn btn1">14</button>\n  <button ion-button (click)="ask(\'PaymentPage\')" class="btn btn1">15</button>\n  <button ion-button (click)="ask(\'ResultPage\')" class="btn btn1">16</button>\n  <button ion-button (click)="ask(\'ResultnomPage\')" class="btn btn1">17</button>\n  <button ion-button (click)="ask(\'SettingPage\')" class="btn btn1">18</button>\n  <button ion-button (click)="ask(\'SharePage\')" class="btn btn1">19</button>\n  <button ion-button (click)="ask(\'StatisticsPage\')" class="btn btn1">20</button>\n  <button ion-button (click)="ask(\'SurveyPage\')" class="btn btn1">21</button>\n  <button ion-button (click)="ask(\'VotePage\')" class="btn btn1">22</button>\n  <button ion-button (click)="ask(\'VotenomPage\')" class="btn btn1">23</button>\n</ion-content>\n'/*ion-inline-end:"/Users/dhruvi/Desktop/huty/src/pages/try/try.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TryPage);
    return TryPage;
}());

//# sourceMappingURL=try.js.map

/***/ })

});
//# sourceMappingURL=2.js.map