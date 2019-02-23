(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api-serving/api-serving.component.css":
/*!*******************************************************!*\
  !*** ./src/app/api-serving/api-serving.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item\n{\n    height: 35%\n}\n\n.text-color\n{\n    color: gray\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBpLXNlcnZpbmcvYXBpLXNlcnZpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxXQUFXO0NBQ2Q7O0FBRUQ7O0lBRUksV0FBVztDQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBpLXNlcnZpbmcvYXBpLXNlcnZpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtXG57XG4gICAgaGVpZ2h0OiAzNSVcbn1cblxuLnRleHQtY29sb3JcbntcbiAgICBjb2xvcjogZ3JheVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/api-serving/api-serving.component.html":
/*!********************************************************!*\
  !*** ./src/app/api-serving/api-serving.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center container my-5\">\n\n<input type=\"text\" class=\"form-control mb-4\" #title placeholder=\"Article Title\" >\n\n<textarea class=\"form-control mb-4\" #body placeholder=\"Article Body\" > </textarea>\n\n<Button class=\"btn btn-primary mr-3\" (click) = \"creatPost(title.value , body.value)\"> Insert Article</Button>\n\n</div>\n\n\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-3\" *ngFor=\"let post of posts\">\n      <div class=\"item py-3 text-center\" > \n        <img src=\"https://via.placeholder.com/250X150.jpg\">\n        <h4 class=\"text-primary\">{{post.title |titleDots:15 }}</h4>\n        <p class=\"text-color\">{{post.body |titleDots:95}}</p>\n        <Button class=\"btn btn-primary mr-3\" (click) = \"updatePost(post,title.value , body.value )\">\n            Update\n          </Button>\n      \n          <Button class=\"btn btn-primary mr-3\" (click) = \"deletePost(post)\">\n            Delete\n          </Button>\n      </div>\n\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/api-serving/api-serving.component.ts":
/*!******************************************************!*\
  !*** ./src/app/api-serving/api-serving.component.ts ***!
  \******************************************************/
/*! exports provided: ApiServingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiServingComponent", function() { return ApiServingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global.service */ "./src/app/global.service.ts");



var ApiServingComponent = /** @class */ (function () {
    function ApiServingComponent(_GlobalService) {
        this._GlobalService = _GlobalService;
        this.posts = [];
        this.urli = 'https://jsonplaceholder.typicode.com/posts';
    }
    ApiServingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._GlobalService.getPosts().subscribe(function (Response) {
            _this.posts = Response;
        });
    };
    ApiServingComponent.prototype.creatPost = function (inp, bodyInput) {
        var _this = this;
        var post = { title: inp, body: bodyInput };
        this._GlobalService.creatP(post).subscribe(function (res) {
            _this.posts.splice(0, 0, post);
        });
    };
    ApiServingComponent.prototype.updatePost = function (post, inputTitle, bodyInput) {
        var _this = this;
        if (inputTitle && bodyInput) {
            var updatPost_1 = { title: inputTitle, body: bodyInput, id: post.id };
            var postIid = post.id;
            console.log(updatPost_1);
            this._GlobalService.updateP(postIid, updatPost_1).subscribe(function (response) {
                var index = _this.posts.indexOf(post);
                _this.posts[index] = updatPost_1;
            });
        }
    };
    ApiServingComponent.prototype.deletePost = function (post) {
        var _this = this;
        var deletPost = { id: post.id };
        this._GlobalService.deleteP(post.id).subscribe(function (res) {
            var indx = _this.posts.indexOf(post);
            _this.posts.splice(indx, 1);
            console.log(indx);
        });
    };
    ApiServingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-api-serving',
            template: __webpack_require__(/*! ./api-serving.component.html */ "./src/app/api-serving/api-serving.component.html"),
            styles: [__webpack_require__(/*! ./api-serving.component.css */ "./src/app/api-serving/api-serving.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]])
    ], ApiServingComponent);
    return ApiServingComponent;
}());



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



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-hussein></app-hussein>\n\n<app-api-serving></app-api-serving>\n<router-outlet></router-outlet>\n"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'magazine';
    }
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _hussein_hussein_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hussein/hussein.component */ "./src/app/hussein/hussein.component.ts");
/* harmony import */ var _pips_title_dots_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pips/title-dots.pipe */ "./src/app/pips/title-dots.pipe.ts");
/* harmony import */ var _input_form_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./input-form.directive */ "./src/app/input-form.directive.ts");
/* harmony import */ var _api_serving_api_serving_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api-serving/api-serving.component */ "./src/app/api-serving/api-serving.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _hussein_hussein_component__WEBPACK_IMPORTED_MODULE_7__["HusseinComponent"],
                _pips_title_dots_pipe__WEBPACK_IMPORTED_MODULE_8__["TitleDotsPipe"],
                _input_form_directive__WEBPACK_IMPORTED_MODULE_9__["InputFormDirective"],
                _api_serving_api_serving_component__WEBPACK_IMPORTED_MODULE_10__["ApiServingComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/global.service.ts":
/*!***********************************!*\
  !*** ./src/app/global.service.ts ***!
  \***********************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var GlobalService = /** @class */ (function () {
    function GlobalService(_HttpClient) {
        this._HttpClient = _HttpClient;
        this.posts = [];
        this.urli = 'https://jsonplaceholder.typicode.com/posts';
    }
    GlobalService.prototype.getPosts = function () {
        return this._HttpClient.get(this.urli);
    };
    GlobalService.prototype.creatP = function (post) {
        return this._HttpClient.post(this.urli, JSON.stringify(post));
    };
    GlobalService.prototype.updateP = function (postIid, updatPost) {
        return this._HttpClient.put(this.urli + '/' + postIid, updatPost);
    };
    GlobalService.prototype.deleteP = function (post) {
        return this._HttpClient.delete(this.urli + '/' + post.id);
    };
    GlobalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GlobalService);
    return GlobalService;
}());



/***/ }),

/***/ "./src/app/hussein/hussein.component.css":
/*!***********************************************!*\
  !*** ./src/app/hussein/hussein.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control.ng-invalid.ng-touched\n{\n    border: 1px solid red;\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaHVzc2Vpbi9odXNzZWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksc0JBQXNCOztDQUV6QiIsImZpbGUiOiJzcmMvYXBwL2h1c3NlaW4vaHVzc2Vpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udHJvbC5uZy1pbnZhbGlkLm5nLXRvdWNoZWRcbntcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgXG59Il19 */"

/***/ }),

/***/ "./src/app/hussein/hussein.component.html":
/*!************************************************!*\
  !*** ./src/app/hussein/hussein.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-5\">\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  \n<!--\n  <form [formGroup]=\"from\" #hussein =\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\">Email address</label>\n      <input type=\"email\" class=\"form-control\" formControlName = \"email\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputPassword1\">Password</label>\n      <input type=\"password\" class=\"form-control\" formControlName=\"password\">\n    </div>\n    <button [disabled]=\"hussein.invalid\" type=\"submit\" class=\"btn btn-primary\">Submit</button>\n  </form>\n  \n  \n------------------------------------------------------------------------------------------------------------\n  <ul class=\"nav nav-pills\">\n\n    <li class=\"nav-item\" [class.active]=\"defView =='Courses'\">\n      <a class=\"nav-link active\" href=\"#\" (click)=\"setView('Courses')\">Courses</a>\n    </li>\n  \n    <li class=\"nav-item\" [class.active]=\"defView == 'Certifications'\">\n      <a class=\"nav-link\" href=\"#\" (click)=\"setView('Certifications')\">Certifications</a>\n    </li>\n  </ul>\n  \n  <div [ngSwitch]=\"defView\">\n    <div *ngSwitchCase=\"'Courses'\">List Of Courses</div>\n    <div *ngSwitchCase=\"'Certifications'\">List Of Certifications</div>\n  </div>\n  <br>\n  <input type=\"text\" appInputForm [format]=\"'lowerCase'\">\n  \n  ---------------------------------------------------------------------------------------------------------------\n  <br><br><br><br><br><br>\n  <form #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\">Email address</label>\n  \n      <input type=\"email\" name=\"mail\" ngModel #mail='ngModel' class=\"form-control\" id=\"exampleInputEmail1\"\n        aria-describedby=\"emailHelp\" placeholder=\"Enter email\" required minlength=\"20\" pattern=\"husseinabdelaziz8@gmail.com\" (change)=\"dataChang(mail)\">\n  \n      <div *ngIf=\"mail.touched && mail.invalid\" class=\" alert alert-danger\" >\n        <div *ngIf=\"mail.errors.required\"> Please Enter your Email address</div>\n        <div *ngIf=\"mail.errors.minlength\" class=\" alert alert-danger\"> Minimum Lengh is {{mail.errors.minlength.requiredLength}}</div>\n        <div *ngIf=\"mail.errors.pattern\"> Please Enter your valid pattern</div>\n      </div>\n    \n    </div>\n    \n    <div class=\"form-group\">\n      <label for=\"exampleInputPassword1\">Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n    </div>\n    <div class=\"form-group form-check\">\n      <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n      <label class=\"form-check-label\" for=\"exampleCheck1\">Check me out</label>\n    </div>\n    <button [disabled]=\"f.invalid\"  type=\"submit\" class=\"btn btn-primary\">Submit</button>\n  </form>\n-->\n</div>"

/***/ }),

/***/ "./src/app/hussein/hussein.component.ts":
/*!**********************************************!*\
  !*** ./src/app/hussein/hussein.component.ts ***!
  \**********************************************/
/*! exports provided: HusseinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HusseinComponent", function() { return HusseinComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HusseinComponent = /** @class */ (function () {
    function HusseinComponent() {
    }
    /*
  from = new FormGroup({
      email : new FormControl('', Validators.required),
      password : new FormControl()
    });
  ------------------------------------------------------
  
  
  
    defView = 'Courses';
  
    setView(selectedView: string) {
      this.defView = selectedView;
    }
    dataChang(mail: any) {
      console.log(mail);
    }
  */
    HusseinComponent.prototype.ngOnInit = function () {
    };
    HusseinComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hussein',
            template: __webpack_require__(/*! ./hussein.component.html */ "./src/app/hussein/hussein.component.html"),
            styles: [__webpack_require__(/*! ./hussein.component.css */ "./src/app/hussein/hussein.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HusseinComponent);
    return HusseinComponent;
}());



/***/ }),

/***/ "./src/app/input-form.directive.ts":
/*!*****************************************!*\
  !*** ./src/app/input-form.directive.ts ***!
  \*****************************************/
/*! exports provided: InputFormDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputFormDirective", function() { return InputFormDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InputFormDirective = /** @class */ (function () {
    function InputFormDirective(ref) {
        this.ref = ref;
    }
    InputFormDirective.prototype.onfocus = function () {
        console.log('focus');
    };
    InputFormDirective.prototype.onblur = function () {
        // tslint:disable-next-line: prefer-const
        var getValue = this.ref.nativeElement.value;
        if (this.format === 'upperCase') {
            this.ref.nativeElement.value = getValue.toUpperCase();
        }
        else {
            this.ref.nativeElement.value = getValue.toLowerCase();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('format'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputFormDirective.prototype, "format", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('focus'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], InputFormDirective.prototype, "onfocus", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('blur'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], InputFormDirective.prototype, "onblur", null);
    InputFormDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appInputForm]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], InputFormDirective);
    return InputFormDirective;
}());



/***/ }),

/***/ "./src/app/pips/title-dots.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pips/title-dots.pipe.ts ***!
  \*****************************************/
/*! exports provided: TitleDotsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleDotsPipe", function() { return TitleDotsPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TitleDotsPipe = /** @class */ (function () {
    function TitleDotsPipe() {
    }
    TitleDotsPipe.prototype.transform = function (value, count) {
        return value.substr(0, count) + '...';
    };
    TitleDotsPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'titleDots'
        })
    ], TitleDotsPipe);
    return TitleDotsPipe;
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

module.exports = __webpack_require__(/*! /media/elbadady/Hussein/Codes/Angular-Projects/magazine/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map