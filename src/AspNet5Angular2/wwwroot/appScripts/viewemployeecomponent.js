"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var employeeservice_1 = require('./employeeservice');
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
require('rxjs/Rx');
var ViewEmployeeComponent = (function () {
    function ViewEmployeeComponent(http, employeeService) {
        this._employeeService = employeeService;
        this._http = http;
        this._employeeService.getEmployee(undefined, null);
    }
    ;
    ViewEmployeeComponent.prototype.deleteEmp = function (id) {
        var _this = this;
        this._http.delete("api/Employee/" + id).
            map(function (res) { return console.log(res); }).
            subscribe(function (p) {
            console.log(p);
            _this._employeeService.getEmployee(undefined, null);
        });
    };
    ;
    ViewEmployeeComponent = __decorate([
        core_1.Component({
            selector: 'viewemployee',
            templateUrl: 'templates/viewemployeetemplate.html',
            directives: [common_1.NgFor, router_1.RouterLink],
            viewProviders: [http_1.HTTP_PROVIDERS, employeeservice_1.EmployeeService]
        }), 
        __metadata('design:paramtypes', [http_1.Http, employeeservice_1.EmployeeService])
    ], ViewEmployeeComponent);
    return ViewEmployeeComponent;
}());
exports.ViewEmployeeComponent = ViewEmployeeComponent;
//# sourceMappingURL=viewemployeecomponent.js.map