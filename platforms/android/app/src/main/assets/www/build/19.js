webpackJsonp([19],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.goToEditpwd = function () {
        this.navCtrl.push('EditpwdPage');
    };
    LoginPage.prototype.goToHomePage = function () {
        this.navCtrl.push("MaphitPage");
    };
    LoginPage.prototype.bakcToPage = function () {
        this.navCtrl.pop();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/dhruvi/Desktop/huty/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n    <p class="login-section">\n      <ion-img  class="ni-img" src="../../assets/imgs/huty_icon.png"></ion-img>\n      <ion-icon name="close" class="ni-close" (click)=" bakcToPage()"></ion-icon>\n    </p>\n    <div>\n      <p  class="text"><B>Hi!</B></p>\n      <p  class="text" style="margin-bottom:15px;"><B>Welcome Back</B></p>\n   </div>\n    <p class="input">\n      <ion-input  class="placeholder1 ni-placeholder center" type="text" placeholder="Email" value=""></ion-input>\n      <ion-input  class="placeholder2 ni-placeholder center" type="password" placeholder="Password"></ion-input>\n    </p>\n    <p class="btnlogin">\n      <button ion-button outline text-uppercase  (click)="goToHomePage()" class="button btnlogin center">Connexion &nbsp;&nbsp;<ion-icon name="arrow-round-forward"  ></ion-icon></button>\n    </p>\n    <div class="link">\n      <a href="javascript:void(0)"  (click)="goToEditpwd()" class="labelblue"><b>Mot de passe oublie?</b></a>\n    </div>\n    <div style="font-size:18px;display:block;">\n      <h2><span  class="line-center labelgrey">Connexion</span></h2>\n      </div>\n    <p class="btnlogin">\n    <button ion-button class="button center btnfb"><i class="fa fa-facebook" aria-hidden="true"></i>Facebook</button>\n    </p>\n    <div style="font-size:12px;">\n      <p class="labelblue">Not ready to Sign Up? Explore the app.</p>\n    </div>\n\n    \n\n \n</ion-content>\n  '/*ion-inline-end:"/Users/dhruvi/Desktop/huty/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=19.js.map