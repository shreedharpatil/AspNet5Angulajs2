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
var http_1 = require('angular2/http');
var EmployeeService = (function () {
    function EmployeeService(http) {
        this.Employees = [];
        this.Employee = {};
        this.self = this;
        this._http = http;
    }
    EmployeeService.prototype.getEmp = function (id) {
        for (var i = 0; i < this.Employees.length; i++) {
            if (this.Employees[i].Id == id) {
                this.Employee = this.Employees[i];
            }
        }
    };
    EmployeeService.prototype.getEmployee = function (callback, id) {
        var _this = this;
        this._http.get('api/Employee')
            .map(function (res) { return res.json(); }).subscribe(function (people) {
            console.log(people);
            _this.Employees = people;
            if (callback) {
                callback(id);
            }
        });
    };
    ;
    EmployeeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employeeservice.js.map