import {RouteParams} from 'angular2/router';
import {Component, Injectable} from 'angular2/core';
import {EmployeeService} from './employeeservice'
import 'rxjs/Rx';
import {NgModel} from 'angular2/common';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'editemployee',
    templateUrl: 'templates/editemployeetemplate.html',
    directives: [NgModel],
    viewProviders: [EmployeeService, HTTP_PROVIDERS]
})

export class EditEmployeeComponent {
    _employeeService: EmployeeService;
    constructor(routeParams: RouteParams, employeeService: EmployeeService) {        
        var id = routeParams.get('id');
        this._employeeService = employeeService;
        this._employeeService.getEmployee(employeeService.getEmp,id);
        // employeeService.getEmp(id);
        //this._employeeService.setEmp();
    };
}