webpackJsonp([10],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageModule", function() { return RegistrationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registration__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegistrationPageModule = /** @class */ (function () {
    function RegistrationPageModule() {
    }
    RegistrationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__registration__["a" /* RegistrationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__registration__["a" /* RegistrationPage */]),
            ],
        })
    ], RegistrationPageModule);
    return RegistrationPageModule;
}());

//# sourceMappingURL=registration.module.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationPage; });
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
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistrationPage = /** @class */ (function () {
    function RegistrationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegistrationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistrationPage');
    };
    RegistrationPage.prototype.goToProfile = function () {
        this.navCtrl.push('ProfilePage');
    };
    RegistrationPage.prototype.goToMaphitPage = function () {
        this.navCtrl.push('MaphitPage');
    };
    RegistrationPage.prototype.bakcToPage = function () {
        this.navCtrl.pop();
    };
    RegistrationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registration',template:/*ion-inline-start:"D:\ionic\App\huty\src\pages\registration\registration.html"*/'<!--\n  Generated template for the RegistrationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content>\n    <p class="profile-section">\n        <span  class="span center">\n            <ion-img  class="imgprofile" src="../../assets/imgs/profile.png"></ion-img>\n            <ion-icon class="ni-camera"  name="ios-camera-outline"></ion-icon>\n        </span> \n           \n            <ion-icon name="close" class="close" (click)=" bakcToPage()" ></ion-icon>\n    </p>\n        <div>\n            <p  class="text"><B>Profile user</B></p>\n        </div>\n    \n     <p class="placeholder-container">\n      <ion-input  class="placeholder1 ni-placeholder name center" type="text" placeholder="Name" value=""></ion-input>\n      <ion-input  class="placeholder2 ni-placeholder name center" type="text" placeholder="Surname" value=""></ion-input>\n      <ion-input  class="borderup ni-placeholder center" type="text" placeholder="Bio" value=""></ion-input>\n      <ion-input  class="borderup ni-placeholder center" type="text" placeholder="E-mail adress" value=""></ion-input>\n      <ion-input  class="borderup ni-placeholder center" type="text" placeholder="Gender" value=""></ion-input>\n      <ion-input  class="placeholder3 borderup ni-placeholder center" type="text" placeholder="Date of birth" value=""></ion-input>\n    </p>\n      \n        <p  (click)="goToProfile()" class="textred ni-textred">Are you pro?</p>\n    \n     <p class="btnreg">\n      <button ion-button  outline (click)="goToMaphitPage()" class="button center"><i class="fa fa-facebook" aria-hidden="true"></i>Enregistrer</button>\n      </p>\n      <div>\n        <p  class="text2">By signing up you agree to Terms of Service and Privacy Policy</p>\n     </div>\n\n      \n   \n</ion-content>\n'/*ion-inline-end:"D:\ionic\App\huty\src\pages\registration\registration.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RegistrationPage);
    return RegistrationPage;
}());

//# sourceMappingURL=registration.js.map

/***/ })

});
//# sourceMappingURL=10.js.map