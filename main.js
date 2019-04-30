(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./salon/salon.module": [
		"./src/app/salon/salon.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _template_form_template_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template-form/template-form.component */ "./src/app/template-form/template-form.component.ts");
/* harmony import */ var _reactive_form_reactive_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reactive-form/reactive-form.component */ "./src/app/reactive-form/reactive-form.component.ts");
/* harmony import */ var _fb_form_fb_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fb-form/fb-form.component */ "./src/app/fb-form/fb-form.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _salon_salon_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./salon/salon.module */ "./src/app/salon/salon.module.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");











var routes = [
    { path: 'home', component: _main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"] },
    { path: 'templateF', component: _template_form_template_form_component__WEBPACK_IMPORTED_MODULE_3__["TemplateFormComponent"] },
    { path: 'reactiveF', component: _reactive_form_reactive_form_component__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormComponent"] },
    { path: 'formBuilderF', component: _fb_form_fb_form_component__WEBPACK_IMPORTED_MODULE_5__["FbFormComponent"] },
    { path: 'salon', loadChildren: './salon/salon.module#SalonModule' },
    { path: 'signup', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"] },
    { path: 'signin', component: _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_10__["SigninComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), _salon_salon_module__WEBPACK_IMPORTED_MODULE_7__["SalonModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _salon_salon_module__WEBPACK_IMPORTED_MODULE_7__["SalonModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'LP';
    }
    AppComponent.prototype.ngOnInit = function () {
        firebase__WEBPACK_IMPORTED_MODULE_2__["initializeApp"]({
            apiKey: "AIzaSyABwBK4K-1ezfCmKtvlB1fcrOCFTANkVGM",
            authDomain: "salon-8692a.firebaseapp.com"
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _template_form_template_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./template-form/template-form.component */ "./src/app/template-form/template-form.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _reactive_form_reactive_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reactive-form/reactive-form.component */ "./src/app/reactive-form/reactive-form.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fb_form_fb_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fb-form/fb-form.component */ "./src/app/fb-form/fb-form.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _salon_salon_details_salon_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./salon/salon-details/salon-details.component */ "./src/app/salon/salon-details/salon-details.component.ts");
/* harmony import */ var _salon_salon_add_salon_add_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./salon/salon-add/salon-add.component */ "./src/app/salon/salon-add/salon-add.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _template_form_template_form_component__WEBPACK_IMPORTED_MODULE_5__["TemplateFormComponent"],
                _reactive_form_reactive_form_component__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormComponent"],
                _fb_form_fb_form_component__WEBPACK_IMPORTED_MODULE_12__["FbFormComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__["PageNotFoundComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_14__["MainComponent"],
                _salon_salon_details_salon_details_component__WEBPACK_IMPORTED_MODULE_15__["SalonDetailsComponent"],
                _salon_salon_add_salon_add_component__WEBPACK_IMPORTED_MODULE_16__["SalonAddComponent"],
                _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_18__["SignupComponent"],
                _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_19__["SigninComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_20__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_10__["CustomMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"]
            ],
            providers: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_21__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);



var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.signUpUser = function (email, password) {
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().createUserWithEmailAndPassword(email, password)
            .catch;
        {
            (function (error) { return console.log("error", error); });
        }
        ;
    };
    AuthService.prototype.signInUser = function (email, password) {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithEmailAndPassword(email, password)
            .then(function (response) {
            firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.getIdToken()
                .then(function (token) {
                console.log("token", token);
                _this.tk = token;
            });
        })
            .catch(function (error) { return console.log("error", error); });
    };
    AuthService.prototype.getToken = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.getIdToken()
            .then(function (token) {
            _this.tk = token;
        });
        return this.tk;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/signin/signin.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signin/signin.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signin/signin.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSignIn(signinForm)\" #signinForm=\"ngForm\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n        <div class=\"form-group\">\n          <label for=\"email\">Email</label>\n          <input type=\"email\" id=\"email\" name=\"email\" ngModel class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Email</label>\n          <input type=\"password\" id=\"password\" name=\"password\" ngModel class=\"form-control\">\n        </div>\n        <button class=\"btn btn-primary\" type=\"submit\">SignIn</button>\n      </div>\n  \n    </div>\n  </form>"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");



var SigninComponent = /** @class */ (function () {
    function SigninComponent(_authservice) {
        this._authservice = _authservice;
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.onSignIn = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        this._authservice.signInUser(email, password);
    };
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/auth/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/auth/signin/signin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSignUp(signupForm)\" #signupForm=\"ngForm\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input type=\"email\" id=\"email\" name=\"email\" ngModel class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Email</label>\n        <input type=\"password\" id=\"password\" name=\"password\" ngModel class=\"form-control\">\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\">Signup</button>\n    </div>\n\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");



var SignupComponent = /** @class */ (function () {
    function SignupComponent(_authservice) {
        this._authservice = _authservice;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSignUp = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        this._authservice.signUpUser(email, password);
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/fb-form/fb-form.component.css":
/*!***********************************************!*\
  !*** ./src/app/fb-form/fb-form.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card{\r\n    background: beige;\r\n    border: 3px solid #ccc;\r\n    border-radius: 0px;\r\n    margin: auto;\r\n    width: 50%;\r\n}\r\n#homePage img{\r\n    height: 30px;\r\n    margin: 10px;\r\n}\r\n#homePage{\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n}\r\n/* .ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; \r\n}\r\n.ng-invalid[required], .ng-invalid.required{\r\n    border-left: 5px solid red;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZiLWZvcm0vZmItZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFdBQVc7Q0FDZDtBQUNEO0lBQ0ksYUFBYTtJQUNiLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7Q0FDekI7QUFDRDs7Ozs7SUFLSSIsImZpbGUiOiJmYi1mb3JtL2ZiLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJke1xyXG4gICAgYmFja2dyb3VuZDogYmVpZ2U7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG4jaG9tZVBhZ2UgaW1ne1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbiNob21lUGFnZXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4vKiAubmctdmFsaWRbcmVxdWlyZWRdLCAubmctdmFsaWQucmVxdWlyZWQgIHtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzQyQTk0ODsgXHJcbn1cclxuLm5nLWludmFsaWRbcmVxdWlyZWRdLCAubmctaW52YWxpZC5yZXF1aXJlZHtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xyXG59ICovIl19 */"

/***/ }),

/***/ "./src/app/fb-form/fb-form.component.html":
/*!************************************************!*\
  !*** ./src/app/fb-form/fb-form.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\" tabindex=\"1\">\n  <mat-card-header>\n    <mat-card-title>Feedback Form</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n<form [formGroup]= \"feedbackForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"col-md-12\">\n      <mat-form-field>\n        <input matInput placeholder=\"Name\" formControlName=\"name\">\n      </mat-form-field>\n      <mat-error *ngIf=\"feedbackForm.get('name').errors\">\n        <p *ngIf=\"feedbackForm.get('name').errors.required\">\n          Name is required</p>\n        </mat-error>\n    </div>\n    <div class=\"col-md-12\">\n        <mat-form-field>\n          <input matInput placeholder=\"Name\" formControlName=\"name\">\n        </mat-form-field>\n        <mat-error *ngIf=\"feedbackForm.get('name').errors\">\n          <p *ngIf=\"feedbackForm.get('name').errors.required\">\n            Name is required</p>\n          </mat-error>\n      </div>\n    <div class=\"col-md-12\">\n      <mat-form-field>\n        <textarea required minlength=\"10\" matInput placeholder=\"Message\" rows=\"3\" formControlName=\"message\"></textarea>\n      </mat-form-field>\n      <mat-error *ngIf=\"feedbackForm.get('message').errors\">\n          <p *ngIf=\"feedbackForm.get('message').errors.required\">\n              Message is required</p>\n              <p *ngIf=\"feedbackForm.get('message').errors.minlength\">\n                  Message must be at least 10 characters long.</p>\n          </mat-error>\n    </div>\n      <div class=\"col-md-12\">\n        <mat-form-field>\n          <mat-select placeholder=\"Gender\" formControlName=\"gender\">\n            <mat-option *ngFor=\"let gender of genders\" [value]=\"gender.value\">{{gender.name}}</mat-option>\n            \n          </mat-select>\n        </mat-form-field>\n      </div>\n    <button type=\"submit\" mat-raised-button button color=\"primary\" [disabled]=\"!feedbackForm.valid\">Submit</button>\n  </form>\n  <a id=\"homePage\" routerLink= ''><img src=\"assets/images/backArrow.png\">Home</a>\n  {{feedbackForm.value | json}}\n  <p>\n    Form Status: {{ feedbackForm.status }}\n  </p>\n</mat-card-content>\n<mat-card-actions>\n  <!-- <button mat-raised-button button color=\"primary\">Submit</button> -->\n  <button (click)=\"updateValue('Nancy','New message','female')\">Update</button>\n  <button (click)=\"partialUpdateValue('Nancy','New message','female')\">Partial Update</button>\n</mat-card-actions>"

/***/ }),

/***/ "./src/app/fb-form/fb-form.component.ts":
/*!**********************************************!*\
  !*** ./src/app/fb-form/fb-form.component.ts ***!
  \**********************************************/
/*! exports provided: FbFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FbFormComponent", function() { return FbFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var FbFormComponent = /** @class */ (function () {
    function FbFormComponent(fb) {
        this.fb = fb;
        // FormBuilder service has three methods: control(), group(), and array() 
        this.genders = [{ name: 'Male', value: 'male' }, { name: 'Female', value: 'female' }];
        this.feedbackForm = this.fb.group({
            name: ['Aditya Khare', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            message: ['form builder message'],
            gender: ['male']
        });
    }
    FbFormComponent.prototype.ngOnInit = function () {
    };
    FbFormComponent.prototype.onSubmit = function () {
        // TODO: Use EventEmitter with form value
        console.log(this.feedbackForm.value);
    };
    FbFormComponent.prototype.updateValue = function (newVal, newMsg) {
        this.feedbackForm.setValue({ name: newVal, message: newMsg, gender: 'female' });
    };
    FbFormComponent.prototype.partialUpdateValue = function () {
        this.feedbackForm.patchValue({ name: 'Nancy', gender: 'female' });
    };
    FbFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fb-form',
            template: __webpack_require__(/*! ./fb-form.component.html */ "./src/app/fb-form/fb-form.component.html"),
            styles: [__webpack_require__(/*! ./fb-form.component.css */ "./src/app/fb-form/fb-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], FbFormComponent);
    return FbFormComponent;
}());



/***/ }),

/***/ "./src/app/feedback.ts":
/*!*****************************!*\
  !*** ./src/app/feedback.ts ***!
  \*****************************/
/*! exports provided: FeedbackModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackModel", function() { return FeedbackModel; });
var FeedbackModel = /** @class */ (function () {
    function FeedbackModel(name, message, gender) {
        this.name = name;
        this.message = message;
        this.gender = gender;
    }
    return FeedbackModel;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav mat-tab-nav-bar>\n    <a mat-tab-link       \n       routerLink=\"/signup\"\n       routerLinkActive #r=\"routerLinkActive\"\n       [active]=\"r.isActive\">\n      Register\n    </a>\n    <a mat-tab-link       \n       routerLink=\"/signin\"\n       routerLinkActive #s=\"routerLinkActive\"\n       [active]=\"s.isActive\">\n      SignIn\n    </a>\n    <a mat-tab-link       \n       routerLink=\"/\"\n       routerLinkActive #l=\"routerLinkActive\"\n       [active]=\"l.isActive\">\n      LogOut\n    </a>\n  </nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluL21haW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\" tabindex =\"1\">\n    <mat-card-header>\n      <mat-card-title>Forms</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n        <!-- <mat-list>\n            <mat-list-item *ngFor=\"let topic of topics\">\n                <a [routerLink]=topic.path>{{topic.name}}</a>\n            </mat-list-item>\n          </mat-list> -->\n          <nav *ngFor=\"let topic of topics\">\n              <a [routerLink]=\"['/'+topic.path]\" routerLinkActive=\"active\" [routerLinkActiveOptions]= '{exact: true}'>{{topic.name}}</a>\n            </nav>\n          \n      </mat-card-content>"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
        this.topics = [
            { 'path': 'templateF',
                'name': 'Template form'
            },
            { 'path': 'reactiveF',
                'name': 'Reactive form'
            },
            {
                'path': 'formBuilderF',
                'name': 'Form Builder Reactive Form'
            },
            {
                'path': 'salon',
                'name': 'Salons List'
            }
        ];
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: CustomMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMaterialModule", function() { return CustomMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");







var CustomMaterialModule = /** @class */ (function () {
    function CustomMaterialModule() {
    }
    CustomMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"]
            ],
        })
    ], CustomMaterialModule);
    return CustomMaterialModule;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card{\r\n    background: beige;\r\n    border: 3px solid #ccc;\r\n    border-radius: 0px;\r\n    margin: auto;\r\n    width: 50%;\r\n}\r\nmat-card-content h1{\r\n    color: red;\r\n}\r\n/* .ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; \r\n}\r\n.ng-invalid[required], .ng-invalid.required{\r\n    border-left: 5px solid red;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsV0FBVztDQUNkO0FBQ0Q7SUFDSSxXQUFXO0NBQ2Q7QUFDRDs7Ozs7SUFLSSIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kOiBiZWlnZTtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcbm1hdC1jYXJkLWNvbnRlbnQgaDF7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcbi8qIC5uZy12YWxpZFtyZXF1aXJlZF0sIC5uZy12YWxpZC5yZXF1aXJlZCAge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4OyBcclxufVxyXG4ubmctaW52YWxpZFtyZXF1aXJlZF0sIC5uZy1pbnZhbGlkLnJlcXVpcmVke1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZWQ7XHJcbn0gKi8iXX0= */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\" tabindex=\"1\">\n    <mat-card-header>\n      <mat-card-title>Forbidden</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <h1>Page Not Found</h1>\n      </mat-card-content>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/reactive-form/reactive-form.component.css":
/*!***********************************************************!*\
  !*** ./src/app/reactive-form/reactive-form.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card{\r\n    background: beige;\r\n    border: 3px solid #ccc;\r\n    border-radius: 0px;\r\n    margin: auto;\r\n    width: 50%;\r\n}\r\n#homePage img{\r\n    height: 30px;\r\n    margin: 10px;\r\n}\r\n#homePage{\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n}\r\n/* .ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; \r\n}\r\n.ng-invalid[required], .ng-invalid.required{\r\n    border-left: 5px solid red;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0aXZlLWZvcm0vcmVhY3RpdmUtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFdBQVc7Q0FDZDtBQUNEO0lBQ0ksYUFBYTtJQUNiLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7Q0FDekI7QUFDRDs7Ozs7SUFLSSIsImZpbGUiOiJyZWFjdGl2ZS1mb3JtL3JlYWN0aXZlLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJke1xyXG4gICAgYmFja2dyb3VuZDogYmVpZ2U7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG4jaG9tZVBhZ2UgaW1ne1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbiNob21lUGFnZXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4vKiAubmctdmFsaWRbcmVxdWlyZWRdLCAubmctdmFsaWQucmVxdWlyZWQgIHtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzQyQTk0ODsgXHJcbn1cclxuLm5nLWludmFsaWRbcmVxdWlyZWRdLCAubmctaW52YWxpZC5yZXF1aXJlZHtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xyXG59ICovIl19 */"

/***/ }),

/***/ "./src/app/reactive-form/reactive-form.component.html":
/*!************************************************************!*\
  !*** ./src/app/reactive-form/reactive-form.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\" tabindex=\"1\">\n    <mat-card-header>\n      <mat-card-title>Feedback Form</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n  <form [formGroup]= \"feedbackForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"col-md-12\">\n        <mat-form-field>\n          <input required matInput placeholder=\"Name\" formControlName=\"name\">\n        </mat-form-field>\n        <mat-error *ngIf=\"feedbackForm.get('name').errors\">\n            <p *ngIf=\"feedbackForm.get('name').errors.required\">\n              Name is required</p>\n            </mat-error>\n      </div>\n      <div class=\"col-md-12\">\n        <mat-form-field>\n          <textarea required minlength=\"10\" matInput placeholder=\"Message\" rows=\"3\" formControlName=\"message\"></textarea>\n        </mat-form-field>\n        <mat-error *ngIf=\"feedbackForm.get('message').errors\">\n            <p *ngIf=\"feedbackForm.get('message').errors.required\">\n                Message is required</p>\n                <p *ngIf=\"feedbackForm.get('message').errors.minlength\">\n                    Message must be at least 10 characters long.</p>\n            </mat-error>\n      </div>\n        <div class=\"col-md-12\">\n          <mat-form-field>\n            <mat-select placeholder=\"Gender\" formControlName=\"gender\">\n              <mat-option *ngFor=\"let gender of genders\" [value]=\"gender.value\">{{gender.name}}</mat-option>\n              \n            </mat-select>\n          </mat-form-field>\n        </div>\n      <button type=\"submit\" mat-raised-button button color=\"primary\" [disabled]=\"!feedbackForm.valid\">Submit</button>\n    </form>\n    {{feedbackForm.value | json}}\n    <a id=\"homePage\" routerLink= ''><img src=\"assets/images/backArrow.png\">Home</a>\n  </mat-card-content>\n  <mat-card-actions>\n    <!-- <button mat-raised-button button color=\"primary\">Submit</button> -->\n    <button (click)=\"updateValue('Nancy','New message','female')\">Update</button>\n    <button (click)=\"partialUpdateValue('Nancy','New message','female')\">Partial Update</button>\n  </mat-card-actions>"

/***/ }),

/***/ "./src/app/reactive-form/reactive-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/reactive-form/reactive-form.component.ts ***!
  \**********************************************************/
/*! exports provided: ReactiveFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveFormComponent", function() { return ReactiveFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var ReactiveFormComponent = /** @class */ (function () {
    function ReactiveFormComponent() {
        this.genders = [{ name: 'Male', value: 'male' }, { name: 'Female', value: 'female' }];
        this.feedbackForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Aditya kHare '),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Text Message'),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('male')
        });
    }
    ReactiveFormComponent.prototype.ngOnInit = function () {
    };
    ReactiveFormComponent.prototype.onSubmit = function () {
        // TODO: Use EventEmitter with form value
        console.log(this.feedbackForm.value);
    };
    ReactiveFormComponent.prototype.updateValue = function (newVal, newMsg) {
        this.feedbackForm.setValue({ name: newVal, message: newMsg, gender: 'female' });
    };
    ReactiveFormComponent.prototype.partialUpdateValue = function () {
        this.feedbackForm.patchValue({ name: 'Nancy', gender: 'female' });
    };
    ReactiveFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reactive-form',
            template: __webpack_require__(/*! ./reactive-form.component.html */ "./src/app/reactive-form/reactive-form.component.html"),
            styles: [__webpack_require__(/*! ./reactive-form.component.css */ "./src/app/reactive-form/reactive-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReactiveFormComponent);
    return ReactiveFormComponent;
}());



/***/ }),

/***/ "./src/app/salon/salon-add/salon-add.component.css":
/*!*********************************************************!*\
  !*** ./src/app/salon/salon-add/salon-add.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWxvbi9zYWxvbi1hZGQvc2Fsb24tYWRkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/salon/salon-add/salon-add.component.html":
/*!**********************************************************!*\
  !*** ./src/app/salon/salon-add/salon-add.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #addSalonForm= \"ngForm\" (ngSubmit)=\"addSalon(addSalonForm)\">\n    <mat-form-field>\n        <div class=\"col-md-12\">\n            <input required matInput placeholder=\"Name\" [(ngModel)]=\"model.name\" name=\"name\" #name=\"ngModel\">\n        </div>\n      </mat-form-field>\n      <button mat-raised-button button color=\"primary\" type=\"submit\">Add</button>\n      \n</form>"

/***/ }),

/***/ "./src/app/salon/salon-add/salon-add.component.ts":
/*!********************************************************!*\
  !*** ./src/app/salon/salon-add/salon-add.component.ts ***!
  \********************************************************/
/*! exports provided: SalonAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalonAddComponent", function() { return SalonAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _salon_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../salon-service.service */ "./src/app/salon/salon-service.service.ts");



var SalonAddComponent = /** @class */ (function () {
    function SalonAddComponent(_salonService) {
        this._salonService = _salonService;
        this.model = {
            'name': "Aditya"
        };
    }
    SalonAddComponent.prototype.ngOnInit = function () {
    };
    SalonAddComponent.prototype.addSalon = function (form) {
        var objPost = {
            'name': form.value.name
        };
        this._salonService.saveSalon(objPost).subscribe(function (salon) {
            console.log("salon", salon);
        });
    };
    SalonAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-salon-add',
            template: __webpack_require__(/*! ./salon-add.component.html */ "./src/app/salon/salon-add/salon-add.component.html"),
            styles: [__webpack_require__(/*! ./salon-add.component.css */ "./src/app/salon/salon-add/salon-add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_salon_service_service__WEBPACK_IMPORTED_MODULE_2__["SalonServiceService"]])
    ], SalonAddComponent);
    return SalonAddComponent;
}());



/***/ }),

/***/ "./src/app/salon/salon-details/salon-details.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/salon/salon-details/salon-details.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card{\r\n    background: beige;\r\n    border: 3px solid #ccc;\r\n    border-radius: 0px;\r\n    margin: auto;\r\n    width: 100%;\r\n    padding: 0px;\r\n    margin-top: 10px;\r\n}\r\nmat-card-header{\r\n    background: #3c763d;\r\n    color: white;\r\n}\r\nmat-card-content div{\r\n    margin-left: 10px;\r\n    font-size: 20px;\r\n}\r\na{\r\n    color: red;\r\n    text-decoration: none;\r\n    /* padding: 10px; */\r\n    /* margin: 10px; */\r\n    /* background: rebeccapurple; */\r\n    font-size: 20px;\r\n    /* text-align: right; */\r\n    float: right;\r\n}\r\n#homePage img{\r\n    height: 30px;\r\n    margin: 10px;\r\n}\r\n#homePage{\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n}\r\n/* .ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; \r\n}\r\n.ng-invalid[required], .ng-invalid.required{\r\n    border-left: 5px solid red;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbG9uL3NhbG9uLWRldGFpbHMvc2Fsb24tZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxvQkFBb0I7SUFDcEIsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGFBQWE7SUFDYixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0NBQ3pCO0FBQ0Q7Ozs7O0lBS0kiLCJmaWxlIjoic2Fsb24vc2Fsb24tZGV0YWlscy9zYWxvbi1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZHtcclxuICAgIGJhY2tncm91bmQ6IGJlaWdlO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5tYXQtY2FyZC1oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjM2M3NjNkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbm1hdC1jYXJkLWNvbnRlbnQgZGl2e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuYXtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAvKiBwYWRkaW5nOiAxMHB4OyAqL1xyXG4gICAgLyogbWFyZ2luOiAxMHB4OyAqL1xyXG4gICAgLyogYmFja2dyb3VuZDogcmViZWNjYXB1cnBsZTsgKi9cclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIC8qIHRleHQtYWxpZ246IHJpZ2h0OyAqL1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbiNob21lUGFnZSBpbWd7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuI2hvbWVQYWdle1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi8qIC5uZy12YWxpZFtyZXF1aXJlZF0sIC5uZy12YWxpZC5yZXF1aXJlZCAge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4OyBcclxufVxyXG4ubmctaW52YWxpZFtyZXF1aXJlZF0sIC5uZy1pbnZhbGlkLnJlcXVpcmVke1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZWQ7XHJcbn0gKi8iXX0= */"

/***/ }),

/***/ "./src/app/salon/salon-details/salon-details.component.html":
/*!******************************************************************!*\
  !*** ./src/app/salon/salon-details/salon-details.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\" tabindex=\"1\">\n  <mat-card-header>\n    <mat-card-title>Salon Details</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <div>Name: {{salonDetails.name}}</div>\n    <div>Address:{{salonDetails.address}}</div>\n    <div>Contact: {{salonDetails.contact}}</div>\n    <div>owner:{{salonDetails.owner}}</div>\n    <div>bestprovider:{{salonDetails.bestprovider}}</div>\n  </mat-card-content>\n  <a routerLink=\"/salon\">back</a>\n</mat-card>"

/***/ }),

/***/ "./src/app/salon/salon-details/salon-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/salon/salon-details/salon-details.component.ts ***!
  \****************************************************************/
/*! exports provided: SalonDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalonDetailsComponent", function() { return SalonDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _salon_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../salon-service.service */ "./src/app/salon/salon-service.service.ts");




var SalonDetailsComponent = /** @class */ (function () {
    function SalonDetailsComponent(_route, router, _salonservice) {
        this._route = _route;
        this.router = router;
        this._salonservice = _salonservice;
    }
    SalonDetailsComponent.prototype.ngOnInit = function () {
        var id = this._route.snapshot.params['id'];
        console.log(id);
        this.salonDetails = this._salonservice.getDetails(id);
        console.log("salonDetails", this.salonDetails);
    };
    SalonDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-salon-details',
            template: __webpack_require__(/*! ./salon-details.component.html */ "./src/app/salon/salon-details/salon-details.component.html"),
            styles: [__webpack_require__(/*! ./salon-details.component.css */ "./src/app/salon/salon-details/salon-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _salon_service_service__WEBPACK_IMPORTED_MODULE_3__["SalonServiceService"]])
    ], SalonDetailsComponent);
    return SalonDetailsComponent;
}());



/***/ }),

/***/ "./src/app/salon/salon-list/salon-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/salon/salon-list/salon-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card{\r\n    background: beige;\r\n    border: 3px solid #ccc;\r\n    border-radius: 0px;\r\n    margin: auto;\r\n    width: 100%;\r\n    padding: 0px;\r\n    margin-top: 10px;\r\n    height: 100vh;\r\n}\r\nmat-card-header{\r\n    background: green;\r\n    color: white;\r\n}\r\nmat-card-title{\r\n    margin: 15px;\r\n}\r\n.salonGrid{\r\n    padding: 10px;\r\n    background-color: beige;\r\n    border: 2px solid darkgray;\r\n}\r\n#homePage img{\r\n    height: 30px;\r\n    margin: 10px;\r\n}\r\n#homePage{\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n}\r\nmat-card-content div{\r\n    text-decoration: none;\r\n    font-weight: bold;\r\n}\r\n/* .ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; \r\n}\r\n.ng-invalid[required], .ng-invalid.required{\r\n    border-left: 5px solid red;\r\n} */\r\n.addSalon{\r\n    float: right;\r\n    color: green;\r\n    font-size: 50px;\r\n    position: unset;\r\n    /* height: 50px; */\r\n    width: 50px;\r\n    cursor:pointer;\r\n}\r\n.searchIcon{\r\n    position: absolute;\r\n    /* cursor: pointer; */\r\n}\r\ninput{\r\n    color:black;\r\n    font-family: Arial, FontAwesome;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbG9uL3NhbG9uLWxpc3Qvc2Fsb24tbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGNBQWM7Q0FDakI7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLDJCQUEyQjtDQUM5QjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7Q0FDekI7QUFDRDtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7Q0FDckI7QUFDRDs7Ozs7SUFLSTtBQUNKO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtDQUNsQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLHNCQUFzQjtDQUN6QjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGdDQUFnQztDQUNuQyIsImZpbGUiOiJzYWxvbi9zYWxvbi1saXN0L3NhbG9uLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJke1xyXG4gICAgYmFja2dyb3VuZDogYmVpZ2U7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5tYXQtY2FyZC1oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiBncmVlbjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5tYXQtY2FyZC10aXRsZXtcclxuICAgIG1hcmdpbjogMTVweDtcclxufVxyXG4uc2Fsb25Hcmlke1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgZGFya2dyYXk7XHJcbn1cclxuI2hvbWVQYWdlIGltZ3tcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG4jaG9tZVBhZ2V7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxubWF0LWNhcmQtY29udGVudCBkaXZ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4vKiAubmctdmFsaWRbcmVxdWlyZWRdLCAubmctdmFsaWQucmVxdWlyZWQgIHtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzQyQTk0ODsgXHJcbn1cclxuLm5nLWludmFsaWRbcmVxdWlyZWRdLCAubmctaW52YWxpZC5yZXF1aXJlZHtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xyXG59ICovXHJcbi5hZGRTYWxvbntcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIHBvc2l0aW9uOiB1bnNldDtcclxuICAgIC8qIGhlaWdodDogNTBweDsgKi9cclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuLnNlYXJjaEljb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvKiBjdXJzb3I6IHBvaW50ZXI7ICovXHJcbn1cclxuaW5wdXR7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgRm9udEF3ZXNvbWU7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/salon/salon-list/salon-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/salon/salon-list/salon-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <mat-card>\n      <mat-card-header>\n      <mat-card-title class=\"col-xs-12\">\n        <div class=\"col-xs-8 no-padding\">Salons List</div>\n        <div class=\"col-xs-4 no-padding\">\n            <input matInput class=\"col-xs-12\" type=\"text\" [(ngModel)]=\"searchString\" placeholder=\"&#xF002; search salon\" autocomplete=\"off\">   \n            <!-- <mat-icon class=\"col-xs-2 searchIcon\">search</mat-icon>          -->\n        </div>\n      </mat-card-title>\n      \n    </mat-card-header>\n    <mat-card-content>\n                <div *ngFor= \"let salon of salonList | filter:searchString\" class=\"col-md-12 salonGrid\"><a [routerLink]= \"['/salon', salon.id]\" routerLinkActive=\"active\" [routerLinkActiveOptions]= '{exact: true}'>{{salon.name}}</a></div>\n     \n    </mat-card-content>\n    <a routerLink=\"/addSalon\"><mat-icon class=\"addSalon\">add_circle</mat-icon></a>\n  </mat-card>\n    \n</div>"

/***/ }),

/***/ "./src/app/salon/salon-list/salon-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/salon/salon-list/salon-list.component.ts ***!
  \**********************************************************/
/*! exports provided: SalonListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalonListComponent", function() { return SalonListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _salon_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../salon-service.service */ "./src/app/salon/salon-service.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");




var SalonListComponent = /** @class */ (function () {
    function SalonListComponent(_salonService, _authservice) {
        this._salonService = _salonService;
        this._authservice = _authservice;
        this.searchString = "";
    }
    SalonListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._salonService.getSalonList().subscribe(function (data) {
            _this.salonList = data;
            console.log("list", _this.salonList);
        });
    };
    SalonListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-salon-list',
            template: __webpack_require__(/*! ./salon-list.component.html */ "./src/app/salon/salon-list/salon-list.component.html"),
            styles: [__webpack_require__(/*! ./salon-list.component.css */ "./src/app/salon/salon-list/salon-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_salon_service_service__WEBPACK_IMPORTED_MODULE_2__["SalonServiceService"], src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], SalonListComponent);
    return SalonListComponent;
}());



/***/ }),

/***/ "./src/app/salon/salon-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/salon/salon-routing.module.ts ***!
  \***********************************************/
/*! exports provided: SalonRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalonRoutingModule", function() { return SalonRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _salon_list_salon_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./salon-list/salon-list.component */ "./src/app/salon/salon-list/salon-list.component.ts");
/* harmony import */ var _salon_details_salon_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./salon-details/salon-details.component */ "./src/app/salon/salon-details/salon-details.component.ts");
/* harmony import */ var _salon_add_salon_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./salon-add/salon-add.component */ "./src/app/salon/salon-add/salon-add.component.ts");






var routes = [
    {
        'path': 'salon',
        'component': _salon_list_salon_list_component__WEBPACK_IMPORTED_MODULE_3__["SalonListComponent"]
    },
    {
        'path': 'salon/:id',
        'component': _salon_details_salon_details_component__WEBPACK_IMPORTED_MODULE_4__["SalonDetailsComponent"]
    },
    {
        'path': 'addSalon',
        'component': _salon_add_salon_add_component__WEBPACK_IMPORTED_MODULE_5__["SalonAddComponent"]
    }
];
var SalonRoutingModule = /** @class */ (function () {
    function SalonRoutingModule() {
    }
    SalonRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SalonRoutingModule);
    return SalonRoutingModule;
}());



/***/ }),

/***/ "./src/app/salon/salon-service.service.ts":
/*!************************************************!*\
  !*** ./src/app/salon/salon-service.service.ts ***!
  \************************************************/
/*! exports provided: SalonServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalonServiceService", function() { return SalonServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");




var SalonServiceService = /** @class */ (function () {
    function SalonServiceService(http, _authservice) {
        this.http = http;
        this._authservice = _authservice;
        this.salonDetail = [];
        this.salonListArray = [
            {
                id: 1,
                name: 'ABC salon',
                address: 'address 1',
                owner: 'Aditya khare',
                contact: '1233456',
                type: 'Salon',
                bestprovider: 'Beard'
            },
            {
                id: 2,
                name: 'New salon',
                address: 'address 2',
                owner: 'Ayu',
                contact: '1233456',
                type: 'SPA and Salon',
                bestprovider: 'SPA'
            },
            {
                id: 3,
                name: 'City salon',
                address: 'address 2',
                owner: 'Anurag',
                contact: '78479458',
                type: 'Salon',
                bestprovider: 'Haircut'
            }
        ];
    }
    SalonServiceService.prototype.getSalonList = function () {
        //to enable when on open netwrk
        //const token= this._authservice.getToken();
        //console.log("token",token);
        //return this.http.get("https://salon-8692a.firebaseio.com/salon.json?auth="+token);
        return this.http.get('./assets/salonList.json');
    };
    SalonServiceService.prototype.getDetails = function (id) {
        var _this = this;
        var token = this._authservice.getToken();
        this.http.get("https://salon-8692a.firebaseio.com/salon.json?auth=" + token + "&id=" + id).subscribe(function (data) {
            console.log("data", data);
            console.log("type of ddata", typeof (data));
            console.log("type of salonlistaray", typeof (_this.salonListArray));
            console.log("this.salonListArray", _this.salonListArray);
        });
        console.log("service id", id);
        var newObj = this.salonListArray.find(function (obj) { return obj.id == id; });
        return newObj;
    };
    SalonServiceService.prototype.saveSalon = function (salon) {
        var result = this.http.put("https://salon-8692a.firebaseio.com/salonNew.json", this.salonListArray);
        console.log("result", result);
        return result;
    };
    SalonServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], SalonServiceService);
    return SalonServiceService;
}());



/***/ }),

/***/ "./src/app/salon/salon.module.ts":
/*!***************************************!*\
  !*** ./src/app/salon/salon.module.ts ***!
  \***************************************/
/*! exports provided: SalonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalonModule", function() { return SalonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _salon_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./salon-routing.module */ "./src/app/salon/salon-routing.module.ts");
/* harmony import */ var _salon_list_salon_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./salon-list/salon-list.component */ "./src/app/salon/salon-list/salon-list.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");








var SalonModule = /** @class */ (function () {
    function SalonModule() {
    }
    SalonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_salon_list_salon_list_component__WEBPACK_IMPORTED_MODULE_4__["SalonListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _salon_routing_module__WEBPACK_IMPORTED_MODULE_3__["SalonRoutingModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_5__["CustomMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"]
            ]
        })
    ], SalonModule);
    return SalonModule;
}());



/***/ }),

/***/ "./src/app/template-form/template-form.component.css":
/*!***********************************************************!*\
  !*** ./src/app/template-form/template-form.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card{\r\n    background: beige;\r\n    border: 3px solid #ccc;\r\n    border-radius: 0px;\r\n    margin: auto;\r\n    width: 50%;\r\n}\r\n#homePage img{\r\n    height: 30px;\r\n    margin: 10px;\r\n}\r\n#homePage{\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n}\r\n/* .ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; \r\n}\r\n.ng-invalid[required], .ng-invalid.required{\r\n    border-left: 5px solid red;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlLWZvcm0vdGVtcGxhdGUtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFdBQVc7Q0FDZDtBQUNEO0lBQ0ksYUFBYTtJQUNiLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7Q0FDekI7QUFDRDs7Ozs7SUFLSSIsImZpbGUiOiJ0ZW1wbGF0ZS1mb3JtL3RlbXBsYXRlLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJke1xyXG4gICAgYmFja2dyb3VuZDogYmVpZ2U7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG4jaG9tZVBhZ2UgaW1ne1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbiNob21lUGFnZXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4vKiAubmctdmFsaWRbcmVxdWlyZWRdLCAubmctdmFsaWQucmVxdWlyZWQgIHtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzQyQTk0ODsgXHJcbn1cclxuLm5nLWludmFsaWRbcmVxdWlyZWRdLCAubmctaW52YWxpZC5yZXF1aXJlZHtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xyXG59ICovIl19 */"

/***/ }),

/***/ "./src/app/template-form/template-form.component.html":
/*!************************************************************!*\
  !*** ./src/app/template-form/template-form.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\" tabindex=\"1\">\n  <mat-card-header>\n    <mat-card-title>Feedback Form</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <form #feedbackForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"col-md-12\">\n        <mat-form-field>\n          <input required matInput placeholder=\"Name\" [(ngModel)]=\"model.name\" name=\"name\" #name=\"ngModel\">\n        </mat-form-field>\n        <mat-error *ngIf=\"name.invalid\">\n          Name is required\n        </mat-error>\n      </div>\n      <div class=\"col-md-12\">\n        <mat-form-field>\n          <textarea required minlength=\"10\" matInput placeholder=\"Message\" rows=\"3\" [(ngModel)]=\"model.message\" name=\"message\" #message=ngModel></textarea>\n        </mat-form-field>\n        <!-- {{message.errors | json}} -->\n        <mat-error *ngIf=\"message.invalid\">\n            <p *ngIf= \"message.errors.required\">Message is required</p>\n            <p *ngIf= \"message.errors.minlength\">Message must be at least 10 characters long.</p>\n        </mat-error>\n      </div>\n      <div class=\"col-md-12\">\n        <mat-form-field>\n          <mat-select placeholder=\"Gender\" [(ngModel)]=\"model.gender\" name=\"gender\" [compareWith]=\"customCompare\">\n            <mat-option *ngFor=\"let gender of genders\" [value]=\"gender.value\">{{gender.name}}</mat-option>\n            <!-- <mat-option value=\"male\">Male</mat-option>\n                  <mat-option value=\"female\">Female</mat-option> -->\n          </mat-select>\n        </mat-form-field>\n      </div>\n      <button type=\"submit\" mat-raised-button button color=\"primary\" [attr.disabled]=\"!feedbackForm.form.valid\">Submit</button>\n      {{model | json}}\n    </form>\n    <a id=\"homePage\" routerLink= ''><img src=\"assets/images/backArrow.png\">Home</a>\n  </mat-card-content>\n  <mat-card-actions>\n    <!-- <button mat-raised-button button color=\"primary\">Submit</button> -->\n    \n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./src/app/template-form/template-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/template-form/template-form.component.ts ***!
  \**********************************************************/
/*! exports provided: TemplateFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateFormComponent", function() { return TemplateFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _feedback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../feedback */ "./src/app/feedback.ts");



var TemplateFormComponent = /** @class */ (function () {
    function TemplateFormComponent() {
        this.genders = [{ name: 'Male', value: 'male' }, { name: 'Female', value: 'female' }];
        this.model = new _feedback__WEBPACK_IMPORTED_MODULE_2__["FeedbackModel"]('Aditya', 'test message', 'male');
    }
    TemplateFormComponent.prototype.ngOnInit = function () {
    };
    TemplateFormComponent.prototype.customCompare = function (o1, o2) {
        return o1 && o2 ? o1.value === o2.value : o1 === o2;
    };
    TemplateFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-template-form',
            template: __webpack_require__(/*! ./template-form.component.html */ "./src/app/template-form/template-form.component.html"),
            styles: [__webpack_require__(/*! ./template-form.component.css */ "./src/app/template-form/template-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TemplateFormComponent);
    return TemplateFormComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\learning\LP\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map