webpackJsonp([25],{

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditpwdPageModule", function() { return EditpwdPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editpwd__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditpwdPageModule = /** @class */ (function () {
    function EditpwdPageModule() {
    }
    EditpwdPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__editpwd__["a" /* EditpwdPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__editpwd__["a" /* EditpwdPage */]),
            ],
        })
    ], EditpwdPageModule);
    return EditpwdPageModule;
}());

//# sourceMappingURL=editpwd.module.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditpwdPage; });
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
 * Generated class for the EditpwdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditpwdPage = /** @class */ (function () {
    function EditpwdPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EditpwdPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditpwdPage');
    };
    EditpwdPage.prototype.goToNotification = function () {
        this.navCtrl.push('NotificationPage');
    };
    EditpwdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editpwd',template:/*ion-inline-start:"/Users/dhruvi/Desktop/huty/src/pages/editpwd/editpwd.html"*/'<!--\n  Generated template for the EditpwdPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content >\n    <div class="main-container">\n        <p  class="text"><B>Changer de mots de passe</B></p>\n        <ion-icon name="close" class="close"></ion-icon>\n    </div>\n    <p class="placeholder-container">\n        <ion-input  class="placeholder1 ni-placeholder center" type="text" placeholder="Mots de passe actuel" value=""></ion-input>\n        <ion-input  class="borderup ni-placeholder center" type="text" placeholder="Nouveau mot de passe" value=""></ion-input>\n        <ion-input  class="placeholder3 borderup ni-placeholder center" type="text" placeholder="Confimez le nouveau" value=""></ion-input>\n      </p>\n      <p class="btnvalidate">\n        <button ion-button   (click)="goToNotification()" class="button center"><i class="fa fa-facebook" aria-hidden="true"></i>Enregistrer</button>\n        </p> \n         <p  class="text2">By signing up you agree to Terms of Service and Privacy Policy</p>\n\n</ion-content>\n'/*ion-inline-end:"/Users/dhruvi/Desktop/huty/src/pages/editpwd/editpwd.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EditpwdPage);
    return EditpwdPage;
}());

//# sourceMappingURL=editpwd.js.map

/***/ })

});
//# sourceMappingURL=25.js.map