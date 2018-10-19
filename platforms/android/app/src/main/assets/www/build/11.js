webpackJsonp([11],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
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
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.goToTry = function () {
        this.navCtrl.push('TryPage');
    };
    ProfilePage.prototype.goToMaphitPage = function () {
        this.navCtrl.push('MaphitPage');
    };
    ProfilePage.prototype.bakcToPage = function () {
        this.navCtrl.pop();
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/dhruvi/Desktop/huty/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content>\n    <p class="profile-section">\n        <span  class="span center">\n            <ion-img   class="imgprofile" src="../../assets/imgs/profile_background.png"></ion-img>\n            <p  class="text">PRO-profil</p>\n            <ion-icon class="ni-camera" name="camera"></ion-icon>\n            \n        </span> \n        \n        <ion-icon class="checkmark" name="checkmark"></ion-icon>\n        <ion-icon (click)="bakcToPage()" class="back"name="arrow-round-back"></ion-icon>\n\n    </p>\n  \n    <p class="placeholder-container">\n        <ion-input  class="placeholder1 ni-placeholder name center" type="text" placeholder="Name" value=""></ion-input>\n        <ion-input  class="placeholder2 ni-placeholder name center" type="text" placeholder="Prénom" value=""></ion-input>\n        <ion-input  class="borderup ni-placeholder center" type="text" placeholder="Société" value=""></ion-input>\n        <ion-input  class="borderup ni-placeholder center" type="text" placeholder="SIRET" value=""></ion-input>\n        <ion-input  class="borderup ni-placeholder center" type="text" placeholder="Site web" value=""></ion-input>\n        <ion-input  class="placeholder3 borderup ni-placeholder center" type="text" placeholder="Adresse" value=""></ion-input>\n        <ion-input  class="placeholder3 borderup ni-placeholder center" type="text" placeholder="Téléphone" value=""></ion-input>\n        <ion-input  class="placeholder3 borderup ni-placeholder center" type="text" placeholder="Bio" value=""></ion-input>\n        <ion-input  class="placeholder3 borderup ni-placeholder center" type="text" placeholder="Catégorie" value=""></ion-input>\n      </p>\n\n    <p class="btnreg">\n        <button ion-button  outline (click)="goToMaphitPage()" class="button center"><i class="fa fa-facebook" aria-hidden="true"></i>Enregistrer</button>\n        </p>\n    \n</ion-content>\n'/*ion-inline-end:"/Users/dhruvi/Desktop/huty/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=11.js.map