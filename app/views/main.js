(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+UN7":
/*!*******************************!*\
  !*** ./src/app/model/item.ts ***!
  \*******************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
class Item {
}


/***/ }),

/***/ "/AaM":
/*!**********************************************!*\
  !*** ./src/app/service/auth/auth.service.ts ***!
  \**********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class AuthService {
    constructor(http, url) {
        this.http = http;
        this.url = url;
        this.loggedInUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](JSON.parse(localStorage.getItem('loggedInUser')));
        this.loggedInUser = this.loggedInUserSubject.asObservable();
    }
    get loggedInUserValue() {
        return this.loggedInUserSubject.value;
    }
    login(username, password) {
        return this.http.post(`${this.url}/users/authenticate`, { username, password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(user => {
            // store user details in local storage to keep user logged in between page refreshes
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            this.loggedInUserSubject.next(user);
            return user;
        }));
    }
    logout() {
        // remove user from local storage and log out
        localStorage.removeItem('loggedInUser');
        this.loggedInUserSubject.next(null);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]('DOMAIN_URL')); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: ['DOMAIN_URL']
            }] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ACE Assessment\ACEDataEntry\src\main.ts */"zUnb");


/***/ }),

/***/ "0Cj5":
/*!*******************************************************!*\
  !*** ./src/app/interceptor/http-error-interceptor.ts ***!
  \*******************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/auth/auth.service */ "/AaM");





class ErrorInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            const error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "4kQB":
/*!**************************************************!*\
  !*** ./src/app/interceptor/login-interceptor.ts ***!
  \**************************************************/
/*! exports provided: LoginInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginInterceptor", function() { return LoginInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





const users = [{ id: 1, username: 'testuser', password: 'testuser' }];
class LoginInterceptor {
    intercept(request, next) {
        const { url, method, headers, body } = request;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(handleRoute));
        function handleRoute() {
            switch (true) {
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate();
                default:
                    return next.handle(request);
            }
        }
        function authenticate() {
            const { username, password } = body;
            const user = users.find(x => x.username === username && x.password === password);
            if (!user)
                return error('Username or password is incorrect');
            return success({
                id: user.id,
                username: user.username
            });
        }
        function success(body) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body }));
        }
        function error(message) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message } });
        }
    }
}
LoginInterceptor.ɵfac = function LoginInterceptor_Factory(t) { return new (t || LoginInterceptor)(); };
LoginInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginInterceptor, factory: LoginInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _model_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/item */ "+UN7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/auth/auth.service */ "/AaM");
/* harmony import */ var _service_item_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/item-data.service */ "cQXn");
/* harmony import */ var _service_print_pdf_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service/print-pdf.service */ "VC4w");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _numeric_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../numeric.directive */ "sIpM");

























const _c0 = ["sidenav"];
const _c1 = ["formDirective"];
function HomeComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Item Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r17.name, " ");
} }
function HomeComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Rate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r18.rate), " ");
} }
function HomeComponent_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r19.quantity, " ");
} }
function HomeComponent_th_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r20.amount), " ");
} }
function HomeComponent_th_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_td_35_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_td_35_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const element_r21 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.update(element_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_td_35_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const element_r21 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.delete(element_r21.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_tr_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 46);
} }
function HomeComponent_tr_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 47);
} }
function HomeComponent_mat_error_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_mat_error_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Rate is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_mat_error_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Quantity is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function () { return [2, 4, 6, 10, 20]; };
class HomeComponent {
    constructor(router, authService, service, pdfService, snackBar) {
        this.router = router;
        this.authService = authService;
        this.service = service;
        this.pdfService = pdfService;
        this.snackBar = snackBar;
        this.totalValue = "";
        this.displayedColumns = ['name', 'rate', 'quantity', 'amount', 'actions'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.horizontalPosition = 'right';
        this.verticalPosition = 'top';
    }
    close() {
        this.formDirective.resetForm();
        this.sidenav.close();
    }
    ngOnInit() {
        this.getAllItems();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            rate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            createdAt: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            updatedAt: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }
    getAllItems() {
        this.service.getAllItems().subscribe(data => {
            this.dataSource.data = data;
            this.itemArray = this.dataSource.data;
            this.calculateTotal(this.dataSource.data);
        });
    }
    update(element) {
        this.formTitle = " Update Item";
        this.formButton = "Update";
        this.form.get('name').setValue(element.name);
        this.form.get('rate').setValue(element.rate);
        this.form.get('quantity').setValue(element.quantity);
        this.form.get('amount').setValue(element.amount);
        this.form.get('id').setValue(element.id);
        this.sidenav.open();
    }
    openSnackBar(message) {
        this.snackBar.open(message, 'End now', {
            duration: 3000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    }
    delete(id) {
        this.service.deleteItem(id).subscribe(data => {
            this.openSnackBar("Item Deleted!!");
            this.getAllItems();
        }, error => {
            this.openSnackBar("Item not Deleted!!");
        });
    }
    call(item) {
        if (item.quantity > 0 && item.rate > 0) {
            this.form.get('amount').setValue((item.quantity * item.rate).toFixed(2));
        }
        if (item.quantity == "" || item.rate == "") {
            this.form.get('amount').setValue("");
        }
    }
    saveItem(item) {
        if (item.id == null) {
            var itemObj = new _model_item__WEBPACK_IMPORTED_MODULE_5__["Item"]();
            itemObj.name = item.name;
            itemObj.quantity = item.quantity;
            itemObj.rate = item.rate;
            itemObj.amount = item.amount;
            this.service.createItem(itemObj).subscribe(data => {
                this.close();
                this.getAllItems();
                this.openSnackBar("New Item Added!!");
            }, error => {
                this.openSnackBar("Item Not Added!!");
            });
        }
        else {
            var itemObj = new _model_item__WEBPACK_IMPORTED_MODULE_5__["Item"]();
            itemObj.name = item.name;
            itemObj.quantity = item.quantity;
            itemObj.rate = item.rate;
            itemObj.amount = item.amount;
            this.service.updateItem(item.id, itemObj).subscribe(data => {
                this.close();
                this.getAllItems();
                this.openSnackBar("Item Updated!!");
            }, error => {
                this.openSnackBar("Item Not Updated!!");
            });
        }
    }
    hasError(controlName, errorName) {
        return this.form.controls[controlName].hasError(errorName);
    }
    calculateTotal(items) {
        var total = 0;
        if (items.length > 0) {
            for (let item of items) {
                total = total + Number(item.amount);
            }
            total = Number(total.toFixed(2));
            this.totalValue = total.toFixed(2);
        }
    }
    openNav() {
        this.formTitle = " Create New Item";
        this.formButton = "Create";
        this.formDirective.resetForm();
        this.sidenav.open();
    }
    doFilter(value) {
        this.dataSource.filter = value.trim().toLocaleLowerCase();
    }
    printPDF() {
        this.pdfService.generatePdf(this.totalValue, this.itemArray);
    }
    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_item_data_service__WEBPACK_IMPORTED_MODULE_8__["ItemDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_print_pdf_service__WEBPACK_IMPORTED_MODULE_9__["PrintPDFService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formDirective = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 66, vars: 17, consts: [[1, "home-container", 3, "backdropClick"], ["color", "primary"], ["href", "#", 1, "navbar-brand"], ["src", "assets/img/ace-logo.png", "width", "150px", "height", "80px"], [1, "spacer"], ["mat-raised-button", "", 2, "background-color", "black", "color", "#FBB040", 3, "click"], [1, "action-button", "total-value"], [2, "float", "right"], ["mat-raised-button", "", "color", "primary", 1, "btn", "btn-primary", "action-button", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "btn", "btn-primary", "action-button", 3, "disabled", "click"], [1, "fa", "fa-print"], ["fxLayout", "", "fxLayoutAlign", "center center", 2, "clear", "right"], ["fxFlex", "40%"], ["matInput", "", "type", "text", "placeholder", "Filter", 3, "keyup"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "rate"], ["matColumnDef", "quantity"], ["matColumnDef", "amount"], ["matColumnDef", "actions"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSize", "pageSizeOptions"], ["disableClose", "", 1, "sidenav", 3, "keydown.escape"], ["sidenav", ""], ["fxLayout", "row wrap", "fxLayoutAlign", "center center", 2, "height", "100%"], ["fxFlex", "300px", "fxFlex.xs", "100%", 2, "height", "100%", "background-color", "#FBB040"], ["autocomplete", "off", "novalidate", "", "fxLayout", "column wrap", "fxLayoutAlign", "center center", "fxLayoutGap", "10px", 3, "formGroup"], ["formDirective", "ngForm"], ["matInput", "", "type", "text", "placeholder", "Item's name", "formControlName", "name", "id", "name"], [4, "ngIf"], ["matInput", "", "appNumeric", "", "decimals", "2", "type", "text", "placeholder", "Item's Rate", "formControlName", "rate", "id", "rate", 3, "input"], ["align", "end"], ["matInput", "", "appNumeric", "", "decimals", "2", "type", "text", "placeholder", "Item's Quantity", "formControlName", "quantity", "id", "quantity", 3, "input"], ["align", "center", 2, "margin-top", "25px"], ["mat-raised-button", "", "color", "warn", 1, "btn", "btn-danger", "action-button", 3, "click"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["type", "button", "data-toggle", "tooltip", "data-placement", "top", "title", "Edit", 1, "btn", "btn-success", "btn-sm", "rounded-0", 3, "click"], [1, "fa", "fa-edit"], ["type", "button", "data-toggle", "tooltip", "data-placement", "top", "title", "Delete", 1, "btn", "btn-danger", "btn-sm", "rounded-0", 3, "click"], [1, "fa", "fa-trash"], ["mat-header-row", ""], ["mat-row", ""]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("backdropClick", function HomeComponent_Template_mat_sidenav_container_backdropClick_0_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_6_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_12_listener() { return ctx.openNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "+ Add Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_14_listener() { return ctx.printPDF(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Print PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function HomeComponent_Template_input_keyup_19_listener($event) { return ctx.doFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, HomeComponent_th_22_Template, 2, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HomeComponent_td_23_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](24, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, HomeComponent_th_25_Template, 2, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, HomeComponent_td_26_Template, 3, 3, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](27, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, HomeComponent_th_28_Template, 2, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, HomeComponent_td_29_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](30, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, HomeComponent_th_31_Template, 2, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, HomeComponent_td_32_Template, 3, 3, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](33, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, HomeComponent_th_34_Template, 2, 0, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, HomeComponent_td_35_Template, 5, 0, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, HomeComponent_tr_36_Template, 1, 0, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, HomeComponent_tr_37_Template, 1, 0, "tr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "mat-paginator", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-sidenav", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.escape", function HomeComponent_Template_mat_sidenav_keydown_escape_39_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "section", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-card", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "form", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, HomeComponent_mat_error_50_Template, 2, 0, "mat-error", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function HomeComponent_Template_input_input_52_listener() { return ctx.call(ctx.form.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-hint", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Not more then Two decimal places");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, HomeComponent_mat_error_55_Template, 2, 0, "mat-error", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function HomeComponent_Template_input_input_57_listener() { return ctx.call(ctx.form.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-hint", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Not more then Two decimal places");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, HomeComponent_mat_error_60_Template, 2, 0, "mat-error", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-card-actions", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_62_listener() { return ctx.saveItem(ctx.form.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_64_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Total: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 14, ctx.totalValue), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.itemArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasError("name", "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasError("rate", "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasError("quantity", "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formButton);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavContent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultFlexDirective"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenav"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], _numeric_directive__WEBPACK_IMPORTED_MODULE_19__["NumericDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatHint"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardActions"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatError"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_18__["CurrencyPipe"]], styles: [".ng-invalid.ng-touched[_ngcontent-%COMP%] {\r\n    border-color: red;\r\n}\r\n\r\n.home-container[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n\r\n.sidenav[_ngcontent-%COMP%]{\r\n      width:300px;\r\n  }\r\n\r\n.action-button[_ngcontent-%COMP%]{\r\n      margin: 30px;\r\n  }\r\n\r\n.mat-header-cell[_ngcontent-%COMP%]{\r\n      font-size:18px;\r\n  }\r\n\r\ntable[_ngcontent-%COMP%] {\r\n    width: 99%;\r\n    margin:auto;\r\n    overflow-x: auto;\r\n    overflow-y: hidden;\r\n    min-width: 300px;\r\n}\r\n\r\nth.mat-header-cell[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    max-width: 300px;\r\n    color:black;\r\n}\r\n\r\n.mat-toolbar.mat-primary[_ngcontent-%COMP%]{\r\n    background-color:#FBB040\r\n}\r\n\r\ntr.mat-header-row[_ngcontent-%COMP%]{\r\n    background-color: #FBB040;\r\n}\r\n\r\n.mat-form-field[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin: 0 0 20px 0;\r\n}\r\n\r\nmat-card-actions.mat-card-actions[_ngcontent-%COMP%] {\r\n    margin-top: 25px;\r\n}\r\n\r\n.spacer[_ngcontent-%COMP%] {\r\n    flex: 1 1 auto;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%]{\r\n    margin-right: 10px;\r\n}\r\n\r\n.total-value[_ngcontent-%COMP%]{\r\n    float:left;\r\n    font-size: 20px;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n    .action-button[_ngcontent-%COMP%]{\r\n        margin: 5px;\r\n    }\r\n }\r\n\r\n@media (min-width: 450px) and (max-width: 550px) {\r\n    table[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%]{\r\n        margin-right: 1px;\r\n        font-size:0.575rem;\r\n    }\r\n\r\n    .mat-header-cell[_ngcontent-%COMP%]{\r\n        font-size:12px;\r\n    }\r\n\r\n    .mat-cell[_ngcontent-%COMP%]{\r\n        font-size:12px;\r\n    }\r\n\r\n    .total-value[_ngcontent-%COMP%]{\r\n        font-size: 18px;\r\n    }\r\n\r\n    .action-button[_ngcontent-%COMP%]{\r\n        padding:0 5px;\r\n    }\r\n }\r\n\r\n@media screen and (max-width: 450px) {\r\n    td.mat-cell[_ngcontent-%COMP%]:last-of-type{\r\n        padding-right: 10px;\r\n    }\r\n\r\n    table[_ngcontent-%COMP%]   .btn-sm[_ngcontent-%COMP%]{\r\n        margin-right: 1px;\r\n        font-size: 0.495rem;\r\n    }\r\n\r\n    .mat-header-cell[_ngcontent-%COMP%]{\r\n        font-size:10px;\r\n    }\r\n\r\n    .mat-cell[_ngcontent-%COMP%]{\r\n        font-size:10px;\r\n    }\r\n\r\n    .total-value[_ngcontent-%COMP%]{\r\n        font-size: 16px;\r\n    }\r\n\r\n    .action-button[_ngcontent-%COMP%]{\r\n        padding:0 5px;\r\n    }\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0VBQ1Y7O0FBRUE7TUFDSSxXQUFXO0VBQ2Y7O0FBRUE7TUFDSSxZQUFZO0VBQ2hCOztBQUNBO01BQ0ksY0FBYztFQUNsQjs7QUFFQTtJQUNFLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUVBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7Q0FDSDs7QUFFQTtJQUNHO1FBQ0ksaUJBQWlCO1FBQ2pCLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7Q0FDSDs7QUFFQTtJQUNHO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7Q0FDSCIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4uaG9tZS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbiAgLnNpZGVuYXZ7XHJcbiAgICAgIHdpZHRoOjMwMHB4O1xyXG4gIH1cclxuICBcclxuICAuYWN0aW9uLWJ1dHRvbntcclxuICAgICAgbWFyZ2luOiAzMHB4O1xyXG4gIH1cclxuICAubWF0LWhlYWRlci1jZWxse1xyXG4gICAgICBmb250LXNpemU6MThweDtcclxuICB9XHJcblxyXG4gIHRhYmxlIHtcclxuICAgIHdpZHRoOiA5OSU7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG59XHJcbnRoLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59XHJcblxyXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGQkIwNDBcclxufVxyXG5cclxudHIubWF0LWhlYWRlci1yb3d7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJCMDQwO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCAwIDIwcHggMDtcclxufVxyXG5cclxubWF0LWNhcmQtYWN0aW9ucy5tYXQtY2FyZC1hY3Rpb25zIHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi5zcGFjZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbnRhYmxlIC5idG4tc217XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi50b3RhbC12YWx1ZXtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuYWN0aW9uLWJ1dHRvbntcclxuICAgICAgICBtYXJnaW46IDVweDtcclxuICAgIH1cclxuIH1cclxuICBcclxuIEBtZWRpYSAobWluLXdpZHRoOiA0NTBweCkgYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XHJcbiAgICB0YWJsZSAuYnRuLXNte1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTowLjU3NXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAubWF0LWhlYWRlci1jZWxse1xyXG4gICAgICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXQtY2VsbHtcclxuICAgICAgICBmb250LXNpemU6MTJweDtcclxuICAgIH1cclxuXHJcbiAgICAudG90YWwtdmFsdWV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hY3Rpb24tYnV0dG9ue1xyXG4gICAgICAgIHBhZGRpbmc6MCA1cHg7XHJcbiAgICB9XHJcbiB9XHJcblxyXG4gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAgIHRkLm1hdC1jZWxsOmxhc3Qtb2YtdHlwZXtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHRhYmxlIC5idG4tc217XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjQ5NXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAubWF0LWhlYWRlci1jZWxse1xyXG4gICAgICAgIGZvbnQtc2l6ZToxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXQtY2VsbHtcclxuICAgICAgICBmb250LXNpemU6MTBweDtcclxuICAgIH1cclxuXHJcbiAgICAudG90YWwtdmFsdWV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hY3Rpb24tYnV0dG9ue1xyXG4gICAgICAgIHBhZGRpbmc6MCA1cHg7XHJcbiAgICB9XHJcbiB9XHJcbiAgXHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }, { type: _service_item_data_service__WEBPACK_IMPORTED_MODULE_8__["ItemDataService"] }, { type: _service_print_pdf_service__WEBPACK_IMPORTED_MODULE_9__["PrintPDFService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"] }]; }, { sidenav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sidenav']
        }], formDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['formDirective']
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"]]
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]]
        }] }); })();


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    baseRestUrl: "http://localhost:8080/api/items",
    domainUrl: "http://localhost:8080",
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

/***/ "CG0s":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






class ErrorComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goToHome() {
        this.router.navigate(['/']);
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 14, vars: 0, consts: [["color", "primary"], ["href", "#", 1, "navbar-brand"], ["src", "assets/img/ace-logo.png", "width", "150px", "height", "80px"], [1, "mycard"], [1, "button"], ["mat-button", "", 2, "background-color", "black", "color", "#FBB040", 3, "click"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "404 Page Not Found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "The page you were looking for doesn't exist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ErrorComponent_Template_button_click_12_listener() { return ctx.goToHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], styles: [".mycard[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin: 100px 0px;\r\n  }\r\n\r\n  mat-card-title[_ngcontent-%COMP%], mat-card-content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n\r\n  .button[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n  }\r\n\r\n  .mat-toolbar.mat-primary[_ngcontent-%COMP%], .mat-card[_ngcontent-%COMP%]{\r\n    background-color:#FBB040\r\n}\r\n\r\n  .button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    background-color:black;\r\n    color:#FBB040;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtFQUNuQjs7RUFFQTs7SUFFRSxhQUFhO0lBQ2IsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFO0FBQ0o7O0VBRUE7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQiIsImZpbGUiOiJlcnJvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15Y2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDEwMHB4IDBweDtcclxuICB9XHJcblxyXG4gIG1hdC1jYXJkLXRpdGxlLFxyXG4gIG1hdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB9XHJcblxyXG4gIC5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSwubWF0LWNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGQkIwNDBcclxufVxyXG5cclxuLmJ1dHRvbiBidXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG4gICAgY29sb3I6I0ZCQjA0MDtcclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error',
                templateUrl: './error.component.html',
                styleUrls: ['./error.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "KFp4":
/*!************************************!*\
  !*** ./src/app/auth/auth-guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth/auth.service */ "/AaM");




class AuthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(route, state) {
        const loggedInUser = this.authService.loggedInUserValue;
        //if userdata is available, then it means user has logged in and it allows routing to home page
        if (loggedInUser) {
            return true;
        }
        // if not logged in, redirect to login page with the return url
        this.router.navigate(['/login']);
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "VC4w":
/*!**********************************************!*\
  !*** ./src/app/service/print-pdf.service.ts ***!
  \**********************************************/
/*! exports provided: PrintPDFService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintPDFService", function() { return PrintPDFService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class PrintPDFService {
    constructor() { }
    loadPdfMaker() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.pdfMake) {
                const pdfMakeModule = yield __webpack_require__.e(/*! import() | pdfmake-build-pdfmake */ "pdfmake-build-pdfmake").then(__webpack_require__.t.bind(null, /*! pdfmake/build/pdfmake */ "5JmO", 7));
                const pdfFontsModule = yield __webpack_require__.e(/*! import() | pdfmake-build-vfs_fonts */ "pdfmake-build-vfs_fonts").then(__webpack_require__.t.bind(null, /*! pdfmake/build/vfs_fonts */ "TruH", 7));
                this.pdfMake = pdfMakeModule.default;
                this.pdfMake.vfs = pdfFontsModule.default.pdfMake.vfs;
            }
        });
    }
    generatePdf(totalValue, itemArray) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loadPdfMaker();
            const def = this.getDocumentDefinition(totalValue, itemArray);
            this.pdfMake.createPdf(def).open();
        });
    }
    formatCurrentDate() {
        var dateString = new Date().toLocaleString('en-AU');
        var currentDate = new Date(dateString);
        var date = currentDate.toLocaleDateString('en-US');
        var hours = currentDate.getHours();
        var minutes = currentDate.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        var mins = minutes < 10 ? '0' + minutes : minutes;
        var finalDate = date + ' ' + hours + ':' + mins + ' ' + ampm;
        return finalDate;
    }
    getDocumentDefinition(totalValue, itemArray) {
        console.log(totalValue);
        var dataArray = [];
        itemArray.forEach(element => {
            var dataObj = [];
            dataObj.push(element.name);
            dataObj.push("$" + element.rate);
            dataObj.push(element.quantity);
            dataObj.push("$" + element.amount);
            dataArray.push(dataObj);
        });
        this.pdfMake.tableLayouts = {
            myLayout: {
                hLineWidth: function (i, node) {
                    if (i === 0 || i === node.table.body.length) {
                        return 1;
                    }
                    return 0;
                },
                vLineWidth: function (i, node) {
                    if (i === 0 || i === node.table.body.length + 1) {
                        return 1;
                    }
                    return 1;
                },
                hLineColor: function (i) {
                    return i === 1 ? 'black' : '#aaa';
                },
                paddingLeft: function (i) {
                    return 8;
                },
                paddingTop: function (i, node) {
                    return 8;
                },
                paddingBottom: function (i, node) {
                    return 8;
                }
            }
        };
        var docDefinition = {
            pageSize: 'A4',
            pageMargins: [40, 140, 40, 60],
            header: [{
                    columns: [
                        {
                            width: '*',
                            text: 'Report',
                            fontSize: 30,
                            margin: [40, 20, 0, 0]
                        },
                        {
                            width: 80,
                            text: ''
                        },
                        {
                            width: '*',
                            text: this.formatCurrentDate(),
                            fontSize: 14,
                            margin: [40, 35, 0, 0]
                        },
                        {
                            image: 'data:image/png;base64,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',
                            width: 160,
                            height: 100,
                            margin: [0, 0, 60, 0]
                        }
                    ],
                    columnGap: 0
                }, { canvas: [{ type: 'rect', x: 40, y: -40, w: 380, h: 1 }] }],
            footer: [{ canvas: [{ type: 'rect', x: 40, y: 0, w: 520, h: 1 }] }, {
                    columns: [
                        {
                            width: 'auto',
                            text: 'Ace Contractors Group Pty. Ltd.',
                            fontSize: 16,
                            margin: [40, 10, 0, 0]
                        },
                        {
                            width: '*',
                            text: 'ABN 12 345 678 901',
                            fontSize: 16,
                            margin: [0, 10, 20, 0]
                        }
                    ],
                    columnGap: 150
                }],
            content: [
                {
                    layout: 'noBorders',
                    table: {
                        headerRows: 1,
                        widths: ['*', 100, 100, '*'],
                        body: [
                            [{ text: 'Item', bold: true, alignment: 'center' }, { text: 'Rate', bold: true, alignment: 'center' }, { text: 'Quantity', bold: true, alignment: 'center' }, { text: 'Amount', bold: true, alignment: 'center' }]
                        ]
                    },
                    style: 'itemHeader'
                },
                {
                    layout: 'myLayout',
                    table: {
                        headerRows: 1,
                        widths: ['*', 100, 100, '*'],
                        body: dataArray
                    },
                    alignment: 'center'
                }, {
                    layout: 'noBorders',
                    table: {
                        headerRows: 1,
                        widths: ['*', 100, 100, '*'],
                        body: [
                            ['', '', { text: 'Total: ', bold: true, fontSize: 12, alignment: 'right', margin: [0, 10, 0, 0] }, { text: "$ " + totalValue, bold: true, fontSize: 12, alignment: 'center', margin: [0, 10, 0, 0] }]
                        ]
                    }
                }, {
                    text: 'Ace Person',
                    margin: [0, 100, 0, 0]
                }, {
                    text: 'Project Manager',
                    margin: [0, 5, 0, 0],
                    bold: true,
                    startPosition: {
                        left: 60
                    }
                }
            ],
            styles: {
                itemHeader: {
                    margin: [0, 0, 0, 0]
                }
            }
        };
        return docDefinition;
    }
}
PrintPDFService.ɵfac = function PrintPDFService_Factory(t) { return new (t || PrintPDFService)(); };
PrintPDFService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PrintPDFService, factory: PrintPDFService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PrintPDFService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _numeric_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./numeric.directive */ "sIpM");
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/environments/environment */ "AytR");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./error/error.component */ "CG0s");
/* harmony import */ var _interceptor_http_error_interceptor__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./interceptor/http-error-interceptor */ "0Cj5");
/* harmony import */ var _interceptor_login_interceptor__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./interceptor/login-interceptor */ "4kQB");



























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: 'BASE_URL', useValue: _src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].baseRestUrl },
        { provide: 'DOMAIN_URL', useValue: _src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].domainUrl },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _interceptor_http_error_interceptor__WEBPACK_IMPORTED_MODULE_24__["ErrorInterceptor"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _interceptor_login_interceptor__WEBPACK_IMPORTED_MODULE_25__["LoginInterceptor"], multi: true }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__["FlexLayoutModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_20__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _numeric_directive__WEBPACK_IMPORTED_MODULE_5__["NumericDirective"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
        _error_error_component__WEBPACK_IMPORTED_MODULE_23__["ErrorComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__["FlexLayoutModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_20__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _numeric_directive__WEBPACK_IMPORTED_MODULE_5__["NumericDirective"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
                    _error_error_component__WEBPACK_IMPORTED_MODULE_23__["ErrorComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__["FlexLayoutModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_20__["AppRoutingModule"]
                ],
                providers: [
                    { provide: 'BASE_URL', useValue: _src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].baseRestUrl },
                    { provide: 'DOMAIN_URL', useValue: _src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].domainUrl },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _interceptor_http_error_interceptor__WEBPACK_IMPORTED_MODULE_24__["ErrorInterceptor"], multi: true },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _interceptor_login_interceptor__WEBPACK_IMPORTED_MODULE_25__["LoginInterceptor"], multi: true }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cQXn":
/*!**********************************************!*\
  !*** ./src/app/service/item-data.service.ts ***!
  \**********************************************/
/*! exports provided: ItemDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDataService", function() { return ItemDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ItemDataService {
    constructor(http, baseUrl) {
        this.http = http;
        this.baseUrl = baseUrl;
    }
    getAllItems() {
        return this.http.get(this.baseUrl);
    }
    createItem(data) {
        return this.http.post(this.baseUrl, data);
    }
    updateItem(id, data) {
        return this.http.put(`${this.baseUrl}/${id}`, data);
    }
    deleteItem(id) {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }
}
ItemDataService.ɵfac = function ItemDataService_Factory(t) { return new (t || ItemDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]('BASE_URL')); };
ItemDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ItemDataService, factory: ItemDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: ['BASE_URL']
            }] }]; }, null); })();


/***/ }),

/***/ "sIpM":
/*!**************************************!*\
  !*** ./src/app/numeric.directive.ts ***!
  \**************************************/
/*! exports provided: NumericDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumericDirective", function() { return NumericDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NumericDirective {
    constructor(element) {
        this.element = element;
        this.decimals = 0;
    }
    check(value) {
        if (this.decimals <= 0) {
            return String(value).match(new RegExp(/^\d+$/));
        }
        else {
            var regExpString = "^\\s*((\\d+(\\.\\d{0," +
                this.decimals +
                "})?)|((\\d*(\\.\\d{1," +
                this.decimals +
                "}))))\\s*$";
            return String(value).match(new RegExp(regExpString));
        }
    }
    run(oldValue, event) {
        setTimeout(() => {
            let currentValue = this.element.nativeElement.value;
            this.element.nativeElement.value = currentValue.trim();
            if (event.key === 'Backspace') {
                if (currentValue.includes(".") && currentValue.indexOf(".") == currentValue.length - 1) {
                    this.element.nativeElement.value = currentValue.replace(".", "");
                }
            }
            if (currentValue !== "" && !this.check(currentValue)) {
                this.element.nativeElement.value = oldValue;
            }
        });
    }
    onKeyDown(event) {
        this.run(this.element.nativeElement.value, event);
    }
    onPaste(event) {
        this.run(this.element.nativeElement.value, event);
    }
}
NumericDirective.ɵfac = function NumericDirective_Factory(t) { return new (t || NumericDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
NumericDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NumericDirective, selectors: [["", "appNumeric", ""]], hostBindings: function NumericDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NumericDirective_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); })("paste", function NumericDirective_paste_HostBindingHandler($event) { return ctx.onPaste($event); });
    } }, inputs: { decimals: "decimals" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumericDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appNumeric]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { decimals: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["decimals"]
        }], onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["keydown", ["$event"]]
        }], onPaste: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["paste", ["$event"]]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth-guard */ "KFp4");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error/error.component */ "CG0s");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "vtpD");








const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: '**', component: _error_error_component__WEBPACK_IMPORTED_MODULE_3__["ErrorComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/auth/auth.service */ "/AaM");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");















function LoginComponent_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Username is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 13);
} }
function LoginComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.error);
} }
class LoginComponent {
    constructor(formBuilder, route, router, authService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.loading = false;
        this.error = '';
        // redirect to home if already logged in
        if (this.authService.loggedInUserValue) {
            this.router.navigate(['/']);
        }
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    get formControls() { return this.loginForm.controls; }
    submit() {
        this.loading = true;
        this.authService.login(this.formControls.username.value, this.formControls.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(data => {
            this.router.navigate(['/']);
        }, error => {
            this.error = error;
            this.loading = false;
        });
    }
    hasError(controlName, errorName) {
        return this.loginForm.controls[controlName].hasError(errorName);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 23, vars: 6, consts: [["color", "primary"], ["href", "#", 1, "navbar-brand"], ["src", "assets/img/ace-logo.png", "width", "150px", "height", "80px"], ["fxFlex", "", "fxLayout", "", "fxLayoutAlign", "end", "fxHide.xs", ""], [1, "mycard"], [3, "formGroup", "ngSubmit"], ["type", "text", "matInput", "", "placeholder", "Username", "formControlName", "username"], [4, "ngIf"], ["type", "password", "matInput", "", "placeholder", "Password", "formControlName", "password"], [1, "button"], ["type", "submit", "mat-button", "", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], ["class", "alert alert-danger mt-3 mb-0", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "mr-1"], [1, "alert", "alert-danger", "mt-3", "mb-0"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_9_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginComponent_mat_error_13_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LoginComponent_mat_error_17_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LoginComponent_span_20_Template, 1, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, LoginComponent_div_22_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasError("username", "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasError("password", "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultShowHideDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"]], styles: [".mycard[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin: 100px 0px;\r\n  }\r\n\r\n  .mat-form-field[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    min-width: 300px;\r\n  }\r\n\r\n  mat-card-title[_ngcontent-%COMP%], mat-card-content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n\r\n  .error[_ngcontent-%COMP%] {\r\n    padding: 16px;\r\n    width: 300px;\r\n    color: white;\r\n    background-color: red;\r\n  }\r\n\r\n  .button[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n  }\r\n\r\n  .mat-toolbar.mat-primary[_ngcontent-%COMP%], .mat-card[_ngcontent-%COMP%]{\r\n    background-color:#FBB040\r\n}\r\n\r\n  .button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    background-color:black;\r\n    color:#FBB040;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7O0VBRUE7O0lBRUUsYUFBYTtJQUNiLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtJQUNaLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRTtBQUNKOztFQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7QUFDakIiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teWNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMDBweCAwcHg7XHJcbiAgfVxyXG5cclxuICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gIH1cclxuXHJcbiAgbWF0LWNhcmQtdGl0bGUsXHJcbiAgbWF0LWNhcmQtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuZXJyb3Ige1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICB9XHJcblxyXG4gIC5idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgfVxyXG5cclxuICAubWF0LXRvb2xiYXIubWF0LXByaW1hcnksLm1hdC1jYXJke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRkJCMDQwXHJcbn1cclxuXHJcbi5idXR0b24gYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuICAgIGNvbG9yOiNGQkIwNDA7XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map