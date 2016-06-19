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
var router_1 = require('angular2/router');
var core_1 = require('angular2/core');
var employeeservice_1 = require('./employeeservice');
require('rxjs/Rx');
var common_1 = require('angular2/common');
var http_1 = require('angular2/http');
var EditEmployeeComponent = (function () {
    function EditEmployeeComponent(routeParams, http, router, employeeService) {
        var id = routeParams.get('id');
        this._employeeService = employeeService;
        this._http = http;
        this._router = router;
        this._employeeService.getEmployee(employeeService.getEmp, id);
        // employeeService.getEmp(id);
        //this._employeeService.setEmp();
    }
    ;
    EditEmployeeComponent.prototype.editEmp = function () {
        var _this = this;
        var body = JSON.stringify(this._employeeService.getCurrentEmp());
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        this._http.put("api/Employee", body, options).
            map(function (res) { return console.log(res); }).
            subscribe(function (p) {
            console.log(p);
            _this._router.navigateByUrl('/viewemployee');
        });
    };
    ;
    EditEmployeeComponent = __decorate([
        core_1.Component({
            selector: 'editemployee',
            templateUrl: 'templates/editemployeetemplate.html',
            directives: [common_1.NgModel],
            viewProviders: [employeeservice_1.EmployeeService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [router_1.RouteParams, http_1.Http, router_1.Router, employeeservice_1.EmployeeService])
    ], EditEmployeeComponent);
    return EditEmployeeComponent;
}());
exports.EditEmployeeComponent = EditEmployeeComponent;
//# sourceMappingURL=editemployeecomponent.js.map