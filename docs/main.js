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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/tasks/tasks.component.ts");

var routes = [
    { path: '', redirectTo: '/tasks', pathMatch: 'full' },
    { path: 'tasks', component: _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_0__["TasksComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    {{ title }}!\n  </h1>\n  <p>A To Do App Created Using Angular!</p>\n</div>\n<router-outlet></router-outlet>\n\n<script src=\"https://code.jquery.com/jquery-1.12.0.min.js\"></script>\n<script>window.jQuery || document.write('<script src=\"js/vendor/jquery-1.12.0.min.js\"><\\/script>')</script>\n<script src=\"js/plugins.js\"></script>\n<script src=\"js/main.js\"></script>\n\n<!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->\n<!-- <script>\n    (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=\n    function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;\n    e=o.createElement(i);r=o.getElementsByTagName(i)[0];\n    e.src='https://www.google-analytics.com/analytics.js';\n    r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));\n    ga('create','UA-XXXXX-X','auto');ga('send','pageview');\n</script> -->\n\n"

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
        this.title = 'Tasker';
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/tasks/tasks.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");






// Components


// Routes - For Routing

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_7__["TasksComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_8__["routes"])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/tasks/tasks.component.css":
/*!*******************************************!*\
  !*** ./src/app/tasks/tasks.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li {\n    background: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFza3MvdGFza3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL3Rhc2tzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsaSB7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/tasks/tasks.component.html":
/*!********************************************!*\
  !*** ./src/app/tasks/tasks.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-6 col-md-offset-3\">\n            <h2>Todo List</h2>\n            <hr />\n            <form>\n                <div class=\"input-group\">\n                    <input type=\"text\" name=\"inputTaskName\" [(ngModel)]=\"inputTask\" class=\"form-control\" placeholder=\"Your task\"\n                        required>\n                    <button class=\"btn btn-dark\" (click)=\"addTask()\" type=\"submit\">Add</button>\n                </div>\n            </form>\n            <table *ngIf=\"showTasks\" class=\" table table-dark table-striped todo-list\">\n                <tr *ngFor=\"let activetask of activeTasks; let i= index\" [attr.data-index]=\"i\">\n                    <td>{{activetask.description}}</td>\n                    <td class=\"text-right\">\n                        <button class=\"btn btn-success\" (click)=\"taskCompletion(i)\">\n                            <!-- <i class=\"glyphicon glyphicon-ok\"></i> -->\n                            Ok\n                        </button>\n                    </td>\n                    <td>\n                        <button class=\"btn btn-danger\" (click)=\"removeActiveTask(i)\">\n                            <!-- <i class=\"glyphicon glyphicon-remove\"></i> -->\n                            X\n                        </button>\n                    </td>\n                </tr>\n\n                <tr *ngFor=\"let task of completedTasks; let i= index\" [attr.data-index]=\"i\">\n                    <td class=\"todo-completed\">{{task.description}}</td>\n                    <td class=\"text-right\">\n                        <button class=\"btn btn-info\" (click)=\"repeatTask(i)\">\n                            <!-- <i class=\"glyphicon glyphicon-repeat\"></i> -->\n                            Redo\n                        </button>\n\n                    </td>\n                    <td>\n                        <button class=\"btn btn-danger\" (click)=\"removeCompletedTask(i)\">\n                            <!-- <i class=\"glyphicon glyphicon-remove\"></i> -->\n                            X\n                        </button>\n                    </td>\n                </tr>\n            </table>\n        </div>\n\n        <div class='col-md-3'>\n\n        </div>\n        <div class=\"col-md-3 col-md-offset-3\">\n            <h3>Counts</h3>\n            <hr />\n            <ul class='list-group'>\n                <li class=\"list-group-item d-flex justify-content-between align-items-center\">Total Tasks\n                    <span class=\"badge badge-primary badge-pill\">{{activeTasks.length + completedTasks.length}}</span>\n                </li>\n                <li class=\"list-group-item d-flex justify-content-between align-items-center\">Active Tasks :\n                    <span class=\"badge badge-primary badge-pill\">{{activeTasks.length}}</span></li>\n                <li class=\"list-group-item d-flex justify-content-between align-items-center\">Completed Tasks :\n                    <span class=\"badge badge-primary badge-pill\">{{completedTasks.length}}</span></li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-2\">\n            <button type=\"button\" class=\"btn btn-dark\" (click)=\"removeAllCompletedTasks()\">Remove Completed Tasks</button>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/tasks/tasks.component.ts":
/*!******************************************!*\
  !*** ./src/app/tasks/tasks.component.ts ***!
  \******************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_utils_isNilOrEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/utils/isNilOrEmpty */ "./src/utils/isNilOrEmpty.ts");



var TasksComponent = /** @class */ (function () {
    function TasksComponent() {
        this.showTasks = false;
        // Session Storage Strings
        this.storageStrings = {
            'active': 'activeTasks',
            'completed': 'completedTasks'
        };
    }
    TasksComponent.prototype.ngOnInit = function () {
        // Initializing Task Array
        this.activeTasks = [];
        this.completedTasks = [];
        // Getting task details from Session Storage
        var sessionActiveTask = sessionStorage.getItem(this.storageStrings.active);
        var sessionCompTask = sessionStorage.getItem(this.storageStrings.completed);
        if (!Object(src_utils_isNilOrEmpty__WEBPACK_IMPORTED_MODULE_2__["default"])(sessionActiveTask)) {
            this.activeTasks = JSON.parse(sessionStorage.getItem(this.storageStrings.active));
        }
        if (!Object(src_utils_isNilOrEmpty__WEBPACK_IMPORTED_MODULE_2__["default"])(sessionCompTask)) {
            this.completedTasks = JSON.parse(sessionStorage.getItem(this.storageStrings.completed));
        }
        this.showTasks = true;
    };
    TasksComponent.prototype.addTask = function () {
        // upon pressing add Task Button
        // Validation
        if (Object(src_utils_isNilOrEmpty__WEBPACK_IMPORTED_MODULE_2__["default"])(this.inputTask)) {
            alert('Please Enter a Task!');
            return;
        }
        var taskObj = {
            'description': this.inputTask
            // 'status': 'Active'
        };
        this.activeTasks.push(taskObj);
        this.storeInSession(this.storageStrings.active, this.activeTasks);
        this.inputTask = '';
    };
    TasksComponent.prototype.taskCompletion = function (index) {
        // upon pressing Complete Task Button
        this.modifyTask(this.activeTasks, this.completedTasks, this.storageStrings.active, this.storageStrings.completed, index);
    };
    TasksComponent.prototype.repeatTask = function (index) {
        // upon pressing repeat Task Button
        this.modifyTask(this.completedTasks, this.activeTasks, this.storageStrings.completed, this.storageStrings.active, index);
    };
    TasksComponent.prototype.removeActiveTask = function (index) {
        // upon pressing remove Task Button
        // Removing the task from Active task
        if (confirm('Remove Task?')) {
            this.modifyTask(this.activeTasks, [], this.storageStrings.active, '', index, 'remove');
        }
    };
    TasksComponent.prototype.removeCompletedTask = function (index) {
        // upon pressing Complete Button
        // Removing the task from completed task
        if (confirm('Remove Task?')) {
            this.modifyTask(this.completedTasks, [], this.storageStrings.completed, '', index, 'remove');
        }
    };
    TasksComponent.prototype.removeAllCompletedTasks = function () {
        if (Object(src_utils_isNilOrEmpty__WEBPACK_IMPORTED_MODULE_2__["default"])(this.completedTasks)) {
            return;
        }
        if (confirm('Remove All Tasks?')) {
            this.completedTasks = [];
            this.storeInSession(this.storageStrings.completed, this.completedTasks);
        }
    };
    // Used to Modify Tasks
    TasksComponent.prototype.modifyTask = function (initalTask, finalTask, sessionInitialKey, sessionFinalKey, index, modificationType) {
        if (modificationType === void 0) { modificationType = 'modify'; }
        // Validations For Initial Values
        if ([initalTask, sessionInitialKey, index].every(src_utils_isNilOrEmpty__WEBPACK_IMPORTED_MODULE_2__["default"])) {
            return console.log('Parameters are null or undefined in ModifyTask Function');
        }
        if (modificationType === 'modify') {
            // Validations for final values
            if ([finalTask, sessionFinalKey].every(src_utils_isNilOrEmpty__WEBPACK_IMPORTED_MODULE_2__["default"])) {
                return console.log('Parameters are null or undefined in ModifyTask Function');
            }
            // Adding it into Final Task
            finalTask.push(initalTask[index]);
            this.storeInSession(sessionFinalKey, finalTask);
        }
        // Removing the task from Inital task
        initalTask.splice(index, 1);
        this.storeInSession(sessionInitialKey, initalTask);
    };
    // Storing in Session
    TasksComponent.prototype.storeInSession = function (sessionKey, sessionValue) {
        sessionStorage.setItem(sessionKey, JSON.stringify(sessionValue));
    };
    TasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tasks',
            template: __webpack_require__(/*! ./tasks.component.html */ "./src/app/tasks/tasks.component.html"),
            styles: [__webpack_require__(/*! ./tasks.component.css */ "./src/app/tasks/tasks.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TasksComponent);
    return TasksComponent;
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

/***/ "./src/utils/isNilOrEmpty.ts":
/*!***********************************!*\
  !*** ./src/utils/isNilOrEmpty.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isNilOrEmpty = function (value) { return value === undefined || value === null || value.length === 0; };
/* harmony default export */ __webpack_exports__["default"] = (isNilOrEmpty);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/apple/Documents/SGAT/Personal/Tasker/ClientSide Code/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map