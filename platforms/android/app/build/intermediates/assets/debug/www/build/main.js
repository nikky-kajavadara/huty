webpackJsonp([35],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-participant/add-participant.module": [
		269,
		33
	],
	"../pages/addtime/addtime.module": [
		268,
		32
	],
	"../pages/ask/ask.module": [
		270,
		31
	],
	"../pages/choose/choose.module": [
		271,
		30
	],
	"../pages/choosenom/choosenom.module": [
		272,
		29
	],
	"../pages/codegame/codegame.module": [
		273,
		28
	],
	"../pages/credit1/credit1.module": [
		274,
		27
	],
	"../pages/credit2/credit2.module": [
		275,
		26
	],
	"../pages/editpwd/editpwd.module": [
		276,
		25
	],
	"../pages/feedback/feedback.module": [
		277,
		24
	],
	"../pages/greenhit/greenhit.module": [
		278,
		23
	],
	"../pages/hitprofile/hitprofile.module": [
		279,
		22
	],
	"../pages/hitsup-list/hitsup-list.module": [
		280,
		20
	],
	"../pages/hitsup-list2/hitsup-list2.module": [
		281,
		21
	],
	"../pages/home/home.module": [
		282,
		34
	],
	"../pages/login/login.module": [
		283,
		19
	],
	"../pages/maphit/maphit.module": [
		284,
		18
	],
	"../pages/no-of-participant/no-of-participant.module": [
		285,
		17
	],
	"../pages/nomprofile/nomprofile.module": [
		286,
		16
	],
	"../pages/notification/notification.module": [
		287,
		15
	],
	"../pages/orangehit/orangehit.module": [
		288,
		14
	],
	"../pages/participant/participant.module": [
		289,
		13
	],
	"../pages/payment/payment.module": [
		290,
		12
	],
	"../pages/profile/profile.module": [
		291,
		11
	],
	"../pages/registration/registration.module": [
		292,
		10
	],
	"../pages/result/result.module": [
		293,
		9
	],
	"../pages/resultnom/resultnom.module": [
		294,
		8
	],
	"../pages/setting/setting.module": [
		295,
		7
	],
	"../pages/share/share.module": [
		296,
		6
	],
	"../pages/signup/signup.module": [
		297,
		5
	],
	"../pages/statistics/statistics.module": [
		298,
		4
	],
	"../pages/survey/survey.module": [
		299,
		3
	],
	"../pages/try/try.module": [
		300,
		2
	],
	"../pages/vote/vote.module": [
		301,
		1
	],
	"../pages/votenom/votenom.module": [
		302,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/addtime/addtime.module#AddtimePageModule', name: 'AddtimePage', segment: 'addtime', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-participant/add-participant.module#AddParticipantPageModule', name: 'AddParticipantPage', segment: 'add-participant', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ask/ask.module#AskPageModule', name: 'AskPage', segment: 'ask', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/choose/choose.module#ChoosePageModule', name: 'ChoosePage', segment: 'choose', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/choosenom/choosenom.module#ChoosenomPageModule', name: 'ChoosenomPage', segment: 'choosenom', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/codegame/codegame.module#CodegamePageModule', name: 'CodegamePage', segment: 'codegame', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/credit1/credit1.module#Credit1PageModule', name: 'Credit1Page', segment: 'credit1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/credit2/credit2.module#Credit2PageModule', name: 'Credit2Page', segment: 'credit2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editpwd/editpwd.module#EditpwdPageModule', name: 'EditpwdPage', segment: 'editpwd', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feedback/feedback.module#FeedbackPageModule', name: 'FeedbackPage', segment: 'feedback', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/greenhit/greenhit.module#GreenhitPageModule', name: 'GreenhitPage', segment: 'greenhit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hitprofile/hitprofile.module#HitprofilePageModule', name: 'HitprofilePage', segment: 'hitprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hitsup-list/hitsup-list.module#HitsupListPageModule', name: 'HitsupListPage', segment: 'hitsup-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hitsup-list2/hitsup-list2.module#HitsupList2PageModule', name: 'HitsupList2Page', segment: 'hitsup-list2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/maphit/maphit.module#MaphitPageModule', name: 'MaphitPage', segment: 'maphit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/no-of-participant/no-of-participant.module#NoOfParticipantPageModule', name: 'NoOfParticipantPage', segment: 'no-of-participant', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nomprofile/nomprofile.module#NomprofilePageModule', name: 'NomprofilePage', segment: 'nomprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/orangehit/orangehit.module#OrangehitPageModule', name: 'OrangehitPage', segment: 'orangehit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/participant/participant.module#ParticipantPageModule', name: 'ParticipantPage', segment: 'participant', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment/payment.module#PaymentPageModule', name: 'PaymentPage', segment: 'payment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registration/registration.module#RegistrationPageModule', name: 'RegistrationPage', segment: 'registration', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/result/result.module#ResultPageModule', name: 'ResultPage', segment: 'result', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resultnom/resultnom.module#ResultnomPageModule', name: 'ResultnomPage', segment: 'resultnom', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/share/share.module#SharePageModule', name: 'SharePage', segment: 'share', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/statistics/statistics.module#StatisticsPageModule', name: 'StatisticsPage', segment: 'statistics', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/survey/survey.module#SurveyPageModule', name: 'SurveyPage', segment: 'survey', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/try/try.module#TryPageModule', name: 'TryPage', segment: 'try', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vote/vote.module#VotePageModule', name: 'VotePage', segment: 'vote', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/votenom/votenom.module#VotenomPageModule', name: 'VotenomPage', segment: 'votenom', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic\App\huty\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\ionic\App\huty\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.goToLogin = function () {
        this.navCtrl.push('LoginPage');
    };
    HomePage.prototype.goToSignup = function () {
        this.navCtrl.push('SignupPage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\ionic\App\huty\src\pages\home\home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n  <p class="home-section" >\n    <!-- <ion-img width="100%" height="400"  src="../../assets/imgs/home-slide.png"></ion-img> -->\n    <!--<ion-img  class="img" src="../../assets/imgs/logo.png"></ion-img>-->\n\n    <ion-img  class="ni-img" src="../../assets/imgs/logo.png"></ion-img>\n    <ion-img class="ni-img2 " src="../../assets/imgs/thumbs-up.png"></ion-img>\n  </p>  \n  <div class=" btn-container">\n    \n        <button ion-button class="ni-button"  (click)="goToSignup()">INSCRIPTION</button>\n        <button ion-button block outline class="ni-button" (click)="goToLogin()">CONNEXION</button>\n    <div>\n        <p class="labelblue">Not ready to Sign Up? Explore the app</p>\n    </div>\n\n  </div>\n  \n \n</ion-content>\n'/*ion-inline-end:"D:\ionic\App\huty\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[194]);
//# sourceMappingURL=main.js.map