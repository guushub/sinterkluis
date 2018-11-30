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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background-image {\r\n    position: fixed;\r\n    left: 0;\r\n    right: 0;\r\n  \r\n    background-image: url(/assets/background.jpg);\r\n    /* background: no-repeat center center fixed; */\r\n    background-size:100%;\r\n    width: 100%;\r\n    height: 100%;\r\n  \r\n    -webkit-filter: blur(4px);\r\n    -moz-filter: blur(4px);\r\n    -o-filter: blur(4px);\r\n    -ms-filter: blur(4px);\r\n    filter: blur(4px);\r\n  }\r\n\r\n  .content {\r\n    padding: 20px;\r\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background-image\"></div>\n<div class=\"content\"> \n    <div class=\"row\">\n        <div class=\"col-md-8\">\n            <app-color-select></app-color-select>\n        </div>\n        <div class=\"col-md-4\">\n            <app-color-history></app-color-history>\n        </div>\n    </div>\n</div>\n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_color_select_color_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/color-select/color-select.component */ "./src/app/components/color-select/color-select.component.ts");
/* harmony import */ var _components_color_history_color_history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/color-history/color-history.component */ "./src/app/components/color-history/color-history.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_color_select_color_select_component__WEBPACK_IMPORTED_MODULE_3__["ColorSelectComponent"],
                _components_color_history_color_history_component__WEBPACK_IMPORTED_MODULE_4__["ColorHistoryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/color-history/color-history.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/color-history/color-history.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    max-width: 50px\r\n}\r\n\r\n.result {\r\n    border-radius: 25px;\r\n    background: #ff8f00;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/color-history/color-history.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/color-history/color-history.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-6\">\n            <div class=\"row\" *ngFor=\"let record of history\">  \n                    <div class=\"col-2\" *ngFor=\"let color of record\">\n                        <img src=\"/assets/{{color}}.png\" class=\"rounded-circle\">\n                    </div>\n            </div>\n    </div>\n    <div class=\"col-6\">\n            <div class=\"row result\" *ngFor=\"let result of results\">  \n                    <div class=\"col-2\">\n                        <h2>{{result.nExactMatch}}</h2>\n                    </div>\n                    <div class=\"col-2\">\n                            <img src=\"/assets/mijter.png\" class=\"rounded-circle\">\n                    </div>\n                    <div class=\"col-2\">\n                    </div>\n                    <div class=\"col-2\">\n                            <h2>{{result.nAlmostMatch}}</h2>\n                    </div>                    \n                    <div class=\"col-2\">\n                            <img src=\"/assets/staf.png\" class=\"rounded-circle\">\n                    </div>\n            </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/color-history/color-history.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/color-history/color-history.component.ts ***!
  \*********************************************************************/
/*! exports provided: ColorHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorHistoryComponent", function() { return ColorHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_color_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/color-manager.service */ "./src/app/services/color-manager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ColorHistoryComponent = /** @class */ (function () {
    function ColorHistoryComponent(colorManagerService) {
        this.colorManagerService = colorManagerService;
        this.history = [];
        this.results = [];
    }
    ColorHistoryComponent.prototype.ngOnInit = function () {
        this.history = this.colorManagerService.colorsHistory;
        this.results = this.colorManagerService.results;
    };
    ColorHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-color-history',
            template: __webpack_require__(/*! ./color-history.component.html */ "./src/app/components/color-history/color-history.component.html"),
            styles: [__webpack_require__(/*! ./color-history.component.css */ "./src/app/components/color-history/color-history.component.css")]
        }),
        __metadata("design:paramtypes", [_services_color_manager_service__WEBPACK_IMPORTED_MODULE_1__["ColorManagerService"]])
    ], ColorHistoryComponent);
    return ColorHistoryComponent;
}());



/***/ }),

/***/ "./src/app/components/color-select/color-select.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/color-select/color-select.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".selected-image {\r\n    max-width: 100%\r\n}\r\n.deck {\r\n    height: 250px;\r\n    margin-top: 100px;\r\n}\r\n.control {\r\n    margin-top: 35px;\r\n}\r\n.button-bar{\r\n    height:25px;\r\n}"

/***/ }),

/***/ "./src/app/components/color-select/color-select.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/color-select/color-select.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row button-bar\">\n        <div class=\"col-12\">\n              <button class=\"btn btn-danger btn-lg btn-block\" (click)=\"unselectColor()\" *ngIf=\"colors.length\"><= Backspace</button>\n        </div>\n      </div>\n  <div class=\"row deck\">\n      <div class=\"col-2\" *ngFor=\"let color of colors\">\n        <img src=\"/assets/{{color}}.png\" class=\"rounded-circle selected-image\">\n      </div>\n  </div>\n\n  <div class=\"row button-bar\">\n      <div class=\"col-12\">\n            <button class=\"btn btn-success btn-lg btn-block\" (click)=\"testSelection()\" *ngIf=\"colors.length === 5\">OK =></button>  \n      </div>\n    </div>\n\n  <div class=\"row control\">\n        <div class=\"col-4\" *ngFor=\"let color of colorPool\" (click)=\"selectColor(color)\">\n          <img src=\"/assets/{{color}}.png\" class=\"rounded-circle selected-image\">\n        </div>\n  </div>\n\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/color-select/color-select.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/color-select/color-select.component.ts ***!
  \*******************************************************************/
/*! exports provided: ColorSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorSelectComponent", function() { return ColorSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_color_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/color-manager.service */ "./src/app/services/color-manager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ColorSelectComponent = /** @class */ (function () {
    function ColorSelectComponent(colorManagerService) {
        this.colorManagerService = colorManagerService;
        this.colorPool = [];
        this.colors = [];
        this.images = [];
    }
    ColorSelectComponent.prototype.ngOnInit = function () {
        this.colorPool = this.colorManagerService.colorPool;
    };
    ColorSelectComponent.prototype.selectColor = function (color) {
        if (this.colors.length >= 5) {
            return;
        }
        this.colors.push(color);
        this.setImage(color);
    };
    ColorSelectComponent.prototype.unselectColor = function () {
        if (this.colors.length < 1) {
            return;
        }
        this.colors.pop();
        this.images.pop();
    };
    ColorSelectComponent.prototype.setImage = function (color) {
        var imgUrl = "/assets/" + color + ".png";
        this.images.push(imgUrl);
    };
    ColorSelectComponent.prototype.reset = function () {
        this.colors = [];
    };
    ColorSelectComponent.prototype.testSelection = function () {
        var testResult = this.colorManagerService.testColors(this.colors);
        console.log(testResult);
        this.reset();
    };
    ColorSelectComponent.prototype.restart = function () {
        this.colorManagerService.reset();
    };
    ColorSelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-color-select',
            template: __webpack_require__(/*! ./color-select.component.html */ "./src/app/components/color-select/color-select.component.html"),
            styles: [__webpack_require__(/*! ./color-select.component.css */ "./src/app/components/color-select/color-select.component.css")]
        }),
        __metadata("design:paramtypes", [_services_color_manager_service__WEBPACK_IMPORTED_MODULE_1__["ColorManagerService"]])
    ], ColorSelectComponent);
    return ColorSelectComponent;
}());



/***/ }),

/***/ "./src/app/services/color-manager.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/color-manager.service.ts ***!
  \***************************************************/
/*! exports provided: ColorManagerService, Color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorManagerService", function() { return ColorManagerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ColorManagerService = /** @class */ (function () {
    // nSelectionMatch = 0;
    function ColorManagerService(http) {
        this.http = http;
        this.nColors = 5;
        this.colorPool = [Color.red, Color.green, Color.blue, Color.yellow, Color.pink, Color.black];
        this.colorsAnswer = [];
        this.colorsHistory = [];
        this.results = [];
        this.reset();
    }
    ColorManagerService.prototype.selectRandom = function () {
        var item = this.colorPool[Math.floor(Math.random() * this.colorPool.length)];
        return item;
    };
    ColorManagerService.prototype.reset = function () {
        // this.nSelectionMatch = 0;
        this.colorsHistory = [];
        this.results = [];
        this.colorsAnswer = [];
        for (var i = 0; i < this.nColors; i++) {
            var color = this.selectRandom();
            this.colorsAnswer.push(color);
        }
    };
    ColorManagerService.prototype.testColors = function (inputColors) {
        // this.nSelectionMatch = 0;
        this.colorsHistory.push(inputColors);
        var colorTest = [];
        var nAlmostMatch = 0;
        var nExactMatch = 0;
        var colorsAnswerCopy = this.colorsAnswer.slice();
        var inputColorsCopy = inputColors.slice();
        for (var i = colorsAnswerCopy.length - 1; i >= 0; i--) {
            var exactMatch = inputColorsCopy[i] === colorsAnswerCopy[i];
            if (exactMatch) {
                nExactMatch++;
                this.removeColorAtIndex(inputColorsCopy, i);
                this.removeColorAtIndex(colorsAnswerCopy, i);
            }
            colorTest.push(exactMatch);
        }
        for (var i = 0; i < colorsAnswerCopy.length; i++) {
            var indexInInputColorsCopy = inputColorsCopy.indexOf(colorsAnswerCopy[i]);
            if (indexInInputColorsCopy > -1) {
                nAlmostMatch++;
                this.removeColorAtIndex(inputColorsCopy, indexInInputColorsCopy);
            }
        }
        this.results.push({
            nExactMatch: nExactMatch,
            nAlmostMatch: nAlmostMatch
        });
        this.sendCode(colorTest).toPromise()
            .then(function (result) { return console.log(result); })
            .catch(function (err) { return console.log(err); });
        return colorTest;
    };
    ColorManagerService.prototype.sendCode = function (testResult) {
        var code = testResult.map(function (result) { return result ? "1" : "0"; });
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        var options = { headers: headers };
        return this.http.post("http://localhost:8080/api/sinterkluis", { code: code }, options);
    };
    ColorManagerService.prototype.removeColorAtIndex = function (colorArray, zeroBasedIndex) {
        colorArray.splice(zeroBasedIndex, 1);
    };
    ColorManagerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ColorManagerService);
    return ColorManagerService;
}());

var Color;
(function (Color) {
    Color["red"] = "red";
    Color["green"] = "green";
    Color["blue"] = "blue";
    Color["yellow"] = "yellow";
    Color["pink"] = "pink";
    Color["black"] = "black";
})(Color || (Color = {}));


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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Data\Projects\sinterkluis-mijtermind\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map