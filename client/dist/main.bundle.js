webpackJsonp([0,3],{

/***/ 462:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_company_service__ = __webpack_require__(722);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CompanyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompanyComponent = (function () {
    function CompanyComponent(companyService) {
        var _this = this;
        this.companyService = companyService;
        this.title = "Company List";
        this.states = [
            { value: 'CA', viewValue: 'CA' },
            { value: 'CO', viewValue: 'CO' },
            { value: 'TX', viewValue: 'TX' }
        ];
        this.hasStateError = false;
        this.companyService.getCompanies()
            .subscribe(function (companies) {
            _this.companies = companies;
        });
    }
    CompanyComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        console.log(value, valid);
    };
    CompanyComponent.prototype.validateState = function (value) {
        if (this.cState === "default")
            this.hasStateError = true;
        else
            this.hasStateError = false;
    };
    CompanyComponent.prototype.addCompany = function (event) {
        var _this = this;
        event.preventDefault();
        var newCompany = {
            CompanyName: this.cName,
            CompanyStreet: this.cStreet,
            CompanyCity: this.cCity,
            CompanyState: this.cState,
            CompanyZip: this.cZip,
            CompanyPhone: this.cPhone,
            CompanyEmail: this.cEmail
        };
        this.companyService.addCompany(newCompany)
            .subscribe(function (company) {
            _this.companies.push(company);
            _this.cName = '';
            _this.cStreet = '';
            _this.cCity = '';
            _this.cState = '';
            _this.cZip = '';
            _this.cPhone = '';
            _this.cEmail = '';
        });
    };
    CompanyComponent.prototype.deleteCompany = function (id) {
        var companies = this.companies;
        var isConfirm = confirm('Are you sure you want to delete');
        if (!isConfirm) {
            return false;
        }
        else {
            this.companyService.deleteCompany(id).subscribe(function (data) {
                if (data.n == 1) {
                    for (var i = 0; i < companies.length; i++) {
                        if (companies[i]._id == id) {
                            companies.splice(i, 1);
                        }
                    }
                }
            });
        }
    };
    CompanyComponent.prototype.updateCompany = function (company) {
        var _company = {
            _id: company._id,
            CompanyName: company.CompanyName,
            CompanyEmail: 'company@CompanyEmail.com'
        };
        this.companyService.updateCompany(_company).subscribe(function (data) {
            company.CompanyEmail = 'company@CompanyEmail.com';
        });
    };
    CompanyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'company',
            template: __webpack_require__(958),
            styles: [__webpack_require__(954)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_company_service__["a" /* CompanyService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_company_service__["a" /* CompanyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_company_service__["a" /* CompanyService */]) === 'function' && _a) || Object])
    ], CompanyComponent);
    return CompanyComponent;
    var _a;
}());
//# sourceMappingURL=/Users/terilmathews/Documents/ShockAndVibeReporting/client/src/company.component.js.map

/***/ },

/***/ 463:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_quotes_service__ = __webpack_require__(465);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return QuoteDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { MdCard, MdToolbar, MdIconModule, MdButtonModule, MdListModule, MdInputModule, MdCheckboxModule } from '@angular/material';
var QuoteDetailComponent = (function () {
    function QuoteDetailComponent(quotesService) {
        var _this = this;
        this.quotesService = quotesService;
        this.jobTypes = [
            { value: 'T1', viewValue: 'Type One' },
            { value: 'T2', viewValue: 'Type Two' },
            { value: 'T3', viewValue: 'Type Three' }
        ];
        this.companies = [
            { value: 'CO1', viewValue: 'Company One' },
            { value: 'CO2', viewValue: 'Company Two' },
            { value: 'CO3', viewValue: 'Company Three' }
        ];
        this.quotesService.getQuotes()
            .subscribe(function (quotes) {
            _this.quotes = quotes;
        });
    }
    QuoteDetailComponent.prototype.ngOnInit = function () {
    };
    QuoteDetailComponent.prototype.addQuote = function (event) {
        var _this = this;
        event.preventDefault();
        var newQuote = {
            QuoteName: this.quoteName,
            CompanyName: this.companyName,
            AmountQuoted: this.amountQuoted,
            JobType: this.jobType,
            JobDate: this.jobDate,
            JobDetails: this.jobDetails,
            DeliveryAddress: this.deliveryAddress
        };
        this.quotesService.addQuote(newQuote)
            .subscribe(function (quote) {
            _this.quotes.push(quote);
            _this.quoteName = '';
            _this.companyName = '';
            _this.amountQuoted = '';
            _this.jobType = '';
            _this.jobDate = '';
            _this.jobDetails = '';
            _this.deliveryAddress = '';
        });
    };
    QuoteDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'quote-detail',
            template: __webpack_require__(959),
            styles: [__webpack_require__(955)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_quotes_service__["a" /* QuotesService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_quotes_service__["a" /* QuotesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_quotes_service__["a" /* QuotesService */]) === 'function' && _a) || Object])
    ], QuoteDetailComponent);
    return QuoteDetailComponent;
    var _a;
}());
//# sourceMappingURL=/Users/terilmathews/Documents/ShockAndVibeReporting/client/src/quote-detail.component.js.map

/***/ },

/***/ 464:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_quotes_service__ = __webpack_require__(465);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return QuoteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { MdCard, MdToolbar, MdIconModule, MdButtonModule, MdListModule, MdInputModule, MdCheckboxModule } from '@angular/material';
var QuoteComponent = (function () {
    function QuoteComponent(quotesService) {
        var _this = this;
        this.quotesService = quotesService;
        this.title = "Work List";
        this.quotesService.getQuotes()
            .subscribe(function (quotes) {
            _this.quotes = quotes;
        });
    }
    QuoteComponent.prototype.ngOnInit = function () {
    };
    QuoteComponent.prototype.deleteQuote = function (id) {
        var quotes = this.quotes;
        var isConfirm = confirm('Are you sure you want to delete');
        if (!isConfirm) {
            return false;
        }
        else {
            this.quotesService.deleteQuote(id).subscribe(function (data) {
                if (data.n == 1) {
                    for (var i = 0; i < quotes.length; i++) {
                        if (quotes[i]._id == id) {
                            quotes.splice(i, 1);
                        }
                    }
                }
            });
        }
    };
    QuoteComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'quote',
            template: __webpack_require__(960),
            styles: [__webpack_require__(956)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_quotes_service__["a" /* QuotesService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_quotes_service__["a" /* QuotesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_quotes_service__["a" /* QuotesService */]) === 'function' && _a) || Object])
    ], QuoteComponent);
    return QuoteComponent;
    var _a;
}());
//# sourceMappingURL=/Users/terilmathews/Documents/ShockAndVibeReporting/client/src/quote.component.js.map

/***/ },

/***/ 465:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return QuotesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuotesService = (function () {
    function QuotesService(http) {
        this.http = http;
        this.basePath = "http://localhost:3000/api/";
        console.log('Quotes Service Initialized...');
    }
    QuotesService.prototype.getQuotes = function () {
        return this.http.get(this.basePath + "quotes")
            .map(function (res) { return res.json(); });
    };
    QuotesService.prototype.addQuote = function (newQuote) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.basePath + 'quotes', JSON.stringify(newQuote), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    QuotesService.prototype.getQuote = function (id) {
        return this.http.get(this.basePath + "quotes/" + id)
            .map(function (res) { return res.json(); });
    };
    QuotesService.prototype.deleteQuote = function (id) {
        return this.http.delete(this.basePath + "quotes/" + id)
            .map(function (res) { return res.json(); });
    };
    QuotesService.prototype.updateQuote = function (quote) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.basePath + 'quotes/' + quote._id, JSON.stringify(quote), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    QuotesService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], QuotesService);
    return QuotesService;
    var _a;
}());
//# sourceMappingURL=/Users/terilmathews/Documents/ShockAndVibeReporting/client/src/quotes.service.js.map

/***/ },

/***/ 540:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 540;


/***/ },

/***/ 541:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(720);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/terilmathews/Documents/ShockAndVibeReporting/client/src/main.js.map

/***/ },

/***/ 719:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'New Blank App Starter Template with Material';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(957),
            styles: [__webpack_require__(953)],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/terilmathews/Documents/ShockAndVibeReporting/client/src/app.component.js.map

/***/ },

/***/ 720:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_routes__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_validation__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_md2_module__ = __webpack_require__(913);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_file_upload__ = __webpack_require__(928);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_flex_layout__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_quill_src_quill_module__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_hammerjs__ = __webpack_require__(876);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_quote_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_company_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_quote_detail_component__ = __webpack_require__(463);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_quote_component__["a" /* QuoteComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_company_component__["a" /* CompanyComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_quote_detail_component__["a" /* QuoteDetailComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["e" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4_ng2_validation__["CustomFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["MaterialModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_0__app_routes__["a" /* ROUTES */], { useHash: true, preloadingStrategy: __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* NoPreloading */] }),
                __WEBPACK_IMPORTED_MODULE_8_md2_module__["a" /* Md2Module */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_10__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_11_ngx_quill_src_quill_module__["a" /* QuillModule */],
                // NgbModule.forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["MdButtonModule"]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/terilmathews/Documents/ShockAndVibeReporting/client/src/app.module.js.map

/***/ },

/***/ 721:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_quote_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_company_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_quote_detail_component__ = __webpack_require__(463);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ROUTES; });



var ROUTES = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: 'quote',
        component: __WEBPACK_IMPORTED_MODULE_0__components_quote_component__["a" /* QuoteComponent */]
    },
    {
        path: 'company',
        component: __WEBPACK_IMPORTED_MODULE_1__components_company_component__["a" /* CompanyComponent */]
    },
    {
        path: 'newquote',
        component: __WEBPACK_IMPORTED_MODULE_2__components_quote_detail_component__["a" /* QuoteDetailComponent */]
    }
];
//# sourceMappingURL=/Users/terilmathews/Documents/ShockAndVibeReporting/client/src/app.routes.js.map

/***/ },

/***/ 722:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CompanyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyService = (function () {
    function CompanyService(http) {
        this.http = http;
        this.basePath = "http://localhost:3000/api/";
        console.log('Company Service Initialized...');
    }
    CompanyService.prototype.getCompanies = function () {
        return this.http.get(this.basePath + "company")
            .map(function (res) { return res.json(); });
    };
    CompanyService.prototype.addCompany = function (newCompany) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.basePath + 'company', JSON.stringify(newCompany), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CompanyService.prototype.deleteCompany = function (id) {
        return this.http.delete(this.basePath + "company/" + id)
            .map(function (res) { return res.json(); });
    };
    CompanyService.prototype.updateCompany = function (company) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.basePath + 'company/' + company._id, JSON.stringify(company), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CompanyService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], CompanyService);
    return CompanyService;
    var _a;
}());
//# sourceMappingURL=/Users/terilmathews/Documents/ShockAndVibeReporting/client/src/company.service.js.map

/***/ },

/***/ 723:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/terilmathews/Documents/ShockAndVibeReporting/client/src/environment.js.map

/***/ },

/***/ 724:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(989);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/terilmathews/Documents/ShockAndVibeReporting/client/src/polyfills.js.map

/***/ },

/***/ 953:
/***/ function(module, exports) {

module.exports = ".toolbar-filler {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n  }\n\n.md-menu-content {\n    background: rosybrown !important;\n    padding: 0;\n}"

/***/ },

/***/ 954:
/***/ function(module, exports) {

module.exports = "\n.botBorder {\n  border-bottom: 1px solid grey;\n}\n\n.toolbarStyles {\n  background-color: cadetblue;\n  color:white; \n  width: 100%;\n  border-radius: 3px 3px 0 0;\n  padding-top: 15px;\n  text-align: center;\n}\n\nmd-input-container {\n  width: 100%\n}\n\n[hidden] {\n  display: none !important;\n}\n\nmd-hint{\n  color: red;\n}"

/***/ },

/***/ 955:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 956:
/***/ function(module, exports) {

module.exports = "md-card-content{\n    padding: 20px;\n    border: solid 1px dimgray;\n}\n\nmd-toolbar{\n    height: 70px;\n    border: solid 1px dimgray;\n\n}"

/***/ },

/***/ 957:
/***/ function(module, exports) {

module.exports = "\n<md-toolbar color=\"primary\">\n    <a md-icon-button [mdMenuTriggerFor]=\"menu\">\n        <md-icon>menu</md-icon>\n    </a>\n\n    <span >My Company</span>\n    <span class=\"toolbar-filler\"></span>\n\n</md-toolbar>\n<md-menu #menu=\"mdMenu\">\n  <button md-menu-item routerLink=\"/quote\">\n    <md-icon> dialpad </md-icon>\n    <span> Enter a Quote </span>\n  </button>\n  <button md-menu-item routerLink=\"/company\">\n    <md-icon> voicemail </md-icon>\n    <span> Companies </span>\n  </button>\n  <button md-menu-item>\n    <md-icon> notifications_off </md-icon>\n    <span> Quote </span>\n  </button>\n</md-menu>\n\n<router-outlet></router-outlet>\n"

/***/ },

/***/ 958:
/***/ function(module, exports) {

module.exports = "\n<md-card style=\"padding:0\">\n    \n    <md-card-content style=\"padding:20px\">\n\n      <form #form=\"ngForm\" novalidate (ngSubmit)=\"onSubmit(form)\"> \n        <div class=\"form-group\" > \n        <md-input-container >\n            <input #cname=\"ngModel\" md-input [(ngModel)]=\"cName\" pattern=\"...+\" ngControl=\"cName\" name=\"cName\" placeholder=\"Name\" required>\n            <md-hint *ngIf=\"cname.invalid && cname.touched\" class=\"error\" >Company Name is required</md-hint>\n        </md-input-container>\n        </div>\n        <md-input-container >\n            <input md-input [(ngModel)]=\"cStreet\" name=\"cStreet\" placeholder=\"Street\">\n        </md-input-container>\n\n        <md-input-container >\n            <input md-input [(ngModel)]=\"cCity\" name=\"cCity\" placeholder=\"City\">\n        </md-input-container>\n        \n        <md-select [(ngModel)]=\"cState\" name=\"cState\" #selectedState\n            placeholder=\"State\" \n            (blur)=\"validateState(selectedState.value)\"\n            (change)=\"validateState(selectedState.value)\">\n            <md-option  value=\"default\">Select a State...</md-option>\n            <md-option *ngFor=\"let state of states\" [value]=\"state.value\">{{ state.viewValue }}</md-option>\n        </md-select>\n        <textarea md-input *ngIf=\"hasStateError\" class=\"error\" >Please select a valid state</textarea>\n        \n        <md-input-container >\n            <input md-input [(ngModel)]=\"cZip\" name=\"cZip\" placeholder=\"Zip\">\n        </md-input-container>\n        \n        <md-input-container >\n            <input md-input [(ngModel)]=\"cPhone\" name=\"cPhone\"  placeholder=\"Phone\">\n        </md-input-container>\n        <md-input-container >\n            <input md-input [(ngModel)]=\"cEmail\" name=\"cEmail\"  placeholder=\"Email\">\n        </md-input-container>\n        <button md-raised-button color=\"accent\" type=\"submit\" (click)=\"addCompany($event)\" \n            [disabled]=\"form.invalid\">Add Company</button>\n      </form>\n    </md-card-content>\n</md-card>\n\n<hr>\n\n<div style=\"width:100%\">\n{{ form.value | json }}\n{{ form.controls.cName?.errors | json }}\n<h4>{{ cname.dirty }}</h4>\n</div>\n\n<md-card style=\"width:50%;float:left;\" *ngFor=\"let company of companies\">\n    <md-card-content style=\"height:150px;float:left\">\n<button md-raised-button color=\"primary\" (click)=\"deleteCompany(company._id)\">Delete Company</button> <br><br>   \n        {{company.CompanyName}}<br>\n        {{company.CompanyStreet}}<br>\n        {{company.CompanyCity}}, \n        {{company.CompanyState}} \n        {{company.CompanyZip}}<br>\n        {{company.CompanyPhone}}<br>\n        {{company.CompanyEmail}}<br><br>\n    </md-card-content>\n</md-card>\n\n<br><br>\n"

/***/ },

/***/ 959:
/***/ function(module, exports) {

module.exports = "<md-card class=\"page-card\">\n        <md-toolbar color=\"accent\">\n            <md-card-title>New Job Quote</md-card-title><br>\n        </md-toolbar>\n        <md-card-content>\n            <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayout.sm=\"column\" fxLayout.md=\"column\" fxLayout.lg=\"column\">\n                <md-input-container>\n                    <input #quoteName=\"ngModel\" md-input placeholder=\"Job name\" type=\"text\" [(ngModel)]=\"quoteName\" name=\"quoteName\" required>\n                </md-input-container>\n                <p class=\"text-danger\" *ngIf=\"quoteName.touched && quoteName.invalid\">You must include a job name.</p>\n                <br>\n                <md-select [(ngModel)]=\"companyName\" name=\"companyName\" placeholder=\"Company Name\">\n                    <md-option *ngFor=\"let company of companies\" [value]=\"company.value\">{{ company.viewValue }}</md-option>\n                </md-select>\n                <br>\n                <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayout.sm=\"column\" fxLayout.md=\"column\" fxLayout.lg=\"column\" fxFlex=\"50\">\n                 <div class=\"card-form-input\" fxflex>\n                <md-input-container>\n                    <input #amount=\"ngModel\" md-input placeholder=\"Amount quoted\" type=\"text\" [(ngModel)]=\"amountQuoted\" name=\"amountQuoted\" digits>\n                </md-input-container>\n                <p class=\"text-danger\" *ngIf=\"amount.errors?.digits\">Enter a dollar amount in numbers only.</p>\n                 </div>\n                </div>\n                <br>\n            </div>\n        </md-card-content>\n    </md-card>\n    <md-card>\n        <md-toolbar color=\"accent\">\n            <md-card-title>Job Specifications</md-card-title><br>\n        </md-toolbar>\n        <md-card-content>\n\n            <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayout.sm=\"column\" fxLayout.md=\"column\" fxLayout.lg=\"column\">\n                <div class=\"card-form-input\" fxflex>\n                    <section class=\"card-form-section\">\n                        <md-radio-group [(ngModel)=\"jobType\" name=\"jobType\"]>\n                            <md-radio-button *ngFor=\"let job of jobTypes\" [value]=\"job.value\">\n                                {{job.viewValue}}\n                            </md-radio-button>\n                        </md-radio-group>\n                    </section>\n                </div>\n            </div>\n\n            <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayout.sm=\"column\" fxLayout.md=\"column\" fxLayout.lg=\"column\" fxFlex=\"50\">\n                <div class=\"card-form-input\" fxflex>\n                    <md2-datepicker type=\"date\" placeholder=\"Job Date\" format=\"YYYY/MM/DD\" [(ngModel)]=\"jobDate\" name=\"jobDate\">\n                    </md2-datepicker>\n                </div>\n            </div>\n\n            <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayout.sm=\"column\" fxLayout.md=\"column\" fxLayout.lg=\"column\">\n                \n                <md-icon class=\"card-form-input-icon\" fxflex>label_outline</md-icon>\n                <div class=\"card-form-input\" fxLayout=\"column\">\n                    <md-textarea placeholder=\"Job Details\"></md-textarea>\n                    <input md-input type=\"text\" [(ngModel)]=\"jobDetails\" name=\"jobDetails\" #details=\"ngModel\" digits>\n                    <p class=\"text-danger\" *ngIf=\"details?.errors?.invalid\">Please include job details</p>\n                </div>\n\n                <md-icon class=\"card-form-input-icon\" fxflex>home</md-icon>\n                <div class=\"card-form-input\" fxflex=\"70\" fxLayout=\"column\">\n                    <md-input-container>\n                        <input md-input placeholder=\"Deliver report address\" type=\"text\" [(ngModel)]=\"deliveryAddress\" name=\"deliveryAddress\" #addr=\"ngModel\">\n                    </md-input-container>\n                    <!--<p class=\"text-danger\" *ngIf=\"addr?.errors?.invalid\">Please enter address where report will be delivered</p>-->\n                </div>\n\n            </div>\n            <br>\n\n            <br>\n            <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayout.sm=\"column\" fxLayout.md=\"column\" fxLayout.lg=\"column\">\n                <div class=\"card-form-input\" fxflex=\"30\" fxLayout=\"column\">\n                    <md-checkbox #accept>I certify that this information is correct</md-checkbox>\n                </div>\n            </div>\n        </md-card-content>"

/***/ },

/***/ 960:
/***/ function(module, exports) {

module.exports = "<div class=\"page-content\">\r\n    <md-card class=\"page-card\">\r\n        <md-toolbar color=\"accent\">\r\n            <md-card-title style=\"margin-bottom: 0\">Quotes</md-card-title><br>\r\n        </md-toolbar>\r\n        <md-card-content>\r\n            <md-list >\r\n                <md-list-item *ngFor=\"let quote of quotes\">\r\n                    <md-icon md-list-avatar>note</md-icon>\r\n                    <h4 md-line><a>{{quote.QuoteName}}</a></h4>\r\n                    <p md-line>{{quote.CompanyName}}</p>\r\n                    <p md-line>{{quote.JobDate}}</p>\r\n                </md-list-item>\r\n            </md-list>\r\n        </md-card-content>\r\n    </md-card>\r\n</div>\r\n\r\n   \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    \r\n"

/***/ },

/***/ 990:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(541);


/***/ }

},[990]);
//# sourceMappingURL=main.bundle.map